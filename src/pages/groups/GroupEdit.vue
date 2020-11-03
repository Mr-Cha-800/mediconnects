<template>
  <q-card flat>
    <NavBanner />
    <div class="row">
      <div class="col-xs-12 col-md-8 offset-md-2">
        <State :status="this.status" :empty="!this.profile">
          <GroupForm @submit="this.updateGroup" :profile="profile" :submitting="this.status.updating"/>
        </State>
      </div>
    </div>
  </q-card>

</template>

<script lang="ts">
  import Vue from 'vue';
  import { mapActions, mapGetters } from 'vuex';
  import GroupForm from 'components/groups/GroupForm.vue';
  import Loader from 'components/common/Loader.vue';
  import ErrorState from 'components/common/ErrorState.vue';
  import EmptyState from 'components/common/EmptyState.vue';
  import State from 'components/common/State.vue';
  import NavBanner from 'components/common/NavBanner.vue';

  export default Vue.extend({
    name: 'GroupEdit',
    components: { State, GroupForm, NavBanner },
    computed: {
      ...mapGetters('GroupsModule', ['group', 'status']),
    },
    methods: {
      ...mapActions('GroupsModule', ['updateGroup', 'getGroup']),
    },
    watch: {
      group: {
        handler(newValue) {
          this.profile = {...newValue};
        }
      }
    },
    data(){
      return {
        profile: {},
      }
    },
    created() {
      const { $route: { params: {groupId = ''} = {} } = {} } = this;
      this.getGroup(groupId);
    }
  });
</script>

<style>

</style>
