<template>
  <q-card flat>
    <NavBanner>
      <q-btn flat color="primary" icon="edit" :to="{name: 'groupEdit', params: { groupId: $route.params.groupId }}"/>
    </NavBanner>
    <GroupHeader :group="group" />
    <div class="q-ma-md">
      <span class="text-h6 text-grey-8">Add new Tenants:</span>
    </div>
    <AddTenant v-if="tenantsType === 'users'" />
    <!--<AddOrgTenant v-if="tenantsType === 'organization'" />-->
    <State :status="status" :empty="!tenants.length">
      <q-list bordered>
        <template v-for="tenant in tenants">
          <TenantsTile :tenant="tenant"/>
          <q-separator/>
        </template>
      </q-list>
    </State>
  </q-card>
</template>
<script lang="ts">
  import Vue from 'vue';
  import { mapActions, mapGetters } from 'vuex';
  import TenantsTile from 'components/groups/TenantsTile.vue';
  import State from 'components/common/State.vue';
  import PublicOrganizationTile from 'components/public/PublicOrganizationTile.vue';
  import AddTenant from 'components/groups/AddTenant.vue';
  import AddOrgTenant from 'components/groups/AddOrgTenant.vue';
  import GroupHeader from 'components/groups/GroupHeader.vue';
  import { mapCacheActions } from 'vuex-cache';
  import NavBanner from 'components/common/NavBanner.vue';
  export default Vue.extend({
    name: 'groupTenants',
    components: { State, TenantsTile, PublicOrganizationTile, AddTenant,AddOrgTenant, GroupHeader, NavBanner },
    data() {
      return {
        inputDialog: false,
        tenantName: null,
        tenantsType: 'users'
      };
    },
    created() {
      this.getGroup(this.$route.params.groupId);
      this.getTenants(this.$route.params.groupId);
    },
    computed: {
      ...mapGetters('GroupsModule', ['tenants', 'group', 'status'])
    },
    methods: {
      ...mapCacheActions('GroupsModule', ['getTenants', 'getGroup'])
    }

  });
</script>
<style lang="css" scoped>

</style>
