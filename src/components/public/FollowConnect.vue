<template>
  <div>
    <div class="q-gutter-md">
      <q-btn
        no-caps
        color="primary"
        :loading="status.following"
        :disable="status.following"
        @click="status.followed ?
        unFollow({entity: $props.entity}) :
        follow({entity: $props.entity, type: $props.type})">
      <span v-if="$props.followed || status.followed">
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
        v-if="!status.connected"
        :loading="status.connecting"
        :disable="showMessage"
        @click="showMessage = true">
      <span v-if="status.connected">
        <q-icon name="done" size="xs"/> Connected
      </span>
        <span v-else>
        Connect
      </span>
      </q-btn>

      <q-btn
        no-caps
        outline
        color="primary"
        v-if="status.connected"
        @click="$router.push({ name: 'messagesID', params: { id: entity } })">
      <span>
         Message
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
            ref="messageInput"
            lazy-rules
            :rules="[ val => !!val || 'Please type a message']"
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
    <div v-if="sendPM">
      <form
        @submit.prevent.stop="onPmSubmit"
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
            v-model="pm"
            label="Say Hello"
            ref="pmInput"
            lazy-rules
            :rules="[ val => !!val || 'Please type your message']"
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
    <div class="q-mt-sm flex row items-center" v-if="status.error">
      <q-icon name="error_outline" color="negative" class="q-mr-sm"></q-icon>
      <span class="text-negative text-body2">{{status.error}}</span>
    </div>
  </div>

</template>

<script lang="ts">
  import Vue from 'vue';
  import { mapActions, mapGetters } from 'vuex';
  import * as CometChat from 'src/services/cometChat.service';

  export default Vue.extend({
    name: 'FollowConnect',
    props: {
      type: {
        type: String
      },
      entity: {
        type: String
      }
    },
    data() {
      return {
        sendPM: false,
        showMessage: false,
        message: '',
        pm: ''
      };
    },
    methods: {
      ...mapActions('followConnectModule', ['follow', 'unFollow', 'connect']),
      onReset() {
        this.message = '';
        this.pm = '';
        this.showMessage = false;
      },
      onSubmit() {
        if ((this.$refs.messageInput as any).validate()) {
          this.showMessage = false;
          this.connect({
            entity: this.$props.entity,
            type: this.$props.type,
            message: this.message
          });
        }
      },
      onPmSubmit() {
        if ((this.$refs.pmInput as any).validate()) {
          this.sendPM = false;
          CometChat.sendUserMessage({
            receiverID: this.$props.entity,
            messageText: this.pm,
          });
          this.onReset();
        }
      }
    },
    computed: {
      ...mapGetters('followConnectModule', ['followConnectStatus']),
      status(): any {
        return this.followConnectStatus(this.$props.entity) || {};
      }
    }
  });
</script>

<style>

</style>
