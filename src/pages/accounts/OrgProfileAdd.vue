<template>
  <q-card flat>
    <div class="row">
      <div class="col-xs-12 col-md-8 offset-md-2">
        <OrgProfileForm @submit="addOrgProfile"/>
      </div>
    </div>
  </q-card>

</template>

<script lang="ts">
  import Vue from 'vue';
  import { mapActions } from 'vuex';
  import OrgProfileForm from 'components/profile/OrgProfileForm.vue';

  export default Vue.extend({
    name: 'OrgProfileAdd',
    components: { OrgProfileForm },
    methods: {
      ...mapActions('orgProfileModule', ['addOrgProfile']),
    }
  });
</script>

<style>

</style>
