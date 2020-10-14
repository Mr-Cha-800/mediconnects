<template>
  <div class="row">
    <div class="flex fit justify-center">
      <q-file
        dense
        no-caps
        borderless
        size="sm"
        label="Video"
        style="width: 7rem; background-color: white;"
        accept=".mp4, video/*"
        @input="setVideo"
      >
        <template v-slot:prepend>
          <q-icon name="ondemand_video"/>
        </template>
      </q-file>
      <q-file
        dense
        no-caps
        borderless
        color="grey-8"
        size="sm"
        style="width: 7rem"
        label="Photo"
        accept=".jpg, image/*"
        @input="setImage"
      >
        <template v-slot:prepend>
          <q-icon name="photo"/>
        </template>
      </q-file>
      <q-file
        dense
        no-caps
        borderless
        color="grey-8"
        size="sm"
        style="width: 7rem"
        label="Document"
        accept="application/*"
        @input="setDocument"
      >
        <template v-slot:prepend>
          <q-icon name="description"/>
        </template>
      </q-file>
      <q-file
        dense
        no-caps
        borderless
        color="grey-8"
        size="sm"
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
  import { PostingTypesEnum } from 'src/store/posting/state';

  export default Vue.extend({
    name: 'MediaSelectionDesktop',

    methods: {
      setSourceStream(payload: { mediaSource: File, type: PostingTypesEnum }): void {
        this.$emit('onStreamSelected', payload);
      },
      setVideo(mediaSource: File) {
        this.setSourceStream({ mediaSource, type: PostingTypesEnum.VIDEO });
      },
      setImage(mediaSource: File) {
        this.setSourceStream({ mediaSource, type: PostingTypesEnum.IMAGE });
      },
      setDocument(mediaSource: File) {
        this.setSourceStream({ mediaSource, type: PostingTypesEnum.DOCUMENT });
      },
      setAudio(mediaSource: File) {
        this.setSourceStream({ mediaSource, type: PostingTypesEnum.AUDIO });
      }
    }
  });
</script>
