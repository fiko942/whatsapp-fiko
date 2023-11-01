const fs = require('fs')
const path = require('path')
const sqlite = require('sqlite3').verbose()

module.exports = class Database {

    /**
     * The constructor function creates a directory and a database file, and initializes a SQLite
     * database object.
     */
    constructor() {
        this.dbDir = path.join(process.env.APPDATA, 'whatsapp-fiko')
        if(!fs.existsSync(this.dbDir)) fs.mkdirSync(this.dbDir)
        this.dbFile = path.join(this.dbDir, 'main.db')
        this.db = new sqlite.Database(this.dbFile)
    }

    /**
     * The function `query` executes a SQL query and returns a promise that resolves with the result
     * rows or rejects with an error.
     * @param sql - The `sql` parameter is a string that represents the SQL query that you want to
     * execute. It can be any valid SQL statement, such as SELECT, INSERT, UPDATE, DELETE, etc.
     * @returns a Promise object.
     */
    query(sql) {
        return new Promise((resolve, reject) => {
            this.db.all(sql, (err, rows) => {
                if(err) return reject(err)
                resolve(rows)
            })
        })
    }
    
}