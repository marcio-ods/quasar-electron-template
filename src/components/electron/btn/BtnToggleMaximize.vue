<template>
  <q-btn dense flat :icon="'img:' + crop_square_svg" @click="fnToggleMaximize" />
</template>

<script setup lang="ts">
import crop_square_svg from '#/assets/svg/crop_square.svg';
import { ipcRequest } from 'app/src-electron/ipc/ipcRequest';
import { IPC_MESSAGE } from 'app/src-electron/ipc/ipcTypes';
import { useNotify } from 'ui/notify/useNotify';

const notify = useNotify();

const fnToggleMaximize = async () => {
  ipcRequest({
    target: 'toggleMaximize',
    fn: ({ error }: IPC_MESSAGE) => {
      if (error) notify.show({ message: error, color: 'negative' });
    },
  });
};
</script>
