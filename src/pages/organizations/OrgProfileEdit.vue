<template>
  <State :status="this.status" :empty="!this.profile">
    <q-card flat>
      <div class="row">
        <div class="col-xs-12 col-md-8 offset-md-2">
          <OrgProfileForm @submit="this.editOrgProfile" :profile="profile" :submitting="this.status.updating"/>
        </div>
      </div>
    </q-card>
  </State>

</template>

<script lang="ts">
  import Vue from 'vue';
  import { mapActions, mapGetters } from 'vuex';
  import OrgProfileForm from 'components/profile/OrgProfileForm.vue';
  import State from 'components/common/State.vue';

  export default Vue.extend({
    name: 'OrgProfileAdd',
    components: { State, OrgProfileForm },
    computed: {
      ...mapGetters('orgProfileModule', ['orgDetails', 'status'])
    },
    methods: {
      ...mapActions('orgProfileModule', ['editOrgProfile', 'getOrg'])
    },
    watch: {
      orgDetails: {
        handler(newValue) {
          this.profile = { ...newValue };
        }
      }
    },
    data() {
      return {
        profile: {}
      };
    },
    created() {
      const { $route: { params: { orgId = '' } = {} } = {} } = this;
      this.getOrg(orgId);
    }
  });
</script>

<style>

</style>
