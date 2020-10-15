<template>
  <div>
    <q-select
      v-model="selectedGroup"
      use-input
      clearable
      hide-selected
      fill-input
      input-debounce="300"
      :options="options"
      :option-label="group => group ? `${group.name}` : ''"
      @filter="filterFn"
      :loading="loading"
      input-class="q-px-md"
    >
      <template v-slot:append>
        <q-btn flat icon="check" size="md" @click="addUserTenant" :disable="!selectedGroup" />
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
            <q-item-label  class="ellipsis" caption>Created By : {{ scope.opt.createdBy.firstName }} {{ scope.opt.createdBy.lastName }}</q-item-label>
          </q-item-section>
        </q-item>
      </template>
    </q-select>
  </div>

</template>

<script lang="ts">
  import * as groups from 'src/services/groups.service';
  import { GroupsSearchScopeEnum } from 'src/services/groups.service';
  import Vue from 'vue';
  import { mapActions, mapGetters } from 'vuex';
  import { GroupsInterface } from 'src/store/groups/state';
  import { EntityTypes } from 'src/types';

  export default Vue.extend({
    name: 'AddOrgTenant',
    data() {
      const options: GroupsInterface[] = [];
      const selectedGroup: GroupsInterface | null = null;
      const loading = false;
      return {
        selectedGroup,
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
        if (this.selectedGroup) {
          const { $route: { params: {groupId} } } = this;
          const { id: tenant } = this.selectedGroup || { id: ''};
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
        groups.getGroups({
          scope: GroupsSearchScopeEnum.ACCOUNT,
          keyword
        }).then(groups => {
          update(() => {
            this.options = groups;
            this.loading = false;
          });
        });
      },
    }
  });
</script>

<style>

</style>
