<template>
  <div>
    <div class="row flex justify-center q-gutter-lg">
      <q-btn flat no-caps color="grey-7" style="width: 7rem" @click="selectPhoto">
        <q-icon name="ondemand_video" class="q-mr-sm"/>
        Video
      </q-btn>

      <q-file
        dense
        no-caps
        borderless
        color="grey-8"
        size="md"
        style="width: 7rem"
        label="Document"
        accept="application/*"
        @input="setDocument"
      >
        <template v-slot:prepend>
          <q-icon name="description"/>
        </template>
      </q-file>
    </div>
    <div class="row flex justify-center q-gutter-lg">
      <q-btn flat no-caps color="grey-7" style="width: 7rem" @click="selectPhoto">
        <q-icon name="photo" class="q-mr-sm"/>
        Photo
      </q-btn>
      <q-file
        dense
        no-caps
        borderless
        color="grey-8"
        size="md"
        style="width: 7rem"
        label="Audio"
        accept="audio/*"
        @input="setAudio"
      >
        <template v-slot:prepend>
          <q-icon name="volume_up"/>
        </template>
      </q-file>
    </div>
  </div>
</template>
<script lang="ts">
  import Vue from 'vue';
  import { CameraResultType, CameraSource, Plugins } from '@capacitor/core';
  import { PostingTypesEnum } from 'src/store/posting/state';
  import srcToFile from 'src/helpers/srcToFile';

  const { Camera } = Plugins;

  export default Vue.extend({
    name: 'MediaSelectionMobile',

    methods: {
      async selectPhoto(): Promise<void> {
        const { webPath = '', format } = await Camera.getPhoto({
          quality: 90,
          allowEditing: false,
          resultType: CameraResultType.Uri,
          source: CameraSource.Prompt
        }).catch((e) => ({ webPath: '', format: '' }));
        const mediaSource = await srcToFile(webPath, `${new Date().getTime()}`, format);
        this.$emit('onStreamSelected', { mediaSource, type: PostingTypesEnum.IMAGE });
      },
      setSourceStream(payload: { mediaSource: File, type: PostingTypesEnum }): void {
        this.$emit('onStreamSelected', payload);
      },
      setDocument(mediaSource: File) {
        this.setSourceStream({ mediaSource, type: PostingTypesEnum.DOCUMENT })
      },
      setAudio(mediaSource: File) {
        this.setSourceStream({ mediaSource, type: PostingTypesEnum.AUDIO })
      },
    }
  });
</script>
