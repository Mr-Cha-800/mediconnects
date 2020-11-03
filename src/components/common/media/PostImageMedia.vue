<template>
  <q-img :src="image.src" :srcset="image.srcset" height="100%">
    <slot />
  </q-img>
</template>

<script>
  import { postImageMediaObject } from 'src/helpers/parseMediaOject';

  export default {
    name: 'PostImageMedia',
    props: {
      content: {
        type: Object,
        default: () => ({})
      },
    },
    computed: {
      image() {
        return postImageMediaObject(this.$props.content);
      },
    },
  };
</script>

<style lang="scss" scoped>
</style>
