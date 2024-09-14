<template>
  <!-- <q-btn dense flat icon="close" /> -->
  <q-btn dense flat :icon="'img:' + close_svg" @click="fnClose" />
</template>
<script setup lang="ts">
import close_svg from '#/assets/svg/close.svg';
import {
  ipcRequest,
  ipcStateRequestClean,
} from 'app/src-electron/ipc/ipcRequest';
import { IPC_MESSAGE } from 'app/src-electron/ipc/ipcTypes';
import { useNotify } from 'ui/notify/useNotify';

const notify = useNotify();

const fnClose = async () => {
  ipcStateRequestClean();
  ipcRequest({
    target: 'close',
    fn: ({ error }: IPC_MESSAGE) => {
      if (error) notify.show({ message: error, color: 'negative' });
    },
  });
};
</script>
