<template>
  <div>
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
    <feedpost/>
    <feedpost/>
    <feedpost/>
  </div>
</template>

<script lang="ts">
  import Vue from 'vue';
  import feedpost from 'components/feedpost.vue';

  export default Vue.extend({
    name: 'FeedIndex',
    components: {feedpost},
    data() {
      return {
        publicFeed: 'ON',
      }
    }
  });
</script>

<style>

</style>
