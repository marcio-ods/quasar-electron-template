import {
  IPC_DATA_REQUEST,
  IPC_MESSAGE,
} from 'ipc/ipcTypes';

declare global {
  interface Window {
    ipc: {
      /**
       *
       * @param args args_0=action | args_1=endpoint | args_2=data
       * @returns
       */
      // request: <R = never, D = never>(...args: IPC_REQUEST<D>) => Promise<RESULT<R>>
      request: (msg: Omit<IPC_DATA_REQUEST, 'content'> | IPC_DATA_REQUEST) => Promise<IPC_MESSAGE>
    };
  }
}
