<template>
  <q-btn
    @click="saveModel"
    dense
    flat
    label="Salvar"
    title="Salvar Modelo"
    icon="img:icons/save.svg"
  />
</template>
<script setup lang="ts">
// import { YesOrNo } from 'app/src-electron/app/appTypes';

const saveModel = async () => {
  console.log('saveModel');
  // const setupID = makeId('SETUP');
  // const on = await window.ipc.request2<YesOrNo>({
  //   // id: setupID,
  //   target: 'testPdf',
  // });

  // console.log('onIpc', on.content);
};
</script>
