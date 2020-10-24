<template>
  <div class="col-12 q-mb-md">
    <div class="row">
      <div class="col-sm-8 offset-sm-2 col-md-6 offset-md-3 col-xs-12 q-pa-md">
        <q-card flat square v-if="type !== postingTypes.TEXT">
          <div class="text-right">
            <q-btn flat dense @click="deleteSrc">
              <q-icon color="negative" name="delete" size="md"/>
            </q-btn>
          </div>
          <q-img
            v-if="type === postingTypes.IMAGE"
            :src="dataUrl"
            basic
          />
          <q-media-player v-if="type === postingTypes.VIDEO" type="video" :source="dataUrl"/>
          <q-media-player v-if="type === postingTypes.AUDIO" type="audio" :source="dataUrl"/>
        </q-card>
      </div>
    </div>
    <q-item class="q-pa-sm">
      <q-item-section>
          <PostMediaSelectionMobile v-if="$q.platform.is.mobile" @onStreamSelected="streamSelected"/>
          <PostMediaSelectionDesktop v-else @onStreamSelected="streamSelected"/>
      </q-item-section>
    </q-item>

  </div>
</template>
<script lang="ts">
  import Vue from 'vue';
  import PostMediaSelectionDesktop from 'components/posting/PostMediaSelectionDesktop.vue';
  import PostMediaSelectionMobile from 'components/posting/PostMediaSelectionMobile.vue';
  import { CameraPhoto } from '@capacitor/core';
  import { PostingTypesEnum } from 'src/store/posting/state';
  import { postImageMediaObject } from 'src/helpers/parseMediaOject';

  const reader = new FileReader();
  export default Vue.extend({
    name: 'MediaSelection',
    components: { PostMediaSelectionDesktop, PostMediaSelectionMobile },
    data() {
      const sourceStream: File | CameraPhoto | unknown = {};
      let type: PostingTypesEnum ;
      return {
        sourceStream,
        content: {},
        dataUrl: '',
        type : PostingTypesEnum.TEXT
      };
    },
    props: {
      mediaType: {
        type: String
      },
      mediaContent: {
        type: Object
      },

    },
    computed: {
      postingTypes: () => PostingTypesEnum,
    },
    methods: {
      streamSelected({ mediaSource, type }: { mediaSource: File, type: PostingTypesEnum }): void {
        reader.onload = ({ target: { result } }: any) => this.dataUrl = result;
        reader.readAsDataURL(mediaSource);
        this.sourceStream = mediaSource || {};
        this.type = type;
        this.$emit('streamSelected', { mediaSource, type });
      },
      deleteSrc(): void {
        this.sourceStream = '';
        this.dataUrl = '';
        this.type = PostingTypesEnum.TEXT;
        this.$emit('streamSelected', { type: this.type });
      },
    },
    mounted() {
      this.type = this.$props.mediaType || PostingTypesEnum.TEXT;
      this.content = this.$props.mediaContent;
      this.dataUrl = postImageMediaObject(this.$props.mediaContent);
    }
  });
</script>
