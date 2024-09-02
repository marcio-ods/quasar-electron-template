import { useFilterMessage } from '#/services/electron/useFilterMessage';
import { IPC_CHANNEL_NAME } from 'config/setup';
import {
  contextBridge,
  ipcRenderer,
} from 'electron';

import { IPC_DATA_REQUEST } from './ipcTypes';

contextBridge.exposeInMainWorld('ipc', {
  request: async (dataRequest: IPC_DATA_REQUEST) => {

    const filterMsg = useFilterMessage(dataRequest)

    if (filterMsg)
      return await ipcRenderer.invoke(IPC_CHANNEL_NAME, filterMsg);

    dataRequest.error = 'Erro ao enviar requisição'
    return dataRequest
  }
});


