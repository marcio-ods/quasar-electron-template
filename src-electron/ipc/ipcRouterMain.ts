import { UserAdapter } from '#/app/adapters/UserAdapter';
import { ipcMain } from 'electron';

import { BrowserWindowAdapter } from '../app/adapters/BrowserWindowAdapter';
import { ElectronAdapter } from '../app/adapters/ElectronAdapter';
import { IpcAdapter } from '../app/adapters/IpcAdapter';
import { PrinterAdapter } from '../app/adapters/PrinterAdapter';
import { YesOrNo } from '../app/appTypes';
import { IPC_CHANNEL_NAME } from '../config/setup';
import { jsonParse } from '../helpers/jsonParse';
import {
  IPC_INPUT,
  IPC_MESSAGE,
} from './ipcTypes';

// ipcMain.handleOnce
const defaultErro = (target = 'inválido') => new IpcAdapter({ target }).setError('Requisição inválida').msg

const hasOwnProperties = (data: IPC_MESSAGE): YesOrNo => {
  if (data.hasOwnProperty('target') && data.hasOwnProperty('content') && data.hasOwnProperty('id'))
    return 'yes'
  return 'no'
}

ipcMain.handle(
  IPC_CHANNEL_NAME,
  async (
    _event,
    ipcData: IPC_INPUT
  ): Promise<IPC_MESSAGE> => {

    if (typeof ipcData.target !== 'string' || typeof ipcData.data !== 'string')
      return defaultErro()

    const { ok, err } = jsonParse<IPC_MESSAGE>(ipcData.data)
    if (err)
      return defaultErro(ipcData.target)

    if (hasOwnProperties(ok) === 'no')
      return defaultErro(ipcData.target)

    switch (ipcData.target.trim()) {
      case 'isAlwaysOnTop':
        return new ElectronAdapter(ok).isAlwaysOnTop()
      case 'setAlwaysOnTop':
        return new ElectronAdapter(ok).setAlwaysOnTop()
      case 'appQuit':
        return new ElectronAdapter(ok).appQuit()
      case 'minimize':
        return new BrowserWindowAdapter(ok).minimize()
      case 'toggleMaximize':
        return new BrowserWindowAdapter(ok).toggleMaximize()
      case 'close':
        return new BrowserWindowAdapter(ok).close()
      case 'toggleDevTools':
        return new BrowserWindowAdapter(ok).toggleDevTools()
      case 'reload':
        return new BrowserWindowAdapter(ok).reload()
      case 'getPrinters':
        return new PrinterAdapter(ok).getPrinters()
      case 'userInsert':
        return new UserAdapter(ok).insert()
      case 'userGetAll':
        return new UserAdapter(ok).getAll()
      default:
        return defaultErro(ipcData.target)
    }

  }
);
