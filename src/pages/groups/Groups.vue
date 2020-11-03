<template>
  <div>
    <q-card flat>
      <NavBanner>
        <q-btn flat color="primary" icon="add" :to="{ name: 'groupAdd' }"/>
      </NavBanner>
      <q-separator/>
      <State :status="status" :empty="!groups.length" >
        <q-list bordered>
          <template v-for="group in groups">
            <GroupTile :group="group" />
            <q-separator/>
          </template>
        </q-list>
      </State>
    </q-card>
    <q-bar class="bg-grey-4" style="height:50px">
    </q-bar>
  </div>
</template>
<script lang="ts">
  import Vue from 'vue';
  import { mapGetters } from 'vuex';
  import { mapCacheActions } from 'vuex-cache';
  import GroupTile from 'components/groups/GroupTile.vue';
  import State from 'components/common/State.vue';
  import PublicOrganizationTile from 'components/public/PublicOrganizationTile.vue';
  import NavBanner from 'components/common/NavBanner.vue';
  export default Vue.extend({
    name: 'Groups',
    components: { State, GroupTile, PublicOrganizationTile, NavBanner },
    data() {
      return {
      };
    },
    created() {
      this.getGroups({
        scope: 'account'
      })
    },
    computed: {
      ...mapGetters('GroupsModule', ['groups', 'status']),
    },
    methods: {
      ...mapCacheActions('GroupsModule', ['addGroup', 'getGroups'])
    }

  });
</script>
<style lang="css" scoped>

</style>
