<template>
  <div>
    <q-select
      v-model="selectedOrg"
      use-input
      fill-input
      multiple
      map-options
      use-chips
      input-debounce="300"
      :options="options"
      :option-label="org => org ? `${org.name}` : ''"
      @filter="filterFn"
      placeholder="Search Organizations"
      :loading="loading"
      input-class="q-px-md"
    >
      <template v-slot:append>
        <q-btn flat icon="check" size="md" @click="onClickOrgs" :disable="!selectedOrg" />
      </template>
      <template v-slot:no-option>
        <q-item>
          <q-item-section class="text-italic text-grey">
            No Data
          </q-item-section>
        </q-item>
      </template>
      <template v-slot:option="scope">
        <q-item
          v-bind="scope.itemProps"
          v-on="scope.itemEvents"
            v-ripple>
          <q-checkbox v-model="selectedOrg" :val="scope.opt"  />
          <q-item-section>
            <q-item-label>{{scope.opt.name}}</q-item-label>
          </q-item-section>
        </q-item>
      </template>
    </q-select>
    <!-- to show selected users  :
   Orgs selected: "{{ selectedOrg }}"
     -->
  </div>

</template>

<script lang="ts">
  import * as organizations from 'src/services/organisations.service';
  import { OrgSearchScopeEnum } from 'src/services/organisations.service';
  import Vue from 'vue';
  import { mapActions, mapGetters } from 'vuex';
  import { OrganizationInterface } from 'src/store/orgProfile/state';
  import { EntityTypes } from 'src/types';

  export default Vue.extend({
    name: 'AddOrgIdtoPost',
    data() {
      const options: OrganizationInterface[] = [];
      const selectedOrg: OrganizationInterface[] = [];
      const loading = false;
      return {
        selectedOrg,
        options,
        loading
      };
    },
    computed: {
      ...mapGetters('userProfileModule', ['userStatus'])
    },
    methods: {
      ...mapActions('GroupsModule', ['addTenant']),
      addUserTenant() {
        if (this.selectedOrg) {
          const { $route: { params: {groupId} } } = this;
          const { id: tenant } = this.selectedOrg || { id: ''};
          this.addTenant({
            groupId,
            payload: {
              tenant,
              type: EntityTypes.ORG
            }
          });
        }
      },
      filterFn(value: string, update: any) {
        const keyword = value.toLocaleLowerCase();
        // Bypassing vuex here, to get users inside the update callback
        this.loading = true;
        organizations.search({
          keyword,
          scope: OrgSearchScopeEnum.ACCOUNT
        }).then(organizations => {
          update(() => {
            this.options = organizations;
            this.loading = false;
          });
        });
      },
      onClickOrgs (event) {
        this.$emit('clicked', this.selectedOrg)
      }
    }
  });
</script>

<style>

</style>
