const electron = require('electron');
const url = require('url');
const path = require('path');
const {app, BrowserWindow, Menu} = electron;
let mainWindow;

app.on('ready', function(){
    mainWindow = new BrowserWindow({});
    mainWindow.loadURL(url.format({
        pathname: path.join(__dirname,'../public/index.html'),
        protocol: 'file:',
        slashes: true
    }));
    //mainWindow.loadURL('http://localhost:3000');
    //const mainMenu = Menu.buildFromTemplate(menuTemplate);
    //Menu.setApplicationMenu(mainMenu);
});

const menuTemplate = [{label: 'File'},
                       {label: 'Edit'}];