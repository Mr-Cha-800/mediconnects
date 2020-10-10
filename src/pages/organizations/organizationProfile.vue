<template>
  <div>
    <q-card flat>
      <template v-if="status.loading">
        <Loader />
      </template>
      <template v-else-if="status.error">
        <ErrorState>{{status.error}}</ErrorState>
      </template>
      <template v-else-if="!orgDetails">
        <EmptyState />
      </template>
      <template v-else>
        <OrgProfileHeader :org="orgDetails" />
        <q-separator />
        <q-btn flat color="primary" class="full-width" size="md" label="View Activity"></q-btn>
        <q-separator />
        <ProfilePosting />
      </template>
    </q-card>

    <!--TODO: Add list of user posts-->
    <q-card flat class="q-mt-md flex" style="height: 400px">
      Posts Goes Here
    </q-card>
  </div>
</template>

<script lang="ts">
  import Vue from 'vue';
  import OrgProfileHeader from 'components/profile/OrgProfileHeader.vue';
  import ProfilePosting from 'components/profile/ProfilePosting.vue';
  import { mapActions, mapGetters } from 'vuex';
  import Loader from 'components/common/Loader.vue';
  import ErrorState from 'components/common/ErrorState.vue';
  import EmptyState from 'components/common/EmptyState.vue';

  export default Vue.extend({
    name: 'Profile',
    components: { Loader, ErrorState, EmptyState, OrgProfileHeader, ProfilePosting },
    computed: {
      ...mapGetters('orgProfileModule', ['orgDetails', 'status']),
    },
    methods: {
      ...mapActions('orgProfileModule', ['getOrg']),
    },
    beforeMount() {
      const { $route: { params: {orgId = ''} = {} } = {} } = this;
      this.getOrg(orgId);
    }
  });
</script>

<style>

</style>
