<template>
  <q-form class="container q-pa-lg" @submit.prevent="submitProfile" ref="updateForm">
    <q-item>
      <q-item-section>
        <q-item-label class="text-h6" >Post title</q-item-label>
        <q-input
          class="full-width"
          placeholder="Share something..."
          type="text"
        />
      </q-item-section>
    </q-item>
    <q-item>
      <q-item-section>
        <q-item-label class="text-h6" >Post description</q-item-label>
        <q-input
          class="full-width q-pt-md"
          placeholder="Share something..."
          filled
          borderless
          rows="10"
          type="textarea"
        />
      </q-item-section>
    </q-item>
    <q-item v-if="videoStream" class="q-pa-sm">
      <video :src="videoStream" controls width="50%" preload="metadata" />
    </q-item>
    <q-item v-if="imageStream" class="q-pa-sm">
      <q-img :src="imageStream" width="50%" ratio="1" />
    </q-item>
    <q-item class="q-pa-sm">
      <q-item-section>
        <q-file
          dense
          no-caps
          color="grey-8"
          class="full-width"
          size="sm"
          label="Photos"
          accept=".jpg, image/*"
          @input="selectedImage"
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
          @input="selectedVideo"
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
      </q-item-section>
    </q-item>

    <q-item class="q-pa-sm">
      <q-item-section class="q-pa-md">
        <q-btn type="submit" label="Post" color="primary" >
          <template v-slot:loading>
            <q-spinner-hourglass class="on-left" />
            Posting...
          </template>
        </q-btn>
      </q-item-section>

    </q-item>


  </q-form>
</template>
<script lang="ts">
  import Vue from 'vue';
  import { VForm } from 'src/types';
  import { validateRequired } from 'src/formValidators';

  export default Vue.extend({
    name: 'PostingForm',
    props: {
      profile: {
        type: Object,
        default: (): Record<string, unknown> => ({}),
      },
      submitting: {
        type: Boolean,
        default: (): boolean => false,
      }
    },
    data() {
      return {
        imageStream: null,
        videoStream: null,
        isPublicPost: false,
        wheres: [
          {
            name: 'Organization',
            active: true,
            badge: 4
          },
          {
            name: 'Individuals',
            active: false,
            badge: 0
          }
        ]

      }
    },
    computed: {
      vUpdateForm(): VForm {
        return this.$refs.updateForm as VForm
      },
    },
    methods: {
      validateRequired: validateRequired,
      submitProfile(): void {
        if (this.vUpdateForm.validate()) {
          this.$emit('submit', { profile: this.$props.profile });
        }
      },
      selectedImage(file: File): void {
        const reader = new FileReader();
        this.videoStream = null;
        reader.onload = ({ target: { result }}: any) => this.imageStream = result;
        reader.readAsDataURL(file);
      },
      selectedVideo(file: File): void {
        const reader = new FileReader();
        this.imageStream = null;
        reader.onload = ({ target: { result }}: any) => this.videoStream = result;
        reader.readAsDataURL(file);
      }
    },
  });
</script>
