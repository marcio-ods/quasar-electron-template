export type YesOrNo = 'yes' | 'no'
export type UpOrDown = 'up' | 'down'

export type Result<t = unknown> = {
  ok: t,
  err?: string
}

// export type SETUP = {
//   diretorio: string,
//   alwaysOnTop: YesOrNo
// }
