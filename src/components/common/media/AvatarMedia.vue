<template>
  <q-img :src="avatar" height="100%"/>
</template>

<script>
  import { avatarMediaObject } from 'src/helpers/parseMediaOject';

  export default {
    name: 'AvatarMedia',
    props: {
      content: {
        type: Object,
        default: () => ({})
      },
    },
    computed: {
      avatar() {
        return avatarMediaObject(this.$props.content);
      },
    },
  };
</script>

<style lang="scss" scoped>
</style>
