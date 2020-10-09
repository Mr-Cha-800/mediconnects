<template>
  <div>
    <q-card flat>
      <div class="flex q-pa-md">
      </div>
      <q-separator/>
      <State :status="status" :empty="!getOrgs.length" >
        <q-list bordered>
          <template v-for="org in getOrgs">
            <OrganizationTile  :org="org" />
            <q-separator/>
          </template>
        </q-list>
      </State>
    </q-card>
    <q-bar class="bg-grey-4" style="height:50px">

    </q-bar>
  </div>
</template>
<script lang="ts">
  import Vue from 'vue';
  import { OrgSearchQueryInterface, OrgSearchScopeEnum } from 'src/services/organisations.service';
  import { mapActions, mapGetters } from 'vuex';
  import OrganizationTile from 'components/organizations/OrganizationTile.vue';
  import State from 'components/common/State.vue';
  import PublicOrganizationTile from 'components/public/PublicOrganizationTile.vue';

  export default Vue.extend({
    name: 'Organization',
    components: { State, OrganizationTile, PublicOrganizationTile },
    data() {
      return {
        activeOrg: 'account',
        orgCategories: {
          'account': {
            label: 'Your Orgs',
            payload: { scope: OrgSearchScopeEnum.ACCOUNT }
          },
          'partOf': {
            label: 'Orgs',
            payload: { scope: OrgSearchScopeEnum.PART_OF }
          },
          'public': {
            label: 'Discover',
            payload: { scope: OrgSearchScopeEnum.PUBLIC }
          }
        }
      };
    },
    computed: {
      ...mapGetters('orgProfileModule', ['getOrgs', 'status'])
    }

  });
</script>
<style lang="css" scoped>

</style>
