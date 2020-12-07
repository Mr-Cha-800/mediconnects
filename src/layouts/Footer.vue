<template>
  <div>
    <q-footer reveal elevated class="bg-white text-primary lt-md row" v-if="!postingStatus.loading">
      <q-toolbar class="col-8 offset-2">
        <q-btn color="primary" class="full-width" :to="{name: 'AddPost'}" icon="add" no-caps label="Create post" size="md" />
      </q-toolbar>
    </q-footer>
    <q-page-sticky position="bottom-right" :offset="[18, 18]" class="gt-sm" v-if="!postingStatus.loading">
      <q-btn fab icon="add" color="primary" :to="{name: 'AddPost'}"/>
    </q-page-sticky>

    <PostingState v-if="postingStatus.loading" />
  </div>

</template>

<script lang="ts">
  import { mapGetters } from 'vuex';
  import PostingState from 'components/common/PostingState.vue';

  export default {
    name: 'Footer',
    components: { PostingState },
    computed: {
     ...mapGetters('postingModule', ['postingStatus']),
    },
  };
</script>

<style lang="scss">
</style>
