<template>
  <q-btn dense flat :icon="'img:' + minimize_svg" @click="fnMinimize" />
</template>
<script setup lang="ts">
import minimize_svg from '#/assets/svg/minimize.svg';
import { ipcRequest } from 'app/src-electron/ipc/ipcRequest';
import { IPC_MESSAGE } from 'app/src-electron/ipc/ipcTypes';
import { useNotify } from 'ui/notify/useNotify';

const notify = useNotify();

const fnMinimize = async () => {
  ipcRequest({
    target: 'minimize',
    fn: ({ error }: IPC_MESSAGE) => {
      if (error) notify.show({ message: error, color: 'negative' });
    },
  });
};
</script>
