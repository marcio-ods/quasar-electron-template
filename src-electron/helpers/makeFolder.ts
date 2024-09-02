import {
  existsSync,
  mkdirSync,
} from 'fs';
import { resolve } from 'path';

export const makeFolder = (...paths: string[]) => {
  // resources
  console.log(paths);
  paths.forEach(pth => {
    pth = resolve(pth)
    console.log(pth);

    if (!existsSync(pth)) {
      mkdirSync(pth, { recursive: true });
      console.log(`Diretório ${pth} criado com sucesso!`);
    } else {
      console.log(`Diretório ${pth} já existe.`);
    }
  })
}

