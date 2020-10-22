<template>
  <div>
      <q-file
          dense
          no-caps
          color="grey-8"
          class="full-width"
          size="sm"
          label="Photos"
          accept=".jpg, image/*"
          @input="selectPhoto"
        >
          <template v-slot:prepend>
            <q-icon name="photo" />
          </template>
        </q-file>
        <q-file
          dense
          no-caps
          color="grey-8"
          class="full-width"
          size="sm"
          label="Videos"
          accept=".mp4, video/*"
          @input="selectPhoto"
        >
          <template v-slot:prepend>
            <q-icon name="ondemand_video" />
          </template>
        </q-file>
        <q-file dense no-caps color="grey-8" class="full-width" size="sm" label="Record Video" disable>
          <template v-slot:prepend>
            <q-icon name="ondemand_video" />
          </template>
        </q-file>
        <q-file dense no-caps color="grey-8" class="full-width" size="sm" label="Go Live" disable>
          <template v-slot:prepend>
            <q-icon name="videocam" />
          </template>
        </q-file>
        <q-file dense no-caps color="grey-8" class="full-width" size="sm" label="Documents" disable>
          <template v-slot:prepend>
            <q-icon name="description" />
          </template>
        </q-file>
        <q-file dense no-caps color="grey-8" class="full-width" size="sm" label="Article" disable>
          <template v-slot:prepend>
            <q-icon name="history_edu" />
          </template>
        </q-file>
        <q-file dense no-caps color="grey-8" class="full-width" size="sm" label="Backgrounds" disable>
          <template v-slot:prepend>
            <q-icon name="palette" />
          </template>
        </q-file>
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
