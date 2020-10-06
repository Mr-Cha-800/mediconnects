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
    <q-item class="q-pa-sm">
      <q-chip
        v-for="where in wheres"
        :outline="!where.active"
        size="1rem"
        :color="where.active ? 'primary' : 'grey-8'"
        :outline-color="where.active ? 'primary' : 'grey-8'"
        clickable
        @click="where.active  = !where.active "
        :text-color="where.active ? 'white' : ''"
      >{{where.name}}
        <q-badge align="bottom" v-if="where.badge > 0 " color="red" floating>{{where.badge}}</q-badge>
      </q-chip>
    </q-item>
    <q-item class="q-pb-xl">
      <q-input
        style="width: 100%"
        placeholder="Share something..."
        outlined
        filled
        rows="10"
        type="textarea"
      />
    </q-item>
    <q-item class="q-pa-sm">
      <q-item-section >
        <q-btn flat align="left"  no-caps color="grey-8" class="full-width" size="md" icon="photo" label="Photos / Videos"></q-btn>
        <q-separator />
        <q-btn flat align="left"  no-caps color="grey-8" class="full-width" size="md" icon="ondemand_video" label="Record Video"></q-btn>
        <q-separator />
        <q-btn flat align="left"  no-caps color="grey-8" class="full-width" size="md" icon="videocam" label="Go Live"></q-btn>
        <q-separator />
        <q-btn flat align="left"  no-caps color="grey-8" class="full-width" size="md" icon="description" label="Documents"></q-btn>
        <q-separator />
        <q-btn flat align="left"  no-caps color="grey-8" class="full-width" size="md" icon="history_edu" label="Article"></q-btn>
        <q-separator />
        <q-btn flat align="left"  no-caps color="grey-8" class="full-width" size="md" icon="palette" label="Backgrounds"></q-btn>
        <q-separator />
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
  import { DEFAULT_IMAGE } from 'src/constants';

  export default Vue.extend({
    name: 'PostingForm',
    props: {
      profile: {
        type: Object,
        default: () => ({ avatar: DEFAULT_IMAGE }),
      },
      submitting: {
        type: Boolean,
        default: () => false,
      }
    },
    data() {
      return {
        isPublicPost: false,
        wheres: [
          {
            name: 'Organization',
            active: true,
            badge: 4
          },
          {
            name: 'Individuals',
            active: false,
            badge: 0
          }
        ]

      }
    },
    computed: {
      vUpdateForm(): VForm {
        return this.$refs.updateForm as VForm
      },
    },
    methods: {
      validateRequired: validateRequired,
      submitProfile() {
        if (this.vUpdateForm.validate()) {
          this.$emit('submit', { profile: this.$props.profile });
        }
      },
      selectedAvatar(file: File) {
        /*const reader = new FileReader();

        reader.onload = ({ target: { result }}: ProgressEvent) => this.avatarImg = result;
        reader.readAsDataURL(file);*/
      }
    },
  });
</script>
