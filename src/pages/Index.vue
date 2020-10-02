<template>
  <q-page class="row items-center justify-evenly">
    <q-btn to="/auth/login" label="Login"></q-btn>
  </q-page>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  name: 'PageIndex',
});
</script>
