const fs = require('fs')
const path = require('path')
const utils = require('../utils')
const {
    Client,
    LocalAuth
} = require('whatsapp-web.js')
const qrcode = require('qrcode')

module.exports = class Whatsapp {
    constructor() {
        this.userDataRootDir = path.join(process.env.APPDATA, 'whatsapp-fiko-user-data')
        if (!fs.existsSync(this.userDataRootDir)) fs.mkdirSync(this.userDataRootDir)
        this.database = process.database
        this.whatsappSessionsDir = path.join(this.userDataRootDir, 'whatsapp(s)')
        if (fs.existsSync(this.whatsappSessionsDir)) fs.mkdirSync(this.whatsappSessionsDir)
        this.initDb()
        this.clients = []
    }

    /**
     * The function initializes a database table for storing session information.
     */
    async initDb() {
        const initSql = `
            CREATE TABLE IF NOT EXISTS sessions (
                id INT PRIMARY KEY,
                label VARCHAR(255),
                created INT,
                unread_count INT,
                unread_last INT,
                unread_source_name VARCHAR(255),
                error_msg VARCHAR(255),
                qr_base64 LONGTEXT,
                authenticated INT(1)
            )
        `
        await process.database.query(initSql)
    }

    /**
     * Set the authenticated state of a session.
     * 
     * @param {string} id - The ID of the session.
     * @param {boolean} state - The new authenticated state.
     * @returns {boolean} - True if the state was successfully updated.
     */
    async setAuthenticated(id, state) {
        await process.database.query(`
            UPDATE sessions
            SET authenticated = ${state ? '1' : '0'}
            WHERE id = "${id}"
        `)
        return true
    }

    /**
     * The function generates a random ID string of length 50 using a combination of lowercase and
     * uppercase letters, as well as numbers.
     * @returns The function `generateId()` returns a randomly generated string of length 50,
     * consisting of alphanumeric characters.
     */
    generateId() {
        const length = 50
        const alphabet = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890'
        let c = ''
        for (let i = 0; i < length; i++) {
            c += alphabet.charAt(Math.floor(Math.random() * alphabet.length))
        }
        return c
    }

    /**
     * The `add` function adds a new session to a database table, with a unique ID, a label, a
     * timestamp, and default values for other fields.
     * @param label - The `label` parameter is a string that represents the label of a session.
     */
    async add(label) {
        const id = this.generateId()
        const labelFormatted = label.split('"').join('').trim()
        if(labelFormatted.length < 1) throw new Error('Enter label more than 0')
        const existsQuery = `
            SELECT COUNT(*) FROM sessions
            WHERE label = "${labelFormatted}"
        `
        const countsByLabel = (await process.database.query(existsQuery))[0]['COUNT(*)']
        if(countsByLabel > 0) throw new Error('Label sudah pernah ditambahkan sebelumnya')
        // Insert to the database
        await process.database.query(`
            INSERT INTO sessions VALUES(
                "${id}",
                "${label}",
                "${utils.date.getCurrentEpoch()}",
                "0",
                null,
                null,
                "Authentication is required",
                '',
                0
            )
        `)
    }
}