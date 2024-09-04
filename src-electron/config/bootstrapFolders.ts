import { makeFolder } from '../helpers/makeFolder';
import { resourcesPath } from '../helpers/resourcesPath';
import {
  DATA_FOLDER,
  DB_FOLDER,
} from './setup';

export const bootstrapFolders = () => {
  makeFolder(
    resourcesPath(DATA_FOLDER, DB_FOLDER)
  )
}
