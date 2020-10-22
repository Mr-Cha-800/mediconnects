<template>
  <q-form @submit.prevent="submitProfile" ref="updateForm">
    <q-bar class="bg-grey-2">
      <q-space />
      <q-toggle
        :false-value="false"
        :label="`Public ${isPublicPost ? 'ON' : 'OFF'}`"
        :true-value="true"
        left-label
        icon="local_cafe"
        color="blue-grey-8"
        v-model="isPublicPost"
        style="color:#009688"
      />
    </q-bar>
    <!-- END -->
    <q-item v-if="!isPublicPost">
      <q-chip
        :outline="!organization.orgs.length"
        size="1rem"
        :color="organization.orgs.length ? 'primary' : 'grey-8'"
        :outline-color="!organization.orgs.length ? 'primary' : 'grey-8'"
        clickable
        @click="() => {organization.showList = true; individual.showList = false}"
        :text-color="!organization.orgs.length ? 'white' : ''"
      >{{organization.name}}
        <q-badge align="bottom" v-if="organization.orgs.length " color="red" floating>{{organization.orgs.length}}</q-badge>
      </q-chip>
      <q-chip
        :outline="!individual.users.length"
        size="1rem"
        :color="individual.users.length ? 'primary' : 'grey-8'"
        :outline-color="!individual.users.length ? 'primary' : 'grey-8'"
        clickable
        @click="() => {individual.showList = true; organization.showList = false}"
        :text-color="!individual.users.length ? 'white' : ''"
      >{{individual.name}}
        <q-badge align="bottom" v-if="individual.users.length " color="red" floating>{{individual.users.length}}</q-badge>
      </q-chip>
    </q-item>
    <q-item>
      <AddUserIdtoPost @clicked="onClickUsers" v-if="individual.showList" />
      <AddOrgIdtoPost @clicked="onClickOrgs" v-if="organization.showList" />
    </q-item>
    <q-item>
      <q-item-section>
        <q-input
          class="full-width"
          placeholder="Share something..."
          borderless
          rows="10"
          type="textarea"
        />
      </q-item-section>
    </q-item>
    <q-item v-if="videoStream" class="q-pa-sm">
      <video :src="videoStream" controls width="100%" preload="metadata" />
    </q-item>
    <q-item v-if="imageStream" class="q-pa-sm">
      <q-img :src="imageStream" ratio="1" />
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
  import AddUserIdtoPost from 'components/posting/AddUserIdtoPost.vue';
  import AddOrgIdtoPost from 'components/posting/AddOrgIdtoPost.vue';

  export default Vue.extend({
    name: 'PostingForm',
    components: { AddUserIdtoPost, AddOrgIdtoPost },
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
        postType: 'users',
        imageStream: null,
        videoStream: null,
        isPublicPost: true,
        organization: {
          name: 'Organization',
          orgs: [],
          badge: 0,
          showList: false,
        },
        individual: {
          name: 'Individuals',
          users: [],
          badge: 0,
          showList: false,
        }
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
      },
      onClickUsers (value) {
       this.individual.users = value;
       this.individual.showList = false;
      },
      onClickOrgs (value) {
       this.organization.orgs = value;
       this.organization.showList = false;
      }
    },
  });
</script>
