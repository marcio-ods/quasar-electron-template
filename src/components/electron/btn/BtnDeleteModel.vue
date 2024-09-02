<template>
  <q-btn
    @click="deleteModel"
    dense
    flat
    label="Excluir"
    title="Excluir Modelo"
    icon="img:icons/delete.svg"
  />
</template>
<script setup lang="ts">
// import { YesOrNo } from 'app/src-electron/app/appTypes';

const deleteModel = async () => {
  console.log('deleteModel');
  // const setupID = makeId('SETUP');
  // const on = await window.ipc.request2<YesOrNo>({
  //   // id: setupID,
  //   target: 'testPdf',
  // });

  // console.log('onIpc', on.content);
};
</script>
