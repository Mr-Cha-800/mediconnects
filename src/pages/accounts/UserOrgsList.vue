<template>
  <div>
    <q-card flat>
      <div class="flex q-pa-md">
        <q-btn
          rounded
          v-for="(orgCategory, orgKey) in orgCategories"
          :outline="!isOrgActive(orgKey)"
          :color="isOrgActive(orgKey) ? 'primary' : 'grey-8'"
          :label="orgCategory.label"
          @click="setOrgCategory(orgCategory.payload, orgKey)"
          class="q-ml-sm"
        />

        <q-btn outline rounded class="q-ml-auto" color="grey-8" icon="add" :to="{ name: 'OrgProfileAdd' }"/>
      </div>
      <q-separator/>
      <State :status="status" :empty="!getOrgs.length" >
        <q-list bordered>
          <template v-for="org in getOrgs">
            <OrganizationTile v-if="activeOrg === 'account'" :org="org" />
            <PublicOrganizationTile v-else :org="org" />
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
    created() {
      const { account: { payload = {} } = {} } = this.orgCategories;
      this.search(payload);
    },
    computed: {
      ...mapGetters('orgProfileModule', ['getOrgs', 'status']),
    },
    methods: {
      ...mapActions('orgProfileModule', ['search']),
      isOrgActive(orgKey: string) {
        return orgKey === this.activeOrg;
      },
      setOrgCategory(payload: OrgSearchQueryInterface, orgKey: string) {
        this.activeOrg = orgKey;
        this.search(payload);
      }
    }

  });
</script>
<style lang="css" scoped>

</style>
