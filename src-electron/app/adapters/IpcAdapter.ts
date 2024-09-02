import { IPC_MESSAGE } from '#/ipc/ipcTypes';

export class IpcAdapter {
  private _msg: IPC_MESSAGE

  constructor(input: IPC_MESSAGE) {
    this._msg = input
  }

  get msg(): IPC_MESSAGE {
    return this._msg
  }
  get isValid(): IPC_MESSAGE {
    return this._msg
  }

  // setContent<T>(content: T) {
  // contentToJson<t = unknown>(): IpcAdapter {
  //   this._msg.content = jsonParse<t>(this._msg.content as string)
  //   return this
  // }
  // setContent<T>(content: T) {

  setContent(content: unknown): IpcAdapter {
    this._msg.content = content
    return this
  }

  setError(msgErr: string): IpcAdapter {
    this._msg.content = ''
    this._msg.error = msgErr
    return this
  }
}
