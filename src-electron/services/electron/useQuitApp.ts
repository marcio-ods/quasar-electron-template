// import { useMainWindow } from './useMainWindow';
import { app } from 'electron';
import path from 'path';

export const useQuitApp = () => {
  // useMainWindow()?.
  // app.quit()


  const publicFolder = path.resolve(__dirname, process.env.QUASAR_PUBLIC_FOLDER)
  console.log(app.getPath('userData'));
  console.log(__dirname, process.env.QUASAR_PUBLIC_FOLDER);
  console.log(publicFolder);
  console.log(process.env.INIT_CWD)
  // console.log(process.env);




}


