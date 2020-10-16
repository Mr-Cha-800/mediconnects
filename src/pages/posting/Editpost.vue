<template>
  <q-card flat>
    <div class="row">
      <div class="col-12">
        <PostEditFrom/>
      </div>
    </div>
  </q-card>

</template>

<script lang="ts">
  import Vue from 'vue';
  import PostEditFrom from 'components/posting/PostEditFrom.vue';

  export default Vue.extend({
    name: 'EditPost',
    components: { PostEditFrom },
  });
</script>

<style>

</style>
