<template>
  <q-form @submit.prevent="submitProfile" ref="updateForm">
    <q-item-section class="q-pa-lg q-gutter-md">
      <div class="text-center">
        <q-avatar size="10rem">
          <q-img ref="avatarImg" :src="avatarImg || getAvatar" height="100%" />
        </q-avatar>
      </div>

      <q-file v-model="avatar" color="teal"
              accept=".jpg, image/*"
              filled
              label="Upload Image"
              @input="selectedAvatar"
      >
        <template v-slot:prepend>
          <q-icon name="cloud_upload"/>
        </template>
      </q-file>

      <q-separator/>

      <q-input v-model="$props.profile.firstName" label="First Name" :rules="[validateRequired]" lazy-rules/>
      <q-input v-model="$props.profile.lastName" label="Last Name" :rules="[validateRequired]" lazy-rules/>
      <q-input v-model="$props.profile.title" label="Title" :rules="[validateRequired]" lazy-rules/>
      <q-input type="textarea" v-model="$props.profile.description" label="Description" :rules="[validateRequired]" lazy-rules/>

    </q-item-section>
    <q-item-section class="q-pa-md">
      <q-btn type="submit" :loading="status.updating" :disabled="status.updating || status.loading" label="Save" color="primary">
        <template v-slot:loading>
          <q-spinner class="on-left"/>
          Saving...
        </template>
      </q-btn>
    </q-item-section>
  </q-form>
</template>
<script lang="ts">
  import Vue from 'vue';
  import { mapActions, mapGetters } from 'vuex';
  import { VForm } from 'src/types';
  import { validateRequired } from 'src/formValidators';
  import PostingState from 'components/common/PostingState.vue';
  import { LoadingTypesEnum } from 'src/store/posting/state';

  export default Vue.extend({
    name: 'UserProfileForm',
    components: { PostingState },
    props: {
      profile: {
        type: Object,
        default: (): Record<string, unknown> => ({}),
      }
    },
    data() {
      return {
        loadingDetails:{
          type: LoadingTypesEnum.PROFILE
        },
        avatar: null,
        avatarImg: null,
      }
    },
    computed: {
      ...mapGetters('postingModule', ['postingStatus']),
      ...mapGetters('userProfileModule', ['status', 'getAvatar']),
      vUpdateForm(): VForm {
        return this.$refs.updateForm as VForm
      },
    },
    methods: {
      ...mapActions('userProfileModule', ['updateProfile']),
      validateRequired: validateRequired,
      submitProfile(): void {
        if (this.vUpdateForm.validate()) {
          this.updateProfile({ profile: this.$props.profile, avatar: this.avatar });
        }
      },
      selectedAvatar(file: File): void {
        const reader = new FileReader();

        reader.onload = ({ target: { result }}: any) => this.avatarImg = result;
        reader.readAsDataURL(file);
      }
    },
  });
</script>
