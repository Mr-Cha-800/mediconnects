<template>
  <div>
    <q-card flat>
      <div class="flex q-pa-md">
      <div class="text-h6">Tanants of the group "{{this.$route.params.groupName}}" </div>
        <q-btn outline rounded class="q-ml-auto" color="grey-8" icon="add" @click="inputDialog = true"/>
      </div>
      <q-separator/>
      <State :status="status" :empty="!group.length" >
        <q-list bordered>
          <template v-for="org in group">
            <TenantsTile :org="org" />
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
          <div class="text-h6">Add a tenant</div>
        </q-card-section>

        <q-card-section class="q-pt-none">
          <q-input dense v-model="tenantName" autofocus @keydown.enter.prevent="addtenant"  />
        </q-card-section>
        <q-card-section  class="q-gutter-sm">
      <q-radio v-model="type" val="user" label="User" />
      <q-radio v-model="type" val="organization" label="Organization" />
        </q-card-section>
        <q-card-actions align="right" class="text-primary">
          <q-btn no-caps flat label="Cancel" v-close-popup />
          <q-btn no-caps flat type="submit" @click="addtenant" label="Add" v-close-popup />
        </q-card-actions>
      </q-card>
    </q-dialog>
  </div>
</template>
<script lang="ts">
  import Vue from 'vue';
  import { mapActions, mapGetters } from 'vuex';
  import TenantsTile from 'components/groups/TenantsTile.vue';
  import State from 'components/common/State.vue';
  import PublicOrganizationTile from 'components/public/PublicOrganizationTile.vue';
  export default Vue.extend({
    name: 'groupTenants',
    components: { State, TenantsTile, PublicOrganizationTile },
    data() {
      return {
      inputDialog: false,
      tenantName: null,
      type: null
      };
    },
    created() {
      this.getGroups({
        scope: 'account'
      })
    },
    computed: {
      ...mapGetters('GroupsModule', ['group', 'status']),
    },
    methods: {
      ...mapActions('GroupsModule', ['addTenant', 'getGroups']),
      addtenant(){
        this.inputDialog = false
        this.addTenant({
          groupId: this.$route.params.groupName,
          name: 'this.groupName',
          scope: 'account'
        }).then(response => {
          console.log(response.data)
        }).catch(error => {
          console.log(error)
        })
      }
    }

  });
</script>
<style lang="css" scoped>

</style>
