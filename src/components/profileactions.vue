<template>
<q-card class="my-card" flat>
      <q-separator style="height:2px" />
      <q-bar class="row bg-white content" >
       <q-btn flat dense color="teal" style="width:100%" size="md" label="View Activity"></q-btn>
      </q-bar>
        <q-separator style="height:2px" />
      <q-input rounded class="q-pr-md q-pl-md q-pt-sm"  dense outlined v-model="post" style="width:90%; margin-left: auto; margin-right: auto"  label="Post to profile" />
      <q-bar class="bg-white content " style="width:100%; margin:auto" >
       <q-btn  flat color="grey-7" class="content"  > <q-icon style="padding-right:2px" name="videocam"/> Live </q-btn>
        <q-btn  flat color="grey-7" class="content"  ><q-icon style="padding-right:2px" name="photo"/>  Photos </q-btn>
        <q-btn  flat color="grey-7" class="content"  ><q-icon style="padding-right 2px" name="description"/>  Docs </q-btn>
        <q-btn  flat color="grey-7" class="content"  ><q-icon style="padding-right: 2 px" name="ondemand_video"/>  Video </q-btn>
        </q-bar>
        <q-separator style="height:2px" />
        <q-bar class="bg-white content" >
       <q-btn  flat dense color="teal" size="sm"  ><b>Education</b></q-btn>
         </q-bar>
    <q-bar class="bg-grey-4" style="height:15px"/>
</q-card>
</template>

<script>
import profileactions from 'components/profileactions.vue'

import Vue from 'vue';
export default Vue.extend({
  name: 'profileactions',
  components: { profileactions },
  data() {
    return {
        post: null
    }
  }
});
</script>
<style lang="scss" scoped>

@media screen and (max-width: 600px) {
    .my-card{
      width: 100%
    }
    .q-btn__wrapper {
      padding: 0px 0px;
    }
    .textsize{
      color:black;
    }
    .condtent{
      display: flex;
      justify-content: space-between;
      max-width: 400px;
      margin: 0 auto;
      font-size: 2px;
      background: #A0C5E8;
      padding: 25px 10px 6px 10px;
    }
    .content{
      display: flex;
      margin: auto;
      justify-content: space-between;
    }
  }
  @media screen and (min-width: 600px)  and (max-width: 950px){
    .my-card{
    margin: auto;
    width: 75%;
    }
    .textsize{
      font-size:14px;
      color:black;
    }
    .condtent{
      display: flex;
      justify-content: space-between;
      min-width: 400px;
      margin:  auto;
      background: #A0C5E8;
      padding: 25px 10px 6px 10px;
    }
    .content{
      display: flex;
      justify-content: space-between;
    }
  }
  @media screen and (min-width: 951px)  and (max-width: 2000px) {
     .my-card{
    margin: auto;
    width: 50%;
    }
    .textsize{
      font-size:14px;
      color:black;
    }

    .condtent{
      display: flex;
      justify-content: space-between;
      min-width: 400px;
      margin:  auto;
      background: #A0C5E8;
      padding: 25px 10px 6px 10px;
    }
    .content{
      display: flex;
      justify-content: space-between;
    }
  }
  @media screen and (min-width: 2000px)  {
    .screenlarge{
    }

  }

</style>