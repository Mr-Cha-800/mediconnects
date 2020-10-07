<template>
  <q-layout view="hHh Lpr lFf">
    <Header/>
    <div class="row">
      <div class="col-12 col-md-8 offset-md-2 col-lg-6 offset-lg-3">
        <q-page-container>
          <router-view/>
        </q-page-container>
      </div>
    </div>
    <Footer v-if="!$route.meta.noFooter"/>
  </q-layout>
</template>

<script lang="ts">
  import Header from 'layouts/Header.vue';
  import Footer from 'layouts/Footer.vue';

  import Vue from 'vue';

  export default Vue.extend({
    name: 'MainLayout',
    components: { Header, Footer },
  });
</script>
