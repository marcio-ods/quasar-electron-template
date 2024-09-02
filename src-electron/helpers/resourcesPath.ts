import { app } from 'electron';
import { join } from 'path';

let RESOURCES: string | undefined = undefined

const mountPath = (...str: string[]) => {
  str = str.map(m => m.trim()).filter(f => f)
  return join(...str)
}

const _resourcesPath = () => {
  if (RESOURCES) return RESOURCES

  const appPath = app.getAppPath()
  const qIdx = appPath.indexOf('.quasar')

  if (qIdx > -1) {
    RESOURCES = mountPath(appPath.slice(0, qIdx), 'resources')
    return RESOURCES
  }

  const resourcesIdx = appPath.indexOf('resources')

  if (resourcesIdx > -1)
    RESOURCES = mountPath(appPath.slice(0, resourcesIdx), 'resources')
  else
    RESOURCES = mountPath(appPath, 'resources')

  return RESOURCES
}

export const resourcesPath = (...str: string[]) => {
  const resources = _resourcesPath()
  if (str.length === 0) return resources
  return mountPath(resources, ...str)
}
