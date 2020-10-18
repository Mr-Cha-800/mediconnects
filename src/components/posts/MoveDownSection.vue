<template>
    <q-btn round flat color="primary" @click="moveDown" icon="keyboard_arrow_down">
        <q-tooltip>Move Down</q-tooltip>
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
      ...mapActions('postingModule', ['MoveDownSection']),
      moveDown(){
        this.MoveDownSection({
            id: this.id,
            weight: -1
        })
      }
    }
});
</script>

<style>

</style>