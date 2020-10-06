<template>
  <q-page class="row items-center justify-evenly">
    <feedpost />
    <feedpost />
  </q-page>
</template>

<script lang="ts">
import Vue from 'vue';
import feedpost from 'components/feedpost.vue';

export default Vue.extend({
  name: 'PageIndex',
  components: { feedpost }
});
</script>
