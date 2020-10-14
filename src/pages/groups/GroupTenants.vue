<template>
  <div>
    <q-card flat>
      <AddTenant/>
      <q-separator/>
      <State :status="status" :empty="!tenants.length" >
        <q-list bordered>
          <template v-for="org in tenants">
            <TenantsTile :org="org" />
            <q-separator/>
          </template>
        </q-list>
      </State>
    </q-card>
  </div>
</template>
<script lang="ts">
  import Vue from 'vue';
  import { mapActions, mapGetters } from 'vuex';
  import TenantsTile from 'components/groups/TenantsTile.vue';
  import State from 'components/common/State.vue';
  import PublicOrganizationTile from 'components/public/PublicOrganizationTile.vue';
  import AddTenant from 'components/groups/AddTenant.vue';
  export default Vue.extend({
    name: 'groupTenants',
    components: { State, TenantsTile, PublicOrganizationTile, AddTenant },
    data() {
      return {
      inputDialog: false,
      tenantName: null,
      };
    },
    created() {
      this.getTenants(this.$route.params.groupId)
    },
    computed: {
      ...mapGetters('GroupsModule', ['tenants', 'status']),
    },
    methods: {
      ...mapActions('GroupsModule', ['getTenants']),
    }

  });
</script>
<style lang="css" scoped>

</style>
