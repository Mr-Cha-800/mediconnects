<template>
  <div class="row">
    <div class="flex fit justify-center">
      <q-file
          dense
          no-caps
          color="grey-8"
          class="full-width"
          size="sm"
          label="Photos"
          accept=".jpg, image/*"
          @input="setImage"
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
          @input="setVideo"
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
