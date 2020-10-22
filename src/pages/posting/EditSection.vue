<template>
  <q-card flat>
    <div class="row">
      <div class="col-12">
        <SectionEditFrom />
      </div>
    </div>
  </q-card>

</template>

<script lang="ts">
  import Vue from 'vue';
  import { mapActions, mapGetters } from 'vuex';
  import SectionEditFrom from 'components/posting/SectionEditFrom.vue';

  export default Vue.extend({
    name: 'EditPost',
    components: { SectionEditFrom }
  });
</script>

<style>

</style>
