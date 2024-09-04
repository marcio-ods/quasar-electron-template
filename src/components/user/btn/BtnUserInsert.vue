<template>
  <!-- <q-btn dense flat icon="close" /> -->
  <q-btn
    dense
    flat
    icon="person_add"
    @click="fnUserInsert"
    title="novo usuário"
  />
</template>
<script setup lang="ts">
import { ipcRequest } from 'app/src-electron/ipc/ipcRequest';
import { IPC_MESSAGE } from 'app/src-electron/ipc/ipcTypes';
import { useNotify } from 'ui/notify/useNotify';

defineOptions({
  name: 'BtnUserInsert',
});

const notify = useNotify();

const fnUserInsert = async () => {
  ipcRequest({
    target: 'userInsert',
    fn: ({ error }: IPC_MESSAGE) => {
      if (error) notify.show({ message: error, color: 'negative' });
    },
  });
};
</script>
