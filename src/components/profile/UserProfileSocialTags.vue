<template>
  <span class="text-body1 text-weight-bold">{{count}} <span class="text-body2 q-pr-md"><slot/></span></span>
</template>
<script lang="ts">
  import Vue from 'vue';

  export default Vue.extend({
    name: 'UserProfileSocialTags',
    props: {
      count: {
        type: Number,
        required: true
      }
    }

  });
</script>
