<template>
  <span class="text-body1 text-weight-bold">{{formattedCount}} <span class="text-body2 q-pr-md"><slot/></span></span>
</template>
<script lang="ts">
  import Vue from 'vue';

  export default Vue.extend({
    name: 'UserProfileSocialTags',
    props: {
      count: {
        type: Number,
        required: false
      }
    },
    computed: {
      formattedCount(): string {
        const num = this.$props.count || 0;
        return num > 999 ?
          `${(num / 1000).toFixed(1)}k` :
          num.toString();
      }
    }

  });
</script>
