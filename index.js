const { app, BrowserWindow } = require('electron')

let mainWindow

app.on('ready', () => {
    mainWindow = new BrowserWindow({
        width: 1080,
        height: 760
    })

    mainWindow.loadURL(`file://${__dirname}/index.html`)
})

app.disableHardwareAcceleration()
