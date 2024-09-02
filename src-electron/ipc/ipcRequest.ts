import { makeId } from '../helpers/makeId';
import {
  IPC_DATA_REQUEST,
  IPC_MESSAGE,
} from './ipcTypes';

type STATE = Pick<IPC_DATA_REQUEST, 'id' | 'fn'>

const _ipcStateRequest = {
  _state: <STATE[]>[],
  exec(response: IPC_MESSAGE) {
    const state = this._state.find(f => f.id === response.id)
    this._state = this._state.filter(f => f.id !== response.id)
    // console.log('ipRequest', response);
    // console.log(this._state);
    state?.fn?.(response)
  },
  push(data: STATE) {
    this._state.push(data)
  },
  clean() {
    this._state = []
  }
}

export const ipcStateRequestClean = () => {
  _ipcStateRequest.clean()
}

// export const ipRequest = <t = unknown>(data_req: IPC_DATA_REQUEST<t>) => {
export const ipcRequest = (data_req: IPC_DATA_REQUEST) => {
  data_req.id = makeId()
  const { fn, id } = data_req
  _ipcStateRequest.push({ id, fn })

  window.ipc.request(data_req)
    .then(response => {
      _ipcStateRequest.exec(response)
    })
    .catch(({ message }: { message: string }) => {
      message = message ? ' | ' + message : ''
      data_req.error = 'Erro ao enviar requisição' + message
      _ipcStateRequest.exec(data_req)
    })
}

