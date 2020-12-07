<template >
  <q-card class="q-my-md q-py-md" flat>
    <div class="row">
      <div class="col-12">
        <PostingForm :type="this.$route.params.type" />
      </div>
    </div>
  </q-card>

</template>

<script lang="ts">
  import Vue from 'vue';
  import PostingForm from 'components/posting/PostingForm.vue';

  export default Vue.extend({
    name: 'AddPost',
    components: { PostingForm }
  });
</script>

<style>

</style>
