<template>
  <div class="row">
    <div class="q-pa-lg col-12">
      <q-input rounded dense outlined placeholder="Post to profile" autogrow v-model="payload.title"/>
    </div>
    <MediaSelection @streamSelected="streamSelected"/>
    <div class="col-12 q-pa-md text-right" v-if="showPostButton">
      <q-btn color="primary" label="Post" @click="submitPost"/>
    </div>
  </div>
</template>
<script lang="ts">
  import Vue from 'vue';
  import { PostingRequestInterface, PostingTypesEnum } from 'src/store/posting/state';
  import { mapActions } from 'vuex';
  import MediaSelection from 'components/posting/MediaSelection.vue';

  export default Vue.extend({
    name: 'ProfilePosting',
    components: { MediaSelection },
    data() {
      const payload: PostingRequestInterface = {
        type: PostingTypesEnum.TEXT,
        title: ''
      };
      return {
        payload
      };
    },
    computed: {
      showPostButton(): boolean {
        return !!this.payload.title || !!this.payload.mediaSource;
      }
    },
    methods: {
      ...mapActions('postingModule', ['addProfilePost']),
      streamSelected({ mediaSource, type }: { mediaSource?: File, type: PostingTypesEnum }): void {
        this.payload = { ...this.payload, mediaSource, type };
      },
      submitPost() {
        this.addProfilePost(this.payload);
        this.payload = {
          type: PostingTypesEnum.TEXT,
          title: ''
        };
      }
    }
  });
</script>
