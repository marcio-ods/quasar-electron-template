import { YesOrNo } from '../../app/appTypes';
import { useMainWindow } from './useMainWindow';

export const useToggleMaximizeWindow = (): YesOrNo => {
  const win = useMainWindow()


  if (win && win.maximizable) {

    if (win.isMaximized()) {
      win.unmaximize()
    } else {
      win.maximize()
    }

    return 'yes'
  }
  return 'no'
}

