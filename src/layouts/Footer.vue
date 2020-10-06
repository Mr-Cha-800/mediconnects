<template>
  <div>
    <q-footer elevated class="bg-white text-primary md-hide row">
      <q-toolbar class="col-8 offset-2">
        <q-btn color="primary" class="full-width" :to="{name: 'AddPost'}" icon="add" no-caps label="Create post" size="md" />
      </q-toolbar>
    </q-footer>
    <q-page-sticky position="bottom-right" :offset="[18, 18]" class="md">
      <q-btn fab icon="add" color="primary" :to="{name: 'AddPost'}"/>
    </q-page-sticky>
  </div>
</template>

<script>
  export default {};
</script>

<style lang="scss">
</style>
