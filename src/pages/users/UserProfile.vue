<template>
  <State :status="status" :empty="!user">
    <q-card flat>
        <template>
          <UserProfileHeader :profile="user" />
          <q-separator />
          <q-btn flat color="primary" class="full-width" size="md" label="View Activity"></q-btn>
        </template>

    </q-card>

    <!--TODO: Add list of user posts-->
    <q-card flat class="q-mt-md flex" style="height: 400px">
      Posts Goes Here
    </q-card>
  </State>
</template>

<script lang="ts">
  import Vue from 'vue';
  import { mapActions, mapGetters } from 'vuex';
  import State from 'components/common/State.vue';
  import UserProfileHeader from 'components/profile/UserProfileHeader.vue';

  export default Vue.extend({
    name: 'UserProfile',
    components: { State, UserProfileHeader },
    computed: {
      ...mapGetters('userProfileModule', ['user', 'status']),
    },
    methods: {
      ...mapActions('userProfileModule', ['getUser']),
    },
    beforeMount() {
      const { $route: { params: {userId = ''} = {} } = {} } = this;
      if (userId) {
        this.getUser(userId);
      }
    }
  });
</script>

<style>

</style>
