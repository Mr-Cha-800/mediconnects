<template>
  <div>
    <div id="callScreen"></div>
    <div v-if="status.receivingCall || status.emittingCall">
      <q-banner inline-actions>
        <div v-if="status.receivingCall" class="flex row items-center">
          <q-avatar>
            <q-img :src="call.sender.avatar"/>
          </q-avatar>
          <span class="q-ml-md text-h5">
          {{call.sender.name}} Is calling...
        </span>
          <span class="q-ml-md text-h5" v-if="status.calling">
            Talking to {{call.sender.name}}...
          </span>
        </div>
        <div v-else class="flex row items-center">
          <q-avatar>
            <q-img :src="call.receiver.avatar"/>
          </q-avatar>
          <span class="q-ml-md text-h5" v-if="status.emittingCall">
            calling {{call.receiver.name}} ...
          </span>
          <span class="q-ml-md text-h5" v-if="status.calling">
            Talking to {{call.receiver.name}}...
          </span>
        </div>

        <template v-slot:action>
          <q-btn flat rounded size="lg" color="primary" icon="call" v-if="status.receivingCall" @click="acceptCall"/>
          <q-btn flat rounded size="lg" color="negative" icon="call_end" @click="rejectCall"/>
        </template>
      </q-banner>
    </div>
  </div>
</template>

<script>

  import { mapActions, mapGetters } from 'vuex';

  export default {
    name: 'CallBanner',
    computed: {
      ...mapGetters('callingModule', ['status', 'call'])
    },
    methods: {
      ...mapActions('callingModule', ['acceptCall', 'rejectCall', 'endCall','startCall'])
    }
  };
</script>

<style lang="scss" scoped>
</style>
