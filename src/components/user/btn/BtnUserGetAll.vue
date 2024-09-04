<template>
  <!-- <q-btn dense flat icon="close" /> -->
  <q-btn dense flat icon="close" @click="fnUserGetAll" />
</template>
<script setup lang="ts">
import {
  ipcRequest,
  ipcStateRequestClean,
} from 'app/src-electron/ipc/ipcRequest';
import { IPC_MESSAGE } from 'app/src-electron/ipc/ipcTypes';
import { useNotify } from 'ui/notify/useNotify';

defineOptions({
  name: 'BtnUserGetAll',
});

const notify = useNotify();

const fnUserGetAll = async () => {
  ipcStateRequestClean();
  ipcRequest({
    target: 'userGetAll',
    fn: ({ error }: IPC_MESSAGE) => {
      if (error) notify.show({ message: error, color: 'negative' });
    },
  });
};
</script>
