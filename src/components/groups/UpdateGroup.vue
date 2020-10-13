<template>
    <q-btn round flat color="primary" @click="modifyDialog = true" icon="create">
        <q-tooltip>Edit</q-tooltip>
    <q-dialog v-model="modifyDialog" persistent>
      <q-card style="min-width: 350px">
        <q-card-section>
          <div class="text-h6">Modify a group</div>
        </q-card-section>

        <q-card-section class="q-pt-none">
          <q-input dense v-model="newGroupName" autofocus @keyup.enter="updategroupp" />
        </q-card-section>

        <q-card-actions align="right" class="text-primary">
          <q-btn no-caps flat label="Cancel" v-close-popup />
          <q-btn no-caps flat @click="updategroupp" label="Update" v-close-popup />
        </q-card-actions>
      </q-card>
    </q-dialog>
    </q-btn>
</template>

<script lang="ts">
  import Vue from 'vue';
  import { mapActions, mapGetters } from 'vuex';
export default Vue.extend({
    name: 'updategroup',
    data(){
        return {
            modifyDialog: false,
            newGroupName: this.name
        }
    },
    props: {
      id: {
        type: String
      },
      name: {
        type: String
      }
    },
    methods: {
      ...mapActions('GroupsModule', ['updategroup']),
      updategroupp(){
        this.updategroup({
          id: this.id,
          name: this.newGroupName
        })
      },
    }
});
</script>

<style>

</style>