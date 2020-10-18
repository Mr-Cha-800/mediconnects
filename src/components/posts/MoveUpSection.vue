<template>
    <q-btn round flat color="primary" @click="moveUp" icon="keyboard_arrow_up">
        <q-tooltip>Move Up</q-tooltip>
    </q-btn>
</template>

<script lang="ts">
  import Vue from 'vue';
  import { mapActions } from 'vuex';
export default Vue.extend({
    name: 'DeleteSection',
    props: {
      id: {
        type: String
      }
    },
    methods: {
      ...mapActions('postingModule', ['MoveUpSection']),
      moveUp(){
        this.MoveUpSection({
            id: this.id,
            weight: -1
        })
      }
    }
});
</script>

<style>

</style>