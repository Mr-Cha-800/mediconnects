<template>
  <State :status="status">
    <q-card flat>
      <div class="row">
        <div class="col-xs-12 col-md-8 offset-md-2">
          <UserProfileForm :profile="this.userProfile"/>
        </div>
      </div>
    </q-card>
  </State>

</template>

<script lang="ts">
  import Vue from 'vue';
  import UserProfileForm from 'components/profile/UserProfileForm.vue';
  import { mapGetters } from 'vuex';
  import State from 'components/common/State.vue';

  export default Vue.extend({
    name: 'MyProfileUpdate',
    components: { State, UserProfileForm },
    watch: {
      profile: {
        handler(newValue) {
          this.userProfile = { ...newValue };
        }
      }
    },
    data() {
      return {
        userProfile: {}
      };
    },
    created() {
      this.userProfile = { ...this.profile };
    },
    computed: {
      ...mapGetters('userProfileModule', ['profile', 'status'])
    }
  });
</script>

<style>

</style>
