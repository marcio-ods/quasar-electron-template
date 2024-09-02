<template>
  <q-bar class="bg-grey-8 text-white q-gutter-x-md">
    <!-- shadow-2 -->
    <q-space />

    <BtnNewText />
    <BtnNewText />
    <BtnNewText />
    <BtnNewText />
    <q-space />
    <BtnDeleteModel />
    <BtnSaveModel />
  </q-bar>
</template>
<script setup lang="ts">
import BtnDeleteModel from 'components/electron/btn/BtnDeleteModel.vue';
import BtnNewText from 'components/electron/btn/BtnNewText.vue';
import BtnSaveModel from 'components/electron/btn/BtnSaveModel.vue';
</script>
