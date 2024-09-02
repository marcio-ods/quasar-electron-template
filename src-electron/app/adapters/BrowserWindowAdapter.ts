import { IPC_MESSAGE } from '#/ipc/ipcTypes';
import { useCloseWindow } from '#/services/electron/useCloseWindow';
import { useMinimizeWindow } from '#/services/electron/useMinimizeWindow';
import { useReload } from '#/services/electron/useReload';
import { useToggleDevTools } from '#/services/electron/useToggleDevTools';
import {
  useToggleMaximizeWindow,
} from '#/services/electron/useToggleMaximizeWindow';

import { IpcAdapter } from './IpcAdapter';

export class BrowserWindowAdapter extends IpcAdapter {

  constructor(msg: IPC_MESSAGE) {
    super(msg)
  }

  minimize(): IPC_MESSAGE {
    const res = useMinimizeWindow()
    if (res === 'yes')
      return this.setContent('').msg
    return this.setError('Não foi possível minimizar a janela').msg
  }

  toggleMaximize(): IPC_MESSAGE {
    const res = useToggleMaximizeWindow()
    if (res === 'yes')
      return this.setContent('').msg
    return this.setError('Não foi possível maximizar a janela').msg
  }

  close(): IPC_MESSAGE {
    const res = useCloseWindow()
    if (res === 'yes')
      return this.setContent('').msg
    return this.setError('Não foi possível fechar a janela').msg
  }

  toggleDevTools(): IPC_MESSAGE {
    useToggleDevTools()
    return this.setContent('').msg
  }

  reload(): IPC_MESSAGE {
    useReload()
    return this.setContent('').msg
  }
}

