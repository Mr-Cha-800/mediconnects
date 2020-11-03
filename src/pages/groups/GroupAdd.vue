<template>
  <q-card flat>
    <NavBanner />
    <div class="row">
      <div class="col-xs-12 col-md-8 offset-md-2">
        <GroupForm @submit="this.addGroup" :submitting="this.status.updating"/>
      </div>
    </div>
  </q-card>
</template>

<script lang="ts">
  import Vue from 'vue';
  import { mapActions, mapGetters } from 'vuex';
  import GroupForm from 'components/groups/GroupForm.vue';
  import NavBanner from 'components/common/NavBanner.vue';

  export default Vue.extend({
    name: 'GroupAdd',
    components: { GroupForm, NavBanner },
    computed: {
      ...mapGetters('GroupsModule', ['status']),
    },
    methods: {
      ...mapActions('GroupsModule', ['addGroup']),
    }
  });
</script>

<style>

</style>
