import { Notify } from 'quasar';

export function useNotify() {
  function show({ message, color }: { message: string, color: 'negative' | 'positive' | 'warning' }) {
    Notify.create({
      message,
      position: 'top-right',
      timeout: 2500,
      // textColor: 'white',
      color,
      actions: [{ icon: 'close', color: 'white' }],
    })
  }
  return { show }
}

