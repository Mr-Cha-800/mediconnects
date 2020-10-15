<template>
  <div>
    <q-select
      v-model="selectedOrg"
      use-input
      clearable
      hide-selected
      fill-input
      input-debounce="300"
      :options="options"
      :option-label="org => org ? `${org.name}` : ''"
      @filter="filterFn"
      :loading="loading"
      input-class="q-px-md"
    >
      <template v-slot:append>
        <q-btn flat icon="check" size="md" @click="addUserTenant" :disable="!selectedOrg" />
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
        >
          <q-item-section>
            <q-item-label>{{scope.opt.name}}</q-item-label>
          </q-item-section>
        </q-item>
      </template>
    </q-select>
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
    name: 'AddOrgTenant',
    data() {
      const options: OrganizationInterface[] = [];
      const selectedOrg: OrganizationInterface | null = null;
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
    }
  });
</script>

<style>

</style>
