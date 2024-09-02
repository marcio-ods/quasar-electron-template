import { BrowserWindow } from 'electron';

let mainWindow: BrowserWindow | undefined = undefined;

export const useMainWindow = (win?: BrowserWindow) => {
  if (win) mainWindow = win
  return mainWindow
}
