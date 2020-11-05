<template>
  <div>
    <div id="callScreen"></div>
    <div v-if="status.receivingCall || status.emittingCall">
      <q-banner inline-actions>
        <div class="flex row items-center">
          <q-avatar>
            <q-img src="https://cdn.quasar.dev/img/avatar.png"/>
          </q-avatar>
          <span class="q-ml-md text-h5" v-if="status.receivingCall">
          Mimo Is calling...
        </span>
          <span class="q-ml-md text-h5" v-if="status.emittingCall">
            calling Mimo...
          </span>
          <span class="q-ml-md text-h5" v-if="status.calling">
            Talking to Mimo...
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
      ...mapGetters('callingModule', ['status'])
    },
    methods: {
      ...mapActions('callingModule', ['acceptCall', 'rejectCall', 'endCall'])
    }
  };
</script>

<style lang="scss" scoped>
</style>
