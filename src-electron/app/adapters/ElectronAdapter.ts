import { YesOrNo } from '#/app/appTypes';
import { IPC_MESSAGE } from '#/ipc/ipcTypes';
import { getAlwaysOnTop } from '#/services/electron/useGetAlwaysOnTop';
import { useQuitApp } from '#/services/electron/useQuitApp';
import { useSetAlwaysOnTop } from '#/services/electron/useSetAlwaysOnTop';

import { IpcAdapter } from './IpcAdapter';

export class ElectronAdapter extends IpcAdapter {

  constructor(msg: IPC_MESSAGE) {
    super(msg)
  }

  isAlwaysOnTop(): IPC_MESSAGE {
    return this.setContent(getAlwaysOnTop()).msg
  }

  setAlwaysOnTop(): IPC_MESSAGE {
    useSetAlwaysOnTop(this.msg.content as YesOrNo)
    return this.isAlwaysOnTop()
  }

  appQuit(): IPC_MESSAGE {
    useQuitApp()
    return this.setError('Erro ao fechar aplicativo').msg
  }
}

