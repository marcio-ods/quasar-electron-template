import { makeFolder } from '../helpers/makeFolder';
import { resourcesPath } from '../helpers/resourcesPath';

export const bootstrapFolders = () => {
  const ativos = resourcesPath('data', 'jobs_ativos')
  const old = resourcesPath('data', 'jobs_movidos')
  const modelos = resourcesPath('data', 'modelos')
  console.log('old', old);


  makeFolder(ativos, old, modelos)
  // resources

}
