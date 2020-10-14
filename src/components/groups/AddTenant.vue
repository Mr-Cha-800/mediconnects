<template>
  <div>
    <q-select
      v-model="selectedUser"
      use-input
      clearable
      hide-selected
      fill-input
      input-debounce="300"
      :options="options"
      :option-label="user => user ? `${user.firstName} ${user.lastName}` : ''"
      @filter="filterFn"
      :loading="loading"
      input-class="q-px-md"
    >
      <template v-slot:append>
        <q-btn flat icon="check" size="md" @click="addUserTenant" :disable="!selectedUser" />
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
            <q-item-label>{{scope.opt.firstName}} {{scope.opt.lastName}}</q-item-label>
            <q-item-label caption>{{ scope.opt.title }}</q-item-label>
          </q-item-section>
        </q-item>
      </template>
    </q-select>
  </div>

</template>

<script lang="ts">
  import * as userProfile from 'src/services/userProfile.service';
  import { UsersSearchScopeEnum } from 'src/services/userProfile.service';
  import Vue from 'vue';
  import { mapActions, mapGetters } from 'vuex';
  import { UserProfileInterface } from 'src/store/userProfile/state';
  import { EntityTypes } from 'src/types';

  export default Vue.extend({
    name: 'AddTenant',
    data() {
      const options: UserProfileInterface[] = [];
      const selectedUser: UserProfileInterface | null = null;
      const loading: boolean = false;
      return {
        selectedUser,
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
        if (this.selectedUser) {
          const { $route: { params: {groupId} } } = this;
          const { id: tenant } = this.selectedUser || { id: ''};
          this.addTenant({
            groupId,
            payload: {
              tenant,
              type: EntityTypes.USER
            }
          });
        }
      },
      filterFn(value: string, update: any) {
        const keyword = value.toLocaleLowerCase();
        // Bypassing vuex here, to get users inside the update callback
        this.loading = true;
        userProfile.search({
          keyword,
          scope: UsersSearchScopeEnum.PUBLIC
        }).then(users => {
          update(() => {
            this.options = users;
            this.loading = false;
          });
        });
      },
    }
  });
</script>

<style>

</style>
