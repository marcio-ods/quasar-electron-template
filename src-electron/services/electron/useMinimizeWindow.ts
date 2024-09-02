import { YesOrNo } from '../../app/appTypes';
import { useMainWindow } from './useMainWindow';

export const useMinimizeWindow = (): YesOrNo => {
  const win = useMainWindow()

  if (win && win.minimizable) {
    win.minimize()
    return 'yes'
  }
  return 'no'
  // win.maximize()
}
