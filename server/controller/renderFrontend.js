const fs = require('fs')
const path = require('path')

const bundledFrontend = path.join(__dirname, 'bundled_frontend')
const index = path.join(bundledFrontend, 'index.html')

module.exports = (req, res) => {
    try {
        const target = path.join(bundledFrontend, req.path)
        if(fs.existsSync(target) && fs.statSync(target).isFile()) {
            res.sendFile(target)
        } else {
            res.sendFile(index)
        }
    } catch(err) {
        res.status(500).send(err.message || err)
    }
}