<template>
  <div>
    <q-card flat>
      <div class="flex q-pa-md">
        <q-btn outline rounded class="q-ml-auto" color="grey-8" icon="add" :to="{ name: 'groupAdd' }"/>
      </div>
      <q-separator/>
      <State :status="status" :empty="!groups.length" >
        <q-list bordered>
          <template v-for="org in groups">
            <GroupTile :org="org" />
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
  import { OrgSearchQueryInterface, OrgSearchScopeEnum } from 'src/services/organisations.service';
  import { mapActions, mapGetters } from 'vuex';
  import GroupTile from 'components/groups/GroupTile.vue';
  import State from 'components/common/State.vue';
  import PublicOrganizationTile from 'components/public/PublicOrganizationTile.vue';
  export default Vue.extend({
    name: 'Groups',
    components: { State, GroupTile, PublicOrganizationTile },
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
      ...mapActions('GroupsModule', ['addGroup', 'getGroups'])
    }

  });
</script>
<style lang="css" scoped>

</style>
