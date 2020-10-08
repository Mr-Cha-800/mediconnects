<template>
  <div>
    <q-card flat>
      <q-separator/>
      <q-list bordered >
        <template v-for="connectRequest in this.userConnectsRequests"  >
          <ConnectRequestTile :connectRequest="connectRequest" />
          <q-separator/>
        </template>
      </q-list>
    </q-card>
  </div>
</template>
<script lang="ts">
  import Vue from 'vue';
  import { mapActions, mapGetters } from 'vuex';
  import ConnectRequestTile from 'components/profile/ConnectRequestTile.vue';

  export default Vue.extend({
    name: 'usersConnectRequests',
    components: { ConnectRequestTile },
    data() {
      return {}
    },
    created() {
      this.getConnectRequests();
    },
    computed: {
      ...mapGetters('followConnectModule', ['userConnectsRequests']),
    },
    methods: {
      ...mapActions('followConnectModule', ['getConnectRequests']),
    }
  });
</script>
