<template>
  <q-banner dense inline-actions class="text-white bg-transparent">
    <q-btn flat dense color="primary" @click="goBack()" icon="arrow_back" />
    <template v-slot:action>
      <slot />
    </template>
  </q-banner>
</template>

<script>

  export default {
    name: 'NavBanner',
    props: {
      pathName: String
    },
    methods: {
      goBack() {
        return this.$props.pathName ? this.$router.push({name: this.$props.pathName}) : this.$router.back();
      }
    },
  };
</script>

<style lang="scss" scoped>
</style>
