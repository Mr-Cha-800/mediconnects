<template>
  <div>
    <q-card flat>
      <div class="flex q-pa-md">
        <q-btn outline rounded class="q-ml-auto" color="grey-8" icon="add" @click="inputDialog = true"/>
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
    <q-dialog v-model="inputDialog" persistent>
      <q-card style="min-width: 350px">
        <q-card-section>
          <div class="text-h6">Create a group</div>
        </q-card-section>

        <q-card-section class="q-pt-none">
          <q-input dense v-model="groupName" autofocus @keyup.enter="creategroup" />
        </q-card-section>

        <q-card-actions align="right" class="text-primary">
          <q-btn no-caps flat label="Cancel" v-close-popup />
          <q-btn no-caps flat @click="creategroup" label="Create" v-close-popup />
        </q-card-actions>
      </q-card>
    </q-dialog>
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
      inputDialog: false,
      groupName: ''
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
      ...mapActions('GroupsModule', ['addGroup', 'getGroups']),
      creategroup(){
        this.inputDialog= false
        this.addGroup({
          name: this.groupName,
          scope: 'account'
        }).then(response => {
          this.groupName = ''
        }).catch(error => {
          console.log(error)
        })
      }
    }

  });
</script>
<style lang="css" scoped>

</style>
