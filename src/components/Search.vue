<template>
  <q-input dark dense standout v-model="keyword" @keydown.enter.prevent="submit">
    <template v-slot:prepend>
      <q-icon v-if="keyword === ''" name="search"/>
      <q-icon v-else name="clear" class="cursor-pointer" @click="keyword = ''"/>
    </template>
    <q-btn flat>
      <q-icon name="groups" v-if="type === entityTypes.USER" color="primary"></q-icon>
      <q-icon name="apartment" v-else color="primary"></q-icon>
      <q-menu>
        <q-list>
          <q-item clickable v-close-popup @click="type = entityTypes.USER">
            <q-item-section avatar>
              <q-avatar icon="groups" text-color="primary"/>
            </q-item-section>
            <q-item-section>
              <q-item-label>Profiles</q-item-label>
            </q-item-section>
          </q-item>

          <q-item clickable v-close-popup @click="type = entityTypes.ORG">
            <q-item-section avatar>
              <q-avatar icon="apartment" text-color="primary"/>
            </q-item-section>
            <q-item-section>
              <q-item-label>Organizations</q-item-label>
            </q-item-section>
          </q-item>
        </q-list>
      </q-menu>
    </q-btn>
  </q-input>
</template>

<script lang="ts">
  import Vue from 'vue';
  import { EntityTypes } from 'src/types';

  export default Vue.extend({
    name: 'Search',
    data() {
      return {
        keyword: '',
        type: EntityTypes.USER,
        showingList: false,
      };
    },
    computed: {
      entityTypes: () => EntityTypes,
    },
    methods: {
      submit(): any {
        if (this.keyword && this.type === EntityTypes.USER) {
          return this.$router.push({ name: 'ProfilesSearch', query: { q: this.keyword } }).catch();
        }
        if (this.keyword && this.type === EntityTypes.ORG) {
          return this.$router.push({ name: 'OrganizationsSearch', query: { q: this.keyword } }).catch();
        }
      }
    }
  });
</script>

<style lang="scss" scoped>
</style>
