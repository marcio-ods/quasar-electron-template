<template>
  <!-- <q-btn @click="gerarTXT" round dense flat :icon="'img:icons/keep_off.svg'" /> -->

  <q-spinner-hourglass v-if="spinner" color="light-green" />
  <q-btn v-else @click="setKeep" round dense flat useReload :icon="alwaysOnTop === 'yes' ?
    `img:${keep}` :
    `img:${keep_off}`" />
</template>
<script setup lang="ts">
import {
  onMounted,
  ref,
} from 'vue';

import { YesOrNo } from '#/app/appTypes';
import keep from '#/assets/svg/keep.svg';
import keep_off from '#/assets/svg/keep_off.svg';
import { ipcRequest } from '#/ipc/ipcRequest';
import { IPC_MESSAGE } from '#/ipc/ipcTypes';
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

async function setKeep() {
  spinner.value = true;
  ipcRequest({
    target: 'setAlwaysOnTop',
    content: <YesOrNo>(alwaysOnTop.value === 'yes' ? 'no' : 'yes'),
    fn: ({ error }: IPC_MESSAGE) => {
      if (error) notify.show({ message: error, color: 'negative' });
      else onIpc();
    },
  });
}
</script>
