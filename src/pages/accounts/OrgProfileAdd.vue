<template>
  <q-card flat>
    <div class="row">
      <div class="col-xs-12 col-md-8 offset-md-2">
        <OrgProfileForm @submit="this.addOrgProfile" :submitting="this.status.updating"/>
      </div>
    </div>
  </q-card>

</template>

<script lang="ts">
  import Vue from 'vue';
  import { mapActions, mapGetters } from 'vuex';
  import OrgProfileForm from 'components/profile/OrgProfileForm.vue';

  export default Vue.extend({
    name: 'OrgProfileAdd',
    components: { OrgProfileForm },
    computed: {
      ...mapGetters('orgProfileModule', ['status']),
    },
    methods: {
      ...mapActions('orgProfileModule', ['addOrgProfile']),
    }
  });
</script>

<style>

</style>
