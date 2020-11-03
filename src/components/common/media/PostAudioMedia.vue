<template>
  <q-media-player dense type="audio" :source="audio" background-color="primary">
    <slot />
  </q-media-player>
</template>

<script>
  import { audioMediaObject } from 'src/helpers/parseMediaOject';

  export default {
    name: 'PostAudioMedia',
    props: {
      content: {
        type: Object,
        default: () => ({})
      },
    },
    computed: {
      audio() {
        return audioMediaObject(this.$props.content);
      },
    },
  };
</script>

<style lang="scss" scoped>
</style>
