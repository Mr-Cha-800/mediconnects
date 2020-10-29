<template>
  <q-form @submit.prevent="submitProfile" ref="updateForm">
    <q-item-section class="q-pa-lg q-gutter-md">
      <div class="text-center">
        <q-avatar size="10rem">
          <q-img ref="avatarImg" :src="avatarImg || propAvatar" height="100%" />
        </q-avatar>
      </div>

      <q-file v-model="avatar" color="teal"
              accept=".jpg, .pdf, image/*"
              filled
              label="Upload Image"
              @input="selectedAvatar"
      >
        <template v-slot:prepend>
          <q-icon name="cloud_upload"/>
        </template>
      </q-file>

      <q-separator/>

      <q-input v-model="$props.profile.name" label="Name" :rules="[validateRequired]" lazy-rules/>
      <q-input type="textarea" v-model="$props.profile.description" label="Description" :rules="[validateRequired]" lazy-rules/>

    </q-item-section>
    <q-item-section class="q-pa-md">
      <q-btn type="submit" :loading="$props.submitting" :disabled="$props.submitting" label="Save" color="primary">
        <template v-slot:loading>
          <q-spinner class="on-left"/>
          Saving...
        </template>
      </q-btn>
    </q-item-section>
    <PostingState :loadingDetails="loadingDetails"/>
  </q-form>
</template>
<script lang="ts">
  import Vue from 'vue';
  import { VForm } from 'src/types';
  import { validateRequired } from 'src/formValidators';
  import { avatarMediaObject } from 'src/helpers/parseMediaOject';
  import PostingState from 'components/common/PostingState.vue';
  import { mapGetters } from 'vuex';
 import { LoadingTypesEnum } from 'src/store/posting/state';

  export default Vue.extend({
    name: 'OrgProfileForm',
    components: { PostingState },
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
        loadingDetails:{
          type: LoadingTypesEnum.ORG
        },
        avatar: null,
        avatarImg: null,
      }
    },
    computed: {
      ...mapGetters('postingModule', ['postingStatus']),
      vUpdateForm(): VForm {
        return this.$refs.updateForm as VForm
      },
      propAvatar(): string {
        return avatarMediaObject(this.$props.profile.avatar);
      },
    },
    methods: {
      validateRequired: validateRequired,
      submitProfile(): void {
        if (this.vUpdateForm.validate()) {
          this.$emit('submit', { profile: this.$props.profile, avatar: this.avatar });
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
