<template>
  <State :status="status" :empty="!userConnectsRequests.length">
    <q-card flat>
      <q-separator/>
      <q-list bordered >
        <template v-for="connectRequest in this.userConnectsRequests"  >
          <ConnectRequestTile :key="connectRequest.id" :connectRequest="connectRequest" />
          <q-separator/>
        </template>
      </q-list>
    </q-card>
  </State>
</template>
<script lang="ts">
  import Vue from 'vue';
  import { mapActions, mapGetters } from 'vuex';
  import ConnectRequestTile from 'components/profile/ConnectRequestTile.vue';
  import State from 'components/common/State.vue';

  export default Vue.extend({
    name: 'usersConnectRequests',
    components: { ConnectRequestTile, State },
    data() {
      return {}
    },
    created() {
      this.getConnectRequests();
    },
    computed: {
      ...mapGetters('followConnectModule', ['userConnectsRequests', 'status']),
    },
    methods: {
      ...mapActions('followConnectModule', ['getConnectRequests']),
    }
  });
</script>
