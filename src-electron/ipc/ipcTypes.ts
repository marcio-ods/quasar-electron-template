
export type IPC_MESSAGE<t = unknown> = {
  target: string
  content?: t
  error?: string
  id?: string
  // front?: string;
  // back?: string;

}


export type IPC_INPUT = { target: string, data: string }


// export type IPC_MESSAGE<t = unknown> = {
//   target: string
//   data: {
//     content?: t
//     error?: string
//     id?: string
//     // front?: string;
//     // back?: string;
//   }
// }



export type IPC_ON = (message: IPC_MESSAGE) => Promise<IPC_MESSAGE>
export type IPC_FN = (message: IPC_MESSAGE) => void

export type IPC_FN_REQUEST = { fn?: IPC_FN }
export type IPC_DATA_REQUEST = IPC_FN_REQUEST & IPC_MESSAGE
// export type IPC_DATA_REQUEST = IPC_FN_REQUEST & Omit<IPC_MESSAGE, 'content'> & { content?: unknown }

// export interface IPC_REQUEST {
//   request: (msg: Omit<IPC_DATA_REQUEST, 'content'> | IPC_DATA_REQUEST) => Promise<IPC_MESSAGE>;
// }

