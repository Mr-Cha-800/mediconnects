<template>
  <div class="q-pa-md">
    <div class="q-gutter-md flex fit justify-center items-center">
      <q-icon name="error" color="negative" size="3rem"></q-icon>
      <span class="text-red-8 text-h6 text-center"><slot /></span>
    </div>
    <div class="q-gutter-md flex fit justify-center items-center q-mt-md">
      <q-btn flat size="lg" @click="() => $router.back()" class="text-center text-body2 text-primary">Go Back</q-btn>
    </div>
  </div>
</template>

<script>

  export default {
    name: 'ErrorState',
  };
</script>

<style lang="scss" scoped>
</style>
