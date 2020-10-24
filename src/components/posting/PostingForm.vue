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
          v-model="payload.description"
          type="textarea"
        />
      </q-item-section>
    </q-item>
    <PostMediaSelection @streamSelected="streamSelected"/>

    <q-item class="q-pa-sm">
      <q-item-section class="q-pa-md">
        <q-btn type="submit" label="Post" @click="submitPost" color="primary" >
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
  import { validateRequired } from 'src/formValidators';
  import { PostingRequestInterface, PostingTypesEnum } from 'src/store/posting/state';
  import AddUserIdtoPost from 'components/posting/AddUserIdtoPost.vue';
  import AddOrgIdtoPost from 'components/posting/AddOrgIdtoPost.vue';
  import PostMediaSelection from 'components/posting/PostMediaSelection.vue';

  export default Vue.extend({
    name: 'PostingForm',
    components: { AddUserIdtoPost, AddOrgIdtoPost, PostMediaSelection },
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
        const payload: PostingRequestInterface = {
        type: PostingTypesEnum.TEXT,
        description: '',
      };
      return {
        postType: 'users',
        imageStream: null,
        videoStream: null,
        isPublicPost: true,
        payload,
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
      ...mapActions('postingModule', ['addPost']),
      validateRequired: validateRequired,
      submitProfile(): void {
        if (this.vUpdateForm.validate()) {
          this.$emit('submit', { profile: this.$props.profile });
        }
      },
      streamSelected({ mediaSource, type }: { mediaSource?: File, type: PostingTypesEnum }): void {
        this.payload = { ...this.payload, mediaSource, type };
      },
      onClickUsers (value:any) {
       this.individual.users = value;
       this.individual.showList = false;
      },
      onClickOrgs (value:any) {
       this.organization.orgs = value;
       this.organization.showList = false;
      },
      submitPost() {
        this.addPost(this.payload).then(() => {
          this.$q.notify({
            progress: true,
            color: 'green-4',
            textColor: 'white',
            icon: 'done',
            message: 'Congratulations ! Posted successfully'
          })
        })
        this.payload = {
          type: PostingTypesEnum.TEXT,
          title: '',
          description: '',
        };
      }
    },
  });
</script>
