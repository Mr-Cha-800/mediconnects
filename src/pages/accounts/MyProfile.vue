<template>
  <div>
    <State :empty="!profile" :status="status">
      <q-card flat>
        <NavBanner>
          <q-btn flat color="primary" @click="$router.push({name: 'MyProfileUpdate'})" icon="edit" />
        </NavBanner>
        <UserProfileHeader :profile="profile"/>
        <q-separator/>
        <q-btn flat color="primary" class="full-width" size="md" label="View Activity"></q-btn>
        <q-separator/>
        <ProfilePosting/>
      </q-card>

      <ProfileSections />
    </State>
  </div>
</template>

<script lang="ts">
  import Vue from 'vue';
  import UserProfileHeader from 'components/profile/UserProfileHeader.vue';
  import ProfilePosting from 'components/profile/ProfilePosting.vue';
  import { mapGetters } from 'vuex';
  import State from 'components/common/State.vue';
  import ProfileSections from 'components/posts/ProfileSections.vue';
  import NavBanner from 'components/common/NavBanner.vue';

  export default Vue.extend({
    name: 'MyProfile',
    components: { UserProfileHeader, ProfilePosting, State, ProfileSections, NavBanner },
    computed: {
      ...mapGetters('userProfileModule', ['profile', 'status'])
    },
    mounted() {
      if (this.profile && this.profile.email && !this.profile.firstName) {
        return this.$router.push({ name: 'MyProfileUpdate' });
      }
    }
  });
</script>

<style>

</style>
