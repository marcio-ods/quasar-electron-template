import { mkdirSync } from 'fs-extra';
import { resolve } from 'path';

export const makeFolder = (...paths: string[]) => {
  paths.forEach(pth => {
    pth = resolve(pth)
    // console.log(pth);
    console.log(mkdirSync(pth, { recursive: true }));

    // if (!existsSync(pth)) {
    // mkdirSync(pth, { recursive: true });
    // console.log(`Diretório ${pth} criado com sucesso!`);
    // }
    // else {
    //   console.log(`Diretório ${pth} já existe.`);
    // }
  })
}

