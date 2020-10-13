<template>
    <q-btn round flat color="red-5" @click="confirm = true" icon="delete">
        <q-tooltip>Delete</q-tooltip>
    <q-dialog v-model="confirm" persistent>
      <q-card>
        <q-card-section class="row items-center">
          <q-avatar icon="warning" color="red" text-color="white" />
          <span class="q-ml-sm">You really want to delete group.</span>
        </q-card-section>

        <q-card-actions align="right">
          <q-btn no-caps flat label="Cancel" color="primary" v-close-popup />
          <q-btn no-caps flat @click="deletegroupp" label="Delete" color="primary" v-close-popup />
        </q-card-actions>
      </q-card>
    </q-dialog>
    </q-btn>
</template>

<script lang="ts">
  import Vue from 'vue';
  import { mapActions, mapGetters } from 'vuex';
export default Vue.extend({
    name: 'DeleteGroup',
    data(){
        return {
            confirm: false
        }
    },
    props: {
      id: {
        type: String
      }
    },
    methods: {
      ...mapActions('GroupsModule', ['deletegroup']),
      deletegroupp(){
        this.deletegroup({
          id: this.id
        })
      }
    }

});
</script>

<style>

</style>