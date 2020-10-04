<template>
  <q-layout view="lHh Lpr lFf">

<Headerfile/>
    <q-page-container>
      <router-view />
    </q-page-container>
<Footerfile/>
  </q-layout>
</template>

<script lang="ts">
import Headerfile from 'layouts/Headerfile.vue'
import Footerfile from 'layouts/Footerfile.vue'

import Vue from 'vue';

export default Vue.extend({
  name: 'MainLayout',
  components: { Headerfile, Footerfile },
  data() {
    return {
    }
  }
});
</script>
