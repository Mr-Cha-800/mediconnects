<template>
  <q-input dark dense standout v-model="searchh"  @keydown.enter.prevent="submit">
    <template v-slot:prepend>
       <q-spinner   v-if="loading" />
      <q-icon v-if="searchh === ''" name="search" />
      <q-icon v-else name="clear" class="cursor-pointer" @click="searchh = ''" />
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
  import { mapActions, mapGetters } from 'vuex';
  export default Vue.extend({
    name: 'Search',
    data() {
      return {
        searchh: '',
        type: '',
        loading: false
      };
    },
    methods: {
      ...mapActions('userProfileModule', ['search']),
      ...mapActions('orgProfileModule', ['getOrgsList']),
      submit() {
        this.loading = true
        if(this.type === '') {
          this.$q.notify({
              color: 'red-4',
              textColor: 'white',
              icon: 'clear',
              position: 'left',
              message: 'Please Choose the type !'
            })
        this.loading = false
        }
        else if(this.type === 'profiles'){
          this.search({
            keyword : this.searchh,
            scope: 'public'
          }).then(response => {
          this.$router.push({ name: 'profilesSearch', params: { q: this.searchh } })
            this.loading = false
          }).catch(error =>{
            this.loading = false
          })
        }
        else if(this.type === 'organizations'){
          this.getOrgsList({
            keyword : this.searchh,
            scope: 'public'
          }).then(response => {
          this.$router.push({ name: 'organizationSearch', params: { q: this.searchh } })
            this.loading = false
          }).catch(error =>{
            this.loading = false
          })
        }
      }
   }
  });
</script>

<style lang="scss" scoped>
</style>
