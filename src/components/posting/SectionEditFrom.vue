<template>
  <State :status="status">
    <q-form class="container q-pa-lg" @submit.prevent="submiteditProfile" ref="updateForm">
      <q-item>
        <q-item-section>
          <q-item-label class="text-h6">Post title</q-item-label>
          <q-input
            class="full-width"
            placeholder="Share something..."
            type="text"
            v-model="payload.title"
          />
        </q-item-section>
      </q-item>
      <q-item>
        <q-item-section>
          <q-item-label class="text-h6">Post description</q-item-label>
          <q-input
            class="full-width"
            placeholder="Share something..."
            type="textarea"
            v-model="payload.description"
          />
        </q-item-section>
      </q-item>
      <MediaSelection :mediaContent="file" :mediaType="payload.type" @streamSelected="streamSelected"/>
      <q-item class="q-pa-sm">
        <q-item-section class="q-pa-md">
          <q-btn type="submit" label="Edit" color="primary">
            <template v-slot:loading>
              <q-spinner-hourglass class="on-left"/>
              Editing...
            </template>
          </q-btn>
        </q-item-section>

      </q-item>


    </q-form>
  </State>
</template>
<script lang="ts">
  import Vue from 'vue';
  import { mapActions, mapGetters } from 'vuex';
  import { PostingRequestInterface, PostingTypesEnum } from 'src/store/posting/state';
  import MediaSelectionUpdate from 'components/posting/MediaSelectionUpdate.vue';
  import State from 'components/common/State.vue';
  import MediaSelection from 'components/posting/MediaSelection.vue';


  export default Vue.extend({
    name: 'PostingForm',
    data() {
      const payload: PostingRequestInterface = {
        id: this.$route.params.Id,
        sectionId: '',
        type: PostingTypesEnum.TEXT,
        title: '',
        description: ''
      };
      return {
        payload,
        file: {}
      };
    },
    components: { State, MediaSelection },
    methods: {
      ...mapActions('postingModule', ['getSection', 'editProfileSection']),
      streamSelected({ mediaSource, type }: { mediaSource?: File, type: PostingTypesEnum }): void {
        this.payload = { ...this.payload, mediaSource, type };
      },
      submiteditProfile() {
        this.editProfileSection(this.payload);
        this.payload = {
          type: PostingTypesEnum.TEXT,
          title: '',
          description: ''
        };
      }
    },
    computed: {
      ...mapGetters('postingModule', ['sectionDetails', 'status']),
      postingTypes: () => PostingTypesEnum
    },
    watch: {
      sectionDetails: {
        handler() {
          if (this.sectionDetails && this.sectionDetails.section) {
            this.payload.sectionId = this.sectionDetails.section.id
            this.payload.title = this.sectionDetails.section.title
            this.payload.description = this.sectionDetails.section.description
            this.payload.type = this.sectionDetails.section.type
            if(this.sectionDetails.section.content) {
              this.file = this.sectionDetails.section.content
            }
          }
        }
      }
    },
    created() {
      this.getSection(this.$route.params.Id);
    }
  });
</script>
