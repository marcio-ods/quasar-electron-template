<template>
  <!-- <q-btn dense flat icon="close" /> -->
  <q-btn
    dense
    flat
    icon="img:icons/code.svg"
    @click="fnToggleDevTools"
    title="Depurador"
  />
</template>
<script setup lang="ts">
import { ipcRequest } from 'app/src-electron/ipc/ipcRequest';
import { IPC_MESSAGE } from 'app/src-electron/ipc/ipcTypes';
import { useNotify } from 'ui/notify/useNotify';

const notify = useNotify();

const fnToggleDevTools = async () => {
  ipcRequest({
    target: 'toggleDevTools',
    fn: ({ error }: IPC_MESSAGE) => {
      if (error) notify.show({ message: error, color: 'negative' });
    },
  });
};
</script>
