<template>
  <q-card flat>
    <div class="row">
      <div class="col-xs-12 col-md-8 offset-md-2">
        <UserProfileForm :profile="{...this.profile}"/>
      </div>
    </div>
  </q-card>

</template>

<script lang="ts">
  import Vue from 'vue';
  import UserProfileForm from 'components/profile/UserProfileForm.vue';
  import { mapGetters } from 'vuex';

  export default Vue.extend({
    name: 'UserProfileUpdate',
    components: { UserProfileForm },
    computed: {
      ...mapGetters('userProfileModule', ['profile']),
    },
  });
</script>

<style>

</style>
