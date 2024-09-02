import { useMainWindow } from './useMainWindow';

export const useReload = (): void => {
  const win = useMainWindow()
  if (win)
    win.webContents.reloadIgnoringCache()
}

