<template>
  <div class="row">
    <div class="q-pa-lg col-12">
      <q-input rounded dense outlined placeholder="Post to profile" autogrow v-model="payload.title"/>
    </div>
    <div class="col-12 q-mb-md">
      <div class="flex justify-center">
        <q-file
          dense
          no-caps
          borderless
          size="sm"
          label="Video"
          style="width: 7rem; background-color: white;"
          accept=".mp4, video/*"
          @input="selectVideo"
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
          @input="selectImage"
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
          @input="selectDoc"
        >
          <template v-slot:prepend>
            <q-icon name="description"/>
          </template>
        </q-file>
        <q-btn flat no-caps color="grey-7" class="content" @click="selectPhoto">
          <q-icon name="videocam" class="q-mr-sm"/>
          Take Photos
        </q-btn>
      </div>
    </div>
    <div class="col-sm-8 offset-sm-2 col-md-6 offset-md-3 col-xs-12 q-pa-md" v-if="!isTextType">
      <q-card>
        <q-img
          v-if="payload.type === postingTypes.IMAGE"
          :src="sourceStream"
          basic
        />
        <q-media-player v-if="payload.type === postingTypes.VIDEO" type="video" :source="sourceStream"/>
        <!--<div class="absolute-top text-right">
          <q-btn flat dense @click="deleteSrc">
            <q-icon color="negative" name="delete" size="md"/>
          </q-btn>
        </div>-->
      </q-card>
    </div>
    <div class="col-12 q-pa-md text-right" v-if="showPostButton">
      <q-btn color="primary" label="Post" @click="addPost(payload)" />
    </div>
  </div>
</template>
<script lang="ts">
  import Vue from 'vue';
  import { CameraResultType, CameraSource, Plugins } from '@capacitor/core';
  import { PostingRequestInterface, PostingTypesEnum } from 'src/store/posting/state';
  import { mapActions } from 'vuex';

  const { Camera } = Plugins;
  const reader = new FileReader();

  export default Vue.extend({
    name: 'ProfilePosting',
    data() {
      const payload: PostingRequestInterface = {
        type: PostingTypesEnum.TEXT,
        title: '',
      };
      return {
        payload,
        sourceStream: '',
      };
    },
    computed: {
      postingTypes() { return PostingTypesEnum },
      isTextType(): boolean { return this.payload.type === PostingTypesEnum.TEXT },
      showPostButton(): boolean {
        return !!this.payload.title || !!this.payload.mediaSource;
      },
    },
    methods: {
      ...mapActions('postingModule', ['addPost']),
      async selectPhoto(): Promise<void> {
        const image = await Camera.getPhoto({
          quality: 90,
          allowEditing: true,
          resultType: CameraResultType.Uri,
          source: CameraSource.Camera
        }).catch((e) => ({ webPath: '' }));
        this.sourceStream = image.webPath || '';
      },
      deleteSrc(): void {
        this.sourceStream = '';
        this.payload.mediaSource = undefined;
        this.payload.type = PostingTypesEnum.TEXT;
      },
      selectVideo(file: File): void {
        this.payload.type = PostingTypesEnum.VIDEO;
        this.payload.mediaSource = file;
        this.setSourceStream(file);
      },
      selectImage(file: File): void {
        this.payload.type = PostingTypesEnum.IMAGE;
        this.payload.mediaSource = file;
        this.setSourceStream(file);
      },
      selectDoc(file: File): void {
        console.log(file);
      },
      setSourceStream(file: File): void {
        reader.onload = ({ target: { result } }: any) => this.sourceStream = result;
        reader.readAsDataURL(file);
      }
    }
  });
</script>
