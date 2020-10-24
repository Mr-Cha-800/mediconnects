<template>
  <div class="q-pa-md">
    <p class="text-h4 text-grey-8">{{post.title}}</p>
    <p class="text-body1 text-grey-8">{{post.description}}</p>
  </div>
</template>
<script lang="ts">
  import Vue from 'vue';
  export default Vue.extend({
    name: 'TextCard',
    props: {
      post: {
        type: Object
      }
    }
  });
</script>
