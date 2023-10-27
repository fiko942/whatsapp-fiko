const fs = require('fs')
const path = require('path')
const sqlite = require('sqlite3').verbose()

module.exports = class Database {
    constructor() {
        this.dbDir = path.join(process.env.APPDATA, 'whatsapp-fiko')
        if(!fs.existsSync(this.dbDir)) fs.mkdirSync(this.dbDir)
        this.dbFile = path.join(this.dbDir, 'main.db')
        this.db = new sqlite.Database(this.dbFile)
    }

    query(sql) {
        return new Promise((resolve, reject) => {
            this.db.all(sql, (err, rows) => {
                if(err) return reject(err)
                resolve(rows)
            })
        })
    }
}