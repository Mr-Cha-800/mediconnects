<template>
  <q-input dark dense standout v-model="search"  @keydown.enter.prevent="submit">
    <template v-slot:prepend>
       <q-spinner   v-if="loading" />
      <q-icon v-if="search === ''" name="search" />
      <q-icon v-else name="clear" class="cursor-pointer" @click="search = ''" />
    </template>
     <q-btn-dropdown
      flat
    >
      <q-list>
        <q-item clickable v-close-popup @click="type = 'profiles'">
          <q-item-section avatar>
            <q-avatar icon="groups" color="primary" text-color="white" />
          </q-item-section>
          <q-item-section>
            <q-item-label>Profiles</q-item-label>
          </q-item-section>
        </q-item>

        <q-item clickable v-close-popup @click="type = 'organizations'">
          <q-item-section avatar>
            <q-avatar icon="apartment" color="secondary" text-color="white" />
          </q-item-section>
          <q-item-section>
            <q-item-label>Organizations</q-item-label>
          </q-item-section>
        </q-item>
      </q-list>
    </q-btn-dropdown>
        <template v-slot:append>
          <q-icon v-if="type === 'profiles' " name="groups" />
          <q-icon v-if="type === 'organizations' " name="apartment" />
        </template>
  </q-input>
</template>

<script lang="ts">
  import Vue from 'vue';
  export default Vue.extend({
    name: 'Search',
    data() {
      return {
        search: '',
        type: '',
        loading: false
      };
    },
    methods: {
      submit() {
        this.loading = true
        if(this.type === '') {
          this.$q.notify({
              color: 'red-4',
              textColor: 'white',
              icon: 'clear',
              position: 'top',
              message: 'Please Choose the type !'
            })
        this.loading = false
        }
        else if(this.type === 'profiles'){
          this.$router.push({ name: 'profilesSearch', params: { q: this.search } })
        }
        else if(this.type === 'organizations'){
          this.$router.push({ name: 'organizationSearch', params: { q: this.search } })
        }
      }
   }
  });
</script>

<style lang="scss" scoped>
</style>
