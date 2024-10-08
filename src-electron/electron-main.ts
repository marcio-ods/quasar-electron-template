import './ipc/ipcRouterMain';

import {
  app,
  BrowserWindow,
} from 'electron';
import os from 'os';
import path from 'path';

import { bootstrapFolders } from './config/bootstrapFolders';
import { useMainWindow } from './services/electron/useMainWindow';

// needed in case process is undefined under Linux
const platform = process.platform || os.platform();

let mainWindow: BrowserWindow | undefined;

function createWindow() {
  bootstrapFolders()
  /**
   * Initial window options
   */
  mainWindow = new BrowserWindow({
    frame: false,
    icon: path.resolve(__dirname, 'icons/icon.png'), // tray icon
    width: 1000,
    height: 600,
    useContentSize: true,
    webPreferences: {
      contextIsolation: true,
      // More info: https://v2.quasar.dev/quasar-cli-vite/developing-electron-apps/electron-preload-script
      preload: path.resolve(__dirname, process.env.QUASAR_ELECTRON_PRELOAD),
    },
  });
  useMainWindow(mainWindow)
  mainWindow.loadURL(process.env.APP_URL);

  // if (process.env.DEBUGGING) {
  //   // if on DEV or Production with debug enabled
  //   mainWindow.webContents.openDevTools();
  // } else {
  //   // we're on production; no access to devtools pls
  //   mainWindow.webContents.on('devtools-opened', () => {
  //     mainWindow?.webContents.closeDevTools();
  //   });
  // }

  mainWindow.on('closed', () => {
    mainWindow = undefined;
  });
}

app.whenReady().then(createWindow);

app.on('window-all-closed', () => {
  if (platform !== 'darwin') {
    app.quit();
  }
});

app.on('activate', () => {
  if (mainWindow === undefined) {
    createWindow();
  }
});
