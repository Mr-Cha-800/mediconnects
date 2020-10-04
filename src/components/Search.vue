<template>
  <q-input
    class="bg-white"
    dense
    rounded
    borderless
    text-color="black"
    v-model="search"

    placeholder="Search">
    <template v-slot:prepend>
      <q-icon name="search"/>
    </template>
  </q-input>
</template>

<script>

  export default {
    name: 'MainLayout',
    data() {
      return {
        search: null
      };
    }
  };
</script>

<style lang="scss" scoped>
  .q-input {
    height: 2.5em;
    width: 100%;
    border-radius: 1.5rem;
    padding: .5rem;
  }
</style>
