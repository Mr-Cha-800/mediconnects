<template>
<div>
 <q-bar class="bg-grey-2">
      <q-space />
     <q-toggle
      :false-value="`Off`"
      :label="`Public ${value}`"
      :true-value="`On`"
      left-label
      icon="local_cafe"
      color="blue-grey-8"
      v-model="value"
      style="color:#009688"
    />
    </q-bar>
    <feedpost/>

</div>

</template>

<script>
import feedpost from 'components/feedpost.vue'
import Vue from 'vue';
export default Vue.extend({
  name: 'Customizedfeeds',
  components: { feedpost },
  data() {
    return {
        value: 'On'
    }
  }
});
</script>

<style lang="scss" scoped>

</style>
