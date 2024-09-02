import { YesOrNo } from '../../app/appTypes';
import { useMainWindow } from './useMainWindow';

export const useSetAlwaysOnTop = (onTop: YesOrNo) => {
  if (onTop === 'yes')
    useMainWindow()?.setAlwaysOnTop(true)
  else
    useMainWindow()?.setAlwaysOnTop(false)

  if (onTop !== 'no' && onTop !== 'yes')
    console.log('Error: setAlwaysOnTop', onTop);
}



