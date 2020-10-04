<template>
  <q-layout view="lHh Lpr lFf">
    <Header/>
    <div class="row bg-grey-4">
      <div class="col-12 col-md-8 offset-md-2 col-lg-6 offset-lg-3">
        <q-page-container>
          <router-view/>
        </q-page-container>
      </div>
    </div>
    <Footer/>
  </q-layout>
</template>

<script lang="ts">
  import Header from 'layouts/Header.vue';
  import Footer from 'layouts/Footer.vue';

  import Vue from 'vue';

  export default Vue.extend({
    name: 'MainLayout',
    components: { Header, Footer },
    data() {
      return {};
    }
  });
</script>
