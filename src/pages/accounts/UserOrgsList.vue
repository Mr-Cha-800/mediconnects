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
      <template v-if="status.loading">
        <Loader />
      </template>
      <template v-else-if="status.error">
        <ErrorState>{{status.error}}</ErrorState>
      </template>
      <template v-else-if="!getOrgs.length">
        <EmptyState />
      </template>
      <q-list bordered v-else>
        <template v-for="org in getOrgs">
          <OrganizationTile :org="org" />
          <q-separator/>
        </template>
      </q-list>
    </q-card>
    <q-bar class="bg-grey-4" style="height:50px">

    </q-bar>
  </div>
</template>
<script lang="ts">
  import Vue from 'vue';
  import { OrgSearchQueryInterface, OrgSearchScopeEnum } from 'src/services/organisations.service';
  import { mapActions, mapGetters } from 'vuex';
  import Loader from 'components/common/Loader.vue';
  import ErrorState from 'components/common/ErrorState.vue';
  import EmptyState from 'components/common/EmptyState.vue';
  import OrganizationTile from 'components/organizations/OrganizationTile.vue';

  export default Vue.extend({
    name: 'Organization',
    components: { Loader, ErrorState, EmptyState, OrganizationTile },
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
      this.getOrgsList(payload);
    },
    computed: {
      ...mapGetters('orgProfileModule', ['getOrgs', 'status'])
    },
    methods: {
      ...mapActions('orgProfileModule', ['getOrgsList']),
      isOrgActive(orgKey: string) {
        return orgKey === this.activeOrg;
      },
      setOrgCategory(payload: OrgSearchQueryInterface, orgKey: string) {
        this.activeOrg = orgKey;
        this.getOrgsList(payload);
      }
    }

  });
</script>
<style lang="css" scoped>

</style>
