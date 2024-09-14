<template>
  <q-btn @click="reload" round dense flat title="Reload" :icon="'img:' + reopen_window_svg" />
</template>

<script setup lang="ts">
import reopen_window_svg from '#/assets/svg/reopen_window.svg';
import {
  ipcRequest,
  ipcStateRequestClean,
} from 'app/src-electron/ipc/ipcRequest';
import { IPC_MESSAGE } from 'app/src-electron/ipc/ipcTypes';
import { useNotify } from 'ui/notify/useNotify';

const notify = useNotify();

const reload = async () => {
  ipcStateRequestClean();
  ipcRequest({
    target: 'reload',
    fn: ({ error }: IPC_MESSAGE) => {
      if (error) notify.show({ message: error, color: 'negative' });
    },
  });
};
</script>
