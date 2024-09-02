import { Result } from '../app/appTypes';

export const jsonParse = <t = unknown>(data: string): Result<t> => {


  if (typeof data !== 'string')
    return { ok: <t>null, err: 'não é string' }

  try {
    return { ok: <t>JSON.parse(data) }

  } catch (error) {
    const { message } = error as Error
    console.error('Error parsing JSON:', error);
    return { ok: <t>null, err: message }
  }
}

