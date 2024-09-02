import { YesOrNo } from '../../app/appTypes';
import { useMainWindow } from './useMainWindow';

export const getAlwaysOnTop = (): YesOrNo => {
  if (useMainWindow()?.isAlwaysOnTop())
    return 'yes'
  return 'no'
}

