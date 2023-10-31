const Database = require('./Database')
const Whatsapp = require('./Whatsapp')

process.database = new Database()
process.whatsapp = new Whatsapp()

module.exports = {
    whatsapp: process.whatsapp,
    database: process.database
}