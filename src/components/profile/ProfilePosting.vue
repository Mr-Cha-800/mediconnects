<template>
  <div class="row">
    <div class="q-pa-lg col-12">
      <q-input rounded dense outlined placeholder="Post to profile" autogrow v-model="payload.title"/>
      <div>
        <q-expansion-item
          label="Add Description"
          class="overflow-hidden"
          append
          expand-icon="add"
          expand-icon-toggle
        >
          <q-card>
            <q-card-section>
              <q-input
                v-model="payload.description"
                class="full-width"
                placeholder="Description"
                type="textarea"
              />
            </q-card-section>
            <q-card-section>
              <q-select
                v-model="payload.sectionGroup"
                :options="profile.sectionGroups"
                class="full-width"  a
                placeholder="Section Group"
                option-value="id"
                option-label="name"
                emit-value
                map-options
              />
            </q-card-section>
          </q-card>
        </q-expansion-item>
      </div>
    </div>
    <MediaSelection @streamSelected="streamSelected"/>
    <div class="col-12 q-pa-md text-right" v-if="showPostButton">
      <q-btn color="primary" label="Post" @click="submitPost"/>
    </div>
    <PostingState :loadingDetails="loadingDetails"/>
  </div>
</template>
<script lang="ts">
  import Vue from 'vue';
  import { PostingRequestInterface, PostingTypesEnum, LoadingTypesEnum } from 'src/store/posting/state';
  import { mapActions, mapGetters } from 'vuex';
  import MediaSelection from 'components/posting/MediaSelection.vue';
  import PostingState from 'components/common/PostingState.vue';

  export default Vue.extend({
    name: 'ProfilePosting',
    components: { MediaSelection, PostingState },
    data() {
      const payload: PostingRequestInterface = {
        type: PostingTypesEnum.TEXT,
        title: ''
      };
      return {
        loadingDetails:{
          type: LoadingTypesEnum.POST
        },
        payload
      };
    },
    computed: {
      ...mapGetters('postingModule', ['postingStatus']),
      ...mapGetters('userProfileModule', ['profile']),
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
        const payload = {
          ...this.payload,
          weight: this.profile.sections.length * 1000
        };
        this.addProfilePost(payload);
        this.payload = {
          type: PostingTypesEnum.TEXT,
          title: '',
          description: '',
        };
      }
    }
  });
</script>
