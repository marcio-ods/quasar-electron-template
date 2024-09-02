import {
  IPC_DATA_REQUEST,
  IPC_INPUT,
  IPC_MESSAGE,
} from '#/ipc/ipcTypes';

export const useFilterMessage = ({ content, target, id }: IPC_DATA_REQUEST | IPC_MESSAGE): IPC_INPUT | undefined => {
  content = content || ''

  if (typeof content === 'function' || [id, target].some(s => typeof s !== 'string'))
    return undefined

  // return { content, target, id }
  return { target, data: JSON.stringify({ content, target, id }) }
}

// export const useFilterMessageView = ({ content, target, id }: IPC_DATA_REQUEST | IPC_MESSAGE) => {
//   content = content || ''

//   if (typeof content === 'function' || [id, target].some(s => typeof s !== 'string'))
//     return null

//   return JSON.stringify({ content, target, id })
// }
