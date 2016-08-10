const electron = require('electron');

// Module to control application life.
const app = electron.app;

// Module to create native browser window.
const BrowserWindow = electron.BrowserWindow;

app.on('ready', () => {
    var mainWindow = new BrowserWindow({
        width: 600,
        height: 300,
        center: true,
        title: "Electron Notification Example",
    });
    mainWindow.loadURL('file://' + __dirname + '/renderer/app.html');
    mainWindow.on('closed', () => {
        mainWindow = null;
    });
});