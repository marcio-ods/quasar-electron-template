import { IPC_MESSAGE } from '#/ipc/ipcTypes';
import { useGetPrinters } from '#/services/electron/useGetPrinters';

import { IpcAdapter } from './IpcAdapter';

export class PrinterAdapter extends IpcAdapter {

  constructor(msg: IPC_MESSAGE) {
    super(msg)
  }

  printToPdf(): IPC_MESSAGE {

    console.log(this.msg.content);

    return this.setContent('ok').msg

  }

  async getPrinters(): Promise<IPC_MESSAGE> {
    const res = await useGetPrinters()
    console.log(res);

    return this.setContent(res).msg
    //   [
    //   {
    //     deviceId: 'OneNote for Windows 10',
    //     name: 'OneNote for Windows 10',
    //     paperSizes: ['Carta', 'A4']
    //   },
    //   {
    //     deviceId: 'OneNote (Desktop)',
    //     name: 'OneNote (Desktop)',
    //     paperSizes: ['Carta', 'Tabl´┐¢ide', 'Of´┐¢cio', 'Executivo']
    //   },
    //   {
    //     deviceId: 'Microsoft XPS Document Writer',
    //     name: 'Microsoft XPS Document Writer',
    //     paperSizes: ['Carta', 'Carta pequeno', 'Tabl´┐¢ide', 'Ledger']
    //   },
    //   {
    //     deviceId: 'Microsoft Print to PDF',
    //     name: 'Microsoft Print to PDF',
    //     paperSizes: ['Carta', 'Tabl´┐¢ide', 'Of´┐¢cio', 'Extrato']
    //   },
    //   {
    //     deviceId: 'Fax',
    //     name: 'Fax',
    //     paperSizes: ['Carta', 'Carta pequeno', 'Of´┐¢cio', 'Extrato']
    //   }
    // ])
    // console.log(this.msg);
    // useGetPrinters().then(v => {
    //   console.log(v);
    //   return this.setContent(v)
    // }
    // ).catch(er => { return this.setContent(er) }

    // )

  }

  // getDefaultPrinter(): IPC_MESSAGE {
  //   return this.setContent(useGetDefaultPrinter()).msg
  // }

  // async testPdf() {
  //   await sleep(2000)
  //   this.setContent(getAlwaysOnTop())
  //   pdfTest()
  //   return this.msg
  // }


}

