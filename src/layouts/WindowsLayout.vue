<template>
  <q-layout view="lHh Lpr lFf">
    <!-- <q-layout
    view="lHh lpr lFf"
    style="height: 400px"
    container
    class="shadow-2 rounded-borders"
  > -->
    <q-header elevated>
      <q-bar class="q-electron-drag">
        <!-- <q-icon name="printer" /> -->
        <BtnAlwaysOnTop />
        <BtnToggleDevTools />
        <BtnReload />
        <!-- <div class="q-electron-drag--exception">Template Quasar Electron</div> -->
        <div>Template Quasar Electron</div>

        <q-space />

        <BtnMinimize />
        <BtnToggleMaximize />
        <BtnClose />
      </q-bar>

      <div class="q-pa-sm q-pl-md row items-center">
        <div class="cursor-pointer non-selectable">
          File
          <q-menu>
            <q-list dense style="min-width: 100px">
              <q-item clickable v-close-popup>
                <q-item-section>Open...</q-item-section>
              </q-item>
              <q-item clickable v-close-popup>
                <q-item-section>New</q-item-section>
              </q-item>

              <q-separator />

              <q-item clickable>
                <q-item-section>Preferences</q-item-section>
                <q-item-section side>
                  <q-icon name="keyboard_arrow_right" />
                </q-item-section>

                <q-menu anchor="top end" self="top start">
                  <q-list>
                    <q-item v-for="n in 3" :key="n" dense clickable>
                      <q-item-section>Submenu Label</q-item-section>
                      <q-item-section side>
                        <q-icon name="keyboard_arrow_right" />
                      </q-item-section>
                      <q-menu auto-close anchor="top end" self="top start">
                        <q-list>
                          <q-item v-for="n in 3" :key="n" dense clickable>
                            <q-item-section>3rd level Label</q-item-section>
                          </q-item>
                        </q-list>
                      </q-menu>
                    </q-item>
                  </q-list>
                </q-menu>
              </q-item>

              <q-separator />

              <q-item clickable v-close-popup @click="appQuit">
                <q-item-section>Quit</q-item-section>
              </q-item>
            </q-list>
          </q-menu>
        </div>

        <div class="q-ml-md cursor-pointer non-selectable">
          Edit
          <q-menu auto-close>
            <q-list dense style="min-width: 100px">
              <q-item clickable>
                <q-item-section>Cut</q-item-section>
              </q-item>
              <q-item clickable>
                <q-item-section>Copy</q-item-section>
              </q-item>
              <q-item clickable>
                <q-item-section>Paste</q-item-section>
              </q-item>
              <q-separator />

              <q-item clickable>
                <q-item-section>Select All</q-item-section>
              </q-item>
            </q-list>
          </q-menu>
        </div>
        <!-- <div class="q-ml-md non-selectable"> -->
        <q-space />
        <SelectModel />
        <SelectPrinter />

        <!-- </div> -->
      </div>
      <BarNewModel />
    </q-header>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script setup lang="ts">
import { ipcRequest } from 'app/src-electron/ipc/ipcRequest';
import { IPC_MESSAGE } from 'app/src-electron/ipc/ipcTypes';
import { useNotify } from 'ui/notify/useNotify';

import BtnAlwaysOnTop from '../components/electron/btn/BtnAlwaysOnTop.vue';
import BtnClose from '../components/electron/btn/BtnClose.vue';
import BtnMinimize from '../components/electron/btn/BtnMinimize.vue';
import BtnReload from '../components/electron/btn/BtnReload.vue';
import BtnToggleDevTools from '../components/electron/btn/BtnToggleDevTools.vue';
import BtnToggleMaximize from '../components/electron/btn/BtnToggleMaximize.vue';

const notify = useNotify();

// const emit = defineEmits(['showNotif']);
defineOptions({
  name: 'WindowsLayout',
});

function appQuit() {
  ipcRequest({
    target: 'appQuit',
    content: '',
    fn: ({ error }: IPC_MESSAGE) => {
      if (error) notify.show({ message: error, color: 'negative' });
    },
  });
}
</script>
