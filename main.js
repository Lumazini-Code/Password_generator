const { app, BrowserWindow } = require('electron');

let mainwindow;

app.on('ready', () => {

    mainwindow = new BrowserWindow({
        resizable: false,
        title: "Gerador de senhas",
        opacity: 90,
        width: 800,
        autoHideMenuBar: true,
        height: 600,
        

    });
    mainwindow.loadURL(`File://${__dirname}/index.html`)

});