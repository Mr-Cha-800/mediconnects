<template>
  <div>
    <q-card flat>
      <q-form
        @submit.prevent="editprofile">

        <q-item class="q-pa-lg">
          <q-item-section avatar>
            <q-avatar size="10rem">
              <img src="https://cdn.quasar.dev/img/avatar2.jpg">
            </q-avatar>
          </q-item-section>
          <q-item-section class="q-gutter-md">
            <span class="text-h5">Upload new avatar</span>
            <q-file
              v-model="profileinfo.files"
              label="Choose file"
              outlined
              use-chips
              style="max-width: 500px"
            >
              <template v-slot:prepend>
                <q-icon size="xs" name="attach_file"/>
              </template>
              <template v-slot:after>
                <q-item-label v-if="!profileinfo.files" caption>No file chosen</q-item-label>
              </template>
            </q-file>
            <q-separator/>
          </q-item-section>
        </q-item>
        <q-item-section class="q-pa-lg q-gutter-md">
          <q-separator/>
          <span class="text-h5">Full Name</span>
          <q-item-section>
            <q-input
              style="max-width: 500px"
              outlined
              v-model="profileinfo.Fullname"
              placeholder="What's your full name"
              dense/>
          </q-item-section>
          <span class="text-h5">Title</span>
          <q-item-section>
            <q-input
              style="max-width: 500px"
              outlined
              v-model="profileinfo.Title"
              placeholder="What's your status"
              dense/>
          </q-item-section>
          <span class="text-h5">Description</span>
          <q-item-section>
            <q-input
              style="max-width: 500px"
              placeholder="Tell us about you"
              v-model="profileinfo.Description"
              outlined
              type="textarea"
            />
          </q-item-section>
        </q-item-section>
        <q-item-section class="q-pa-md">
          <q-btn push type="submit" icon-right="send" style="max-width: 500px" :loading="loading" :disabled="loading"
                 label="Edit" color="primary">
            <template v-slot:loading>
              <q-spinner-hourglass class="on-left"/>
              Editing...
            </template>
          </q-btn>
        </q-item-section>
      </q-form>

    </q-card>
  </div>
</template>

<script lang="ts">
  import Vue from 'vue';

  export default Vue.extend({
    name: 'organizationProfileEdit',
    components: {},
    data() {
      return {
        loading: false,
        profileinfo: {
          files: null,
          Fullname: null,
          Title: null,
          Description: null,
        }

      }
    },
    methods: {
      editprofile() {
        this.loading = true
        this.profileinfo = {}
        this.$q.notify({
          color: 'primary',
          textColor: 'white',
          icon: 'done',
          message: 'Your profile is modified'
        })
      }
    }

  });
</script>

<style>

</style>
