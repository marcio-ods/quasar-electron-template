import path from 'path';

/**
 * electron-main or /electron-preload
 */
export const publicFolder = path.resolve(__dirname, process.env.QUASAR_PUBLIC_FOLDER)
