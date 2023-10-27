const Database = require('./system/Database')
const database = new Database()
database.query("SELECT * FROM account WHERE name = 'adadad'")
.then(results => {
    console.log(results)
})
.catch(err => {
    console.error(err.message || err)
})