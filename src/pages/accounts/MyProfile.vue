<template>
  <div>
    <State :empty="!profile" :status="status">
      <q-card flat>
        <UserProfileHeader :profile="profile"/>
        <q-separator/>
        <q-btn flat color="primary" class="full-width" size="md" label="View Activity"></q-btn>
        <q-separator/>
        <ProfilePosting/>
      </q-card>

      <!--TODO: Add list of user posts-->
      <q-card flat class="q-mt-md flex" style="height: 400px">
        Posts Goes Here
      </q-card>
    </State>
  </div>
</template>

<script lang="ts">
  import Vue from 'vue';
  import UserProfileHeader from 'components/profile/UserProfileHeader.vue';
  import ProfilePosting from 'components/profile/ProfilePosting.vue';
  import { mapGetters } from 'vuex';
  import State from 'components/common/State.vue';

  export default Vue.extend({
    name: 'MyProfile',
    components: { UserProfileHeader, ProfilePosting, State },
    computed: {
      ...mapGetters('userProfileModule', ['profile', 'status'])
    },
    mounted() {
      if (this.profile && !this.profile.firstName) {
        return this.$router.push({name: 'MyProfileUpdate'});
      }
    }
  });
</script>

<style>

</style>
