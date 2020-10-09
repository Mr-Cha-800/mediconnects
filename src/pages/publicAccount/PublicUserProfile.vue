<template>
  <div>
    <q-card flat>
      <UserProfileHeader />
      <q-separator />
      <q-btn flat color="primary" class="full-width" size="md" label="View Activity"></q-btn>
      <q-separator />
    </q-card>

    <!--TODO: Add list of user posts-->
    <q-card flat class="q-mt-md flex" style="height: 400px">
      Posts Goes Here
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
