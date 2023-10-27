const {app, BrowserWindow} = require('electron')
const server = require('./server')
const prod = require('electron-is-packaged').isPackaged

server.start()

const createWindow = () => {
    const window = new BrowserWindow({
        width: 800,
        height: 600,
        webPreferences: {
            nodeIntegration: true
        }
    })
    prod && window.loadURL(`http://localhost:${server.port}`).then(r => {})
    !prod && window.loadURL('http://localhost:3000')
    process.mainWindow = window
}

app.whenReady()
    .then(() => {
        createWindow()
    })
