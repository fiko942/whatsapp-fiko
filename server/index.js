const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')
const controller = require('./controller')
const app = express()

app.use(cors())
app.use(bodyParser({extended: true, limit: '100MB'}))

const port = 3502

const prepareRoute = () => {
    app.get('*', controller.renderFrontend)
}

const start = () => {
    prepareRoute()
    app.listen(port, () => {
        console.log(`Application is listening on port: ${port}`)
    })
}

module.exports = {start, port}