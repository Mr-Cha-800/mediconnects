<template>
  <q-input dark dense standout v-model="search">
    <template v-slot:prepend>
      <q-icon v-if="search === ''" name="search" />
      <q-icon v-else name="clear" class="cursor-pointer" @click="search = ''" />
    </template>
  </q-input>
</template>

<script>

  export default {
    name: 'Search',
    data() {
      return {
        search: ''
      };
    }
  };
</script>

<style lang="scss" scoped>
</style>
