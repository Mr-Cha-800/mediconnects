<template>
  <div>
    <q-card flat>
      <UserProfileHeader />
      <q-separator />
    </q-card>
  </div>
</template>

<script lang="ts">
  import Vue from 'vue';
  import UserProfileHeader from 'components/profile/UserProfileHeader.vue';

  export default Vue.extend({
    name: 'PublicUserProfile',
    components: { UserProfileHeader },
  });
</script>

<style>

</style>
