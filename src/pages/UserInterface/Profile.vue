<template>
  <div class="bg-grey-4">
    <profileinfo/>
    </q-bar>
  </div>
</template>

<script>
import profileinfo from 'components/profileinfo.vue'
import Vue from 'vue';
export default Vue.extend({
  name: 'Profile',
  components: { profileinfo},
  data() {
    return {
        value: 'On'
    }
  }
});
</script>

<style>

</style>