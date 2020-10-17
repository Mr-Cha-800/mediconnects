<template>{{this.$route.params.sectionId}}
  <q-form class="container q-pa-lg" @submit.prevent="submiteditProfile" ref="updateForm">
    <q-item>
      <q-item-section>
        <q-item-label class="text-h6" >Post title</q-item-label>
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
        <q-item-label class="text-h6" >Post description</q-item-label>
        <q-input
          class="full-width"
          placeholder="Share something..."
          type="text"
          v-model="payload.description"
        />
      </q-item-section>
    </q-item>
    <MediaSelection @streamSelected="streamSelected"/>
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
  import { mapActions } from 'vuex';
  import { PostingRequestInterface, PostingTypesEnum } from 'src/store/posting/state';
  import { validateRequired } from 'src/formValidators';
  import MediaSelection from 'components/posting/MediaSelection.vue';

  export default Vue.extend({
    name: 'PostingForm',
    data() {
      const payload: PostingRequestInterface = {
       // id: this.$route.params.sectionId,
        type: PostingTypesEnum.TEXT,
        title: '',
        description: ''
      };
      return {
        payload
      };
    },
    components: { MediaSelection },
    methods: {
      ...mapActions('postingModule', ['editProfileSection']),
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
    }
  });
</script>
