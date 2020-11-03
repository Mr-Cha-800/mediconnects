<template>
  <q-banner inline-actions class="text-white bg-red">
    <slot />
    <template v-slot:action>
      <q-btn flat color="white" @click="goBackHome()" label="Back Home" />
    </template>
  </q-banner>
</template>

<script>

  export default {
    name: 'ErrorState',
    methods: {
      goBackHome() {
        this.$store.reset();
        return this.$router.push({name: 'home'});
      }
    },
  };
</script>

<style lang="scss" scoped>
</style>
