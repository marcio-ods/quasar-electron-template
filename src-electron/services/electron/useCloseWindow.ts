import { app } from 'electron';

import { YesOrNo } from '../../app/appTypes';
import { useMainWindow } from './useMainWindow';

export const useCloseWindow = (): YesOrNo => {
  const win = useMainWindow()

  if (win && win.closable) {
    win.close()
    app.quit()
    return 'yes'
  }
  return 'no'
}

