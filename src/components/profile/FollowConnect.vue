<template>
  <div>
    <div class="q-gutter-md">
      <q-btn
        no-caps
        color="primary"
        :loading="status.following"
        :disable="status.following || status.followed"
        @click="follow({entity: $props.entity, type: $props.type})">
      <span v-if="status.followed">
        <q-icon name="done" size="xs"/> Followed
      </span>
        <span v-else>
        Follow
      </span>
      </q-btn>

      <q-btn
        no-caps
        outline
        color="primary"
        :loading="status.connecting"
        :disable="showMessage || status.connected"
        @click="showMessage = true">
      <span v-if="status.connected">
        <q-icon name="done" size="xs"/> Connected
      </span>
        <span v-else>
        Connect
      </span>
      </q-btn>
    </div>
    <div v-if="showMessage">
      <form
        @submit.prevent.stop="onSubmit"
        @reset.prevent.stop="onReset"
        class="q-gutter-md q-pt-md row"
      >
        <div class="col-12">
          <q-input
            dense
            filled
            autofocus
            clearable
            type="textarea"
            v-model="message"
            label="Send a message"
          />
        </div>

        <div class="col-12 text-right">
          <q-btn
            label="Submit"
            type="submit"
            color="primary"
            :disable="status.connecting"
          />
          <q-btn label="Cancel" type="reset" color="primary" flat class="q-ml-sm"/>
        </div>
      </form>
    </div>
  </div>

</template>

<script lang="ts">
  import Vue from 'vue';
  import { mapActions, mapGetters } from 'vuex';
  import { EntityTypes } from 'src/types';

  export default Vue.extend({
    name: 'FollowConnect',
    data() {
      return {
        showMessage: false,
        message: ''
      };
    },
    props: {
      type: {
        type: String
      },
      entity: {
        type: String
      }
    },
    methods: {
      ...mapActions('followConnectModule', ['follow', 'connect']),
      onReset() {
        this.message = '';
        this.showMessage = false;
      },
      onSubmit() {
        this.showMessage = false;
        this.connect({
          entity: this.$props.entity,
          type: this.$props.type,
          message: this.message
        });
      },
    },
    computed: {
      ...mapGetters('followConnectModule', ['status'])
    }
  });
</script>

<style>

</style>
