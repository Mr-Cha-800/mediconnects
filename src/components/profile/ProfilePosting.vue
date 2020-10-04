<template>
  <div class="row q-py-md">
    <div class="col-xs-12 col-md-8 offset-md-2 col-lg-6 offset-lg-3">
      <div class="flex column">
        <q-input rounded class="q-pr-md q-pl-md q-pt-sm"  dense outlined placeholder="Post to profile" />
        <q-bar class="bg-white content flex fit row justify-center q-py-sm">
          <q-btn flat color="grey-7" class="content"> <q-icon name="videocam" class="q-mr-xs"/>Live </q-btn>
          <q-btn flat color="grey-7" class="content"><q-icon name="photo" class="q-mr-xs"/>Photos </q-btn>
          <q-btn flat color="grey-7" class="content"><q-icon name="description" class="q-mr-xs"/>Docs </q-btn>
          <q-btn flat color="grey-7" class="content"><q-icon name="ondemand_video" class="q-mr-xs"/>Video </q-btn>
        </q-bar>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
  import Vue from 'vue';

  export default Vue.extend({
    name: 'ProfilePosting',
  });
</script>
