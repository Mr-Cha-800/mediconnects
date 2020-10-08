<template>
  <div id="q-app" class="bg-grey-4">
  <h1>hi</h1>
    <router-view />
  </div>
</template>
<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  name: 'App'
});
</script>
<style lang="scss" >
body {
  font-family: Sans-Serif;
}
</style>
