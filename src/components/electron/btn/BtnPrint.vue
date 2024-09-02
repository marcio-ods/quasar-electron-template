<template>
  <!-- <q-btn @click="gerarTXT" round dense flat :icon="'img:icons/keep_off.svg'" /> -->

  <q-spinner-hourglass v-if="spinner" color="light-green" />
  <q-btn
    v-else
    @click="onPrint"
    round
    dense
    flat
    useReload
    icon="img:icons/print.svg"
  />
</template>
<script setup lang="ts">
import { onMounted, ref } from 'vue';

import { YesOrNo } from 'app/src-electron/app/appTypes';
import { ipcRequest } from 'app/src-electron/ipc/ipcRequest';
import { IPC_MESSAGE } from 'app/src-electron/ipc/ipcTypes';
import { useNotify } from 'ui/notify/useNotify';

const notify = useNotify();

const alwaysOnTop = ref<YesOrNo>('no');
const spinner = ref(true);

onMounted(() => {
  setTimeout(() => {
    onIpc();
  }, 500);
});

function onIpc() {
  ipcRequest({
    target: 'isAlwaysOnTop',
    fn: ({ error, content }: IPC_MESSAGE) => {
      if (error) notify.show({ message: error, color: 'negative' });
      else {
        alwaysOnTop.value = content as YesOrNo;
        spinner.value = false;
        console.log('onIpc', content);
      }
    },
  });
}

function onPrint() {
  // spinner.value = true;
  ipcRequest({
    target: 'getPrinters',
    // content: <YesOrNo>(alwaysOnTop.value === 'yes' ? 'no' : 'yes'),
    fn: ({ error, content }: IPC_MESSAGE) => {
      if (error) notify.show({ message: error, color: 'negative' });
      else console.log(content);

      // onIpc();
    },
  });
}
</script>
