import { app, BrowserWindow } from 'electron';

const config = require( "./config.json" );

let mainWindow = null;

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});

app.on('ready', () => {
  mainWindow = new BrowserWindow(config.window);
  mainWindow.loadURL('file://' + __dirname + '/index.html');
  mainWindow.on('closed', () => {
    mainWindow = null;
  });
});
