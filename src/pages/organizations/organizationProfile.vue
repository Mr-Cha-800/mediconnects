<template>
  <State :status="status" :empty="!orgDetails">
    <q-card flat>
      <NavBanner />
      <OrgProfileHeader :org="orgDetails" />
      <q-separator />
    </q-card>
  </State>
</template>

<script lang="ts">
  import Vue from 'vue';
  import OrgProfileHeader from 'components/profile/OrgProfileHeader.vue';
  import ProfilePosting from 'components/profile/ProfilePosting.vue';
  import { mapActions, mapGetters } from 'vuex';
  import Loader from 'components/common/Loader.vue';
  import ErrorState from 'components/common/ErrorState.vue';
  import EmptyState from 'components/common/EmptyState.vue';
  import State from 'components/common/State.vue';
  import { mapCacheActions } from 'vuex-cache';
  import NavBanner from 'components/common/NavBanner.vue';

  export default Vue.extend({
    name: 'Profile',
    components: { State, OrgProfileHeader, ProfilePosting, NavBanner },
    computed: {
      ...mapGetters('orgProfileModule', ['orgDetails', 'status']),
    },
    methods: {
      ...mapCacheActions('orgProfileModule', ['getOrg']),
    },
    beforeMount() {
      const { $route: { params: {orgId = ''} = {} } = {} } = this;
      this.getOrg(orgId);
    }
  });
</script>

<style>

</style>
