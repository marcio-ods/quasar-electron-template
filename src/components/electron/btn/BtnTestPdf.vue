<template>
  <q-btn
    @click="testPdf"
    round
    dense
    flat
    text-color="dark"
    title="Testar pdf"
    icon="img:icons/picture_as_pdf_dark.svg"
  />
</template>

<script setup lang="ts">
import { ipcRequest } from 'app/src-electron/ipc/ipcRequest';
import { IPC_MESSAGE } from 'app/src-electron/ipc/ipcTypes';
import { useNotify } from 'ui/notify/useNotify';

const notify = useNotify();

const testPdf = async () => {
  ipcRequest({
    target: 'testPdf',
    fn: ({ error, content }: IPC_MESSAGE) => {
      if (error) notify.show({ message: error, color: 'negative' });
      console.log('testPdf', content);
    },
  });
};
</script>
