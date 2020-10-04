<template>
  <q-input
  class="inputt screenlarge absolute-center bg-white"
  dense
  rounded
  borderless
  text-color="black"
  v-model="search"

  label="Search"  >
        <template v-slot:prepend>
          <q-icon name="search" />
        </template>
      </q-input>
</template>

<script>

import Vue from 'vue';

export default {
  name: 'MainLayout',
  data() {
    return {
      search: null
    }
  }
}
</script>

<style lang="stylus" scoped>
.q-input
  height 2.5em
  border-radius  25px
  padding 10px
  padding-right 10px
.centering
    top: 50%
    left: 350px
    transform: translate(-50%, -50%)

</style>
<style lang="scss" scoped>
@media screen and (max-width: 600px) {
    .screenlarge{
      left:160px;
    }
}
@media screen and (min-width: 600px)  and (max-width: 950px){
  .screenlarge{
        width:50%;
        top: 50%;
        transform: translate(-50%, -50%);

  }
}
@media screen and (min-width: 951px)  and (max-width: 2000px) {
  .screenlarge{
        width:50%;
        top: 50%;
        left: 350px;
        transform: translate(-50%, -50%);
  }

}
@media screen and (min-width: 2000px)  {
  .screenlarge{
        width:50%;
        top: 50%;
        left: 500px;
        transform: translate(-50%, -50%);
  }

}
</style>