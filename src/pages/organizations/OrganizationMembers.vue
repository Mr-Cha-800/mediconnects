<template>
  <div>
    <q-card flat>
      <div class="flex q-pa-md">
        <q-btn
          rounded
          v-for="(membersType) in membersTypes"
          :outline="!isMembersType(membersType)"
          :color="isMembersType(membersType) ? 'primary' : 'grey-8'"
          :label="membersType"
          @click="setMembersType(membersType)"
          class="q-ml-sm"
        />
      </div>
      <q-separator/>
      <template v-if="isMembersType(membersTypes.pending)">
        <State :status="status" :empty="!connectRequests.length">
          <q-list bordered>
            <template v-for="connectRequest in connectRequests">
              <ConnectRequestTile :key="connectRequest.id" :connectRequest="connectRequest"/>
              <q-separator/>
            </template>
          </q-list>
        </State>
      </template>

      <template v-if="isMembersType(membersTypes.joined)">
        <State :status="status" :empty="!connectRequests.length">
          <q-list bordered>
            <template v-for="joinedMember in joinedMembers">
              {{joinedMember.id}}
              <q-separator/>
            </template>
          </q-list>
        </State>
      </template>
    </q-card>
  </div>
</template>
<script lang="ts">
  import Vue from 'vue';
  import { mapActions, mapGetters } from 'vuex';
  import State from 'components/common/State.vue';
  import { ConnectRequestInterface } from 'src/store/followConnect/state';
  import ConnectRequestTile from 'components/profile/ConnectRequestTile.vue';

  export default Vue.extend({
    name: 'OrganizationMembers',
    components: { State, ConnectRequestTile },
    data() {
      return {
        orgId: '',
        membersTypes: {
          pending: 'Pending',
          joined: 'Joined'
        },
        activeType: 'Pending'
      };
    },
    beforeMount() {
      const { $route: { params: { orgId = '' } = {} } = {} } = this;
      this.orgId = orgId;
      this.getConnectRequests();
    },
    computed: {
      ...mapGetters('followConnectModule', ['orgConnectsRequests', 'status']),
      connectRequests(): ConnectRequestInterface[] {
        return this.orgConnectsRequests(this.orgId);
      },
      joinedMembers(): ConnectRequestInterface[] {
        return [];
      }
    },
    methods: {
      ...mapActions('followConnectModule', ['getConnectRequests']),
      isMembersType(key: string) {
        return key === this.activeType;
      },
      setMembersType(orgKey: string) {
        this.activeType = orgKey;
      }
    }
  });
</script>
<style lang="css" scoped>

</style>
