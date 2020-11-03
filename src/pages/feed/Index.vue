<template>
  <div>
    <State :status="status" :empty="!posts.length">
      <q-bar class="bg-grey-2">
        <q-space/>
        <q-toggle
          false-value="OFF"
          :label="`Public ${publicFeed}`"
          true-value="ON"
          left-label
          icon="local_cafe"
          color="blue-grey-8"
          v-model="publicFeed"
        />
      </q-bar>
      <q-list bordered>
        <template v-for="post in posts">
          <feedpost :post="post"/>
          <q-separator/>
        </template>
      </q-list>
    </State>
  </div>
</template>

<script lang="ts">
  import Vue from 'vue';
  import feedpost from 'components/feedPosts/feedpost.vue';
  import { mapGetters, mapActions } from 'vuex';
  import State from 'components/common/State.vue';

  export default Vue.extend({
    name: 'FeedIndex',
    components: { feedpost, State },
    data() {
      return {
        publicFeed: 'ON'
      };
    },
    computed: {
      ...mapGetters('feedPostsModule', ['posts', 'status'])
    },
    methods: {
      ...mapActions('feedPostsModule', ['getPosts'])
    },
    created() {
      this.getPosts();
    }
  });
</script>

<style>

</style>
