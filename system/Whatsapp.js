const fs = require('fs')
const path = require('path')
const utils = require('../utils')
const {} = require('whatsapp-web.js')

module.exports = class Whatsapp {
    constructor() {
        this.userDataRootDir = path.join(process.env.APPDATA, 'whatsapp-fiko-user-data')
        if(!fs.existsSync(this.userDataRootDir)) fs.mkdirSync(this.userDataRootDir)
        this.database = process.database
        this.whatsappSessionsDir = path.join(this.userDataRootDir, 'whatsapp(s)')
        if(fs.existsSync(this.whatsappSessionsDir)) fs.mkdirSync(this.whatsappSessionsDir)
        this.initDb()
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
                valid_session
            )
        `
        await process.database.query(initSql)
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
        for(let i = 0; i < length; i++) {
            c += alphabet.charAt(Math.floor(Math.random() * alphabet.length))
        }
        return c
    }

    add(label) {
        const id = this.generateId()
        return new Promise(async (resolve, reject) => {
            try {
            } catch(err) {
                reject(err.message || err)
            }
        })
    }
}