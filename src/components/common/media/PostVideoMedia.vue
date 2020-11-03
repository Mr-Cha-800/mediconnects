<template>
  <q-media-player type="video" :source="video" style="margin: 30px 0 0 0;">
    <template v-slot:overlay>
      <slot />
    </template>
  </q-media-player>
</template>

<script>
  import { videoMediaObject } from 'src/helpers/parseMediaOject';

  export default {
    name: 'PostVideoMedia',
    props: {
      content: {
        type: Object,
        default: () => ({})
      },
    },
    computed: {
      video() {
        return videoMediaObject(this.$props.content);
      },
    },
  };
</script>

<style lang="scss" scoped>
</style>
