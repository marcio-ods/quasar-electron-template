import { useMainWindow } from './useMainWindow';

export const useToggleDevTools = (): void => {
  const win = useMainWindow()

  if (win) {
    if (win.webContents.isDevToolsOpened())
      win.webContents.closeDevTools()
    else
      win.webContents.openDevTools()
  }


}

