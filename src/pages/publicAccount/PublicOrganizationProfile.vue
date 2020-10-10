<template>
  <div>
    <q-card flat>
      <State :status="status" :empty="!orgDetails">
        <OrgProfileHeader :org="orgDetails"/>
        <q-separator/>
        <q-btn flat color="primary" class="full-width" size="md" label="View Activity"></q-btn>
        <q-separator/>

        <!--TODO: Add list of user posts-->
        <q-card flat class="q-mt-md flex" style="height: 400px">
          Posts Goes Here
        </q-card>
      </State>
    </q-card>
  </div>
</template>

<script lang="ts">
  import Vue from 'vue';
  import OrgProfileHeader from 'components/profile/OrgProfileHeader.vue';
  import ProfilePosting from 'components/profile/ProfilePosting.vue';
  import { mapActions, mapGetters } from 'vuex';
  import State from 'components/common/State.vue';

  export default Vue.extend({
    name: 'PublicOrganizationProfile',
    components: { State, OrgProfileHeader, ProfilePosting },
    computed: {
      ...mapGetters('orgProfileModule', ['orgDetails', 'status'])
    },
    methods: {
      ...mapActions('orgProfileModule', ['getPublicOrg'])
    },
    beforeMount() {
      const { $route: { params: { orgId = '' } = {} } = {} } = this;
      this.getPublicOrg(orgId);
    }
  });
</script>

<style>

</style>
