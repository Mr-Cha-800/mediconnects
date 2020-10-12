<template>
  <div>
    <q-footer elevated class="bg-white text-primary lt-md row">
      <q-toolbar class="col-8 offset-2">
        <q-btn color="primary" class="full-width" :to="{name: 'AddPost'}" icon="add" no-caps label="Create post" size="md" />
      </q-toolbar>
    </q-footer>
    <q-page-sticky position="bottom-right" :offset="[18, 18]" class="gt-sm">
      <q-btn fab icon="add" color="primary" :to="{name: 'AddPost'}"/>
    </q-page-sticky>
  </div>
</template>

<script>
  export default {
    name: 'Footer',
  };
</script>

<style lang="scss">
</style>
