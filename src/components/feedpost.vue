<template>
<div >
    <q-bar class="bg-grey-4" style="height:15px">

    </q-bar>
    <q-card class="my-card" flat >
      <q-item>
        <q-item-section avatar>
          <q-avatar>
            <img src="https://cdn.quasar.dev/img/avatar2.jpg">
          </q-avatar>
        </q-item-section>
        <q-item-section>
          <q-item-label>Jonathan Stell</q-item-label>
          <q-item-label caption>Recruiting team leader</q-item-label>
          <q-item-label caption>7 hours ago</q-item-label>
        </q-item-section>

      </q-item>
        <q-item>
          <q-item-label class="textsize"  caption>Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore non nemo amet molestias? At magni, soluta placeat maiores totam, dignissimos</q-item-label>
        </q-item>
      <img src="https://www.hopkinsmedicine.org/-/media/images/health/2_-treatment/surgical-care/methods-of-surgery-teaser.ashx">
        <q-bar class="bg-white q-pa-md condtent" >
        <p style="font-size:12px">  <q-icon size="xs" color="red" name="favorite" /> 500</p>
        <p style="font-size:12px"> <q-icon size="xs" color="grey" name="cancel" /> 5 Comments</p>
        <p style="font-size:12px"><q-icon size="xs" color="grey" name="mode_comment" /> 2 Shares </q-btn></p>
        <p style="font-size:12px"><q-icon size="xs" color="grey" name="share" />1.2k Views </p>
        </q-bar>
      <q-separator />
        <q-bar class="bg-white content" >
        <q-btn @click="agreer(4)" v-if="agree === 2" flat color="green" class="content" > <q-icon style="padding-right:4px" name="check_circle"/> Agreed </q-btn>
        <q-btn @click="agreer(1)" v-if="agree === 1 || agree === 3 " flat color="grey-7" class="content"><q-icon style="padding-right:4px" name="check_circle"/>  Agree </q-btn>
        <q-btn @click="agreer(2)" v-if="agree === 1 || agree === 2" flat color="grey-7" class="content"  ><q-icon style="padding-right:4px" name="cancel"/>  Disagree </q-btn>
        <q-btn @click="agreer(4)" v-if="agree === 3" flat color="red" class="content" ><q-icon style="padding-right:4px" name="cancel"/>  Disagreed </q-btn>
        <q-btn  flat color="grey-7" class="content"  > <q-icon style="padding-right:4px" name="mode_comment"/> Comment </q-btn>
        <q-btn  flat color="grey-7" class="content"  ><q-icon style="padding-right:4px" name="share"/>  Share </q-btn>
        </q-bar>
    </q-card>
    <q-bar class="bg-grey-4" style="height:15px">

    </q-bar>
    <q-card class="my-card" flat>
      <q-item>
        <q-item-section avatar>
          <q-avatar>
            <img src="https://cdn.quasar.dev/img/avatar2.jpg">
          </q-avatar>
        </q-item-section>
        <q-item-section>
          <q-item-label>Jonathan Stell</q-item-label>
          <q-item-label caption>Recruiting team leader</q-item-label>
          <q-item-label caption>7 hours ago</q-item-label>
        </q-item-section>

      </q-item>
        <q-item>
          <q-item-label style="font-size:14px;color:black;"  caption>Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore non nemo amet molestias? At magni, soluta placeat maiores totam, dignissimos</q-item-label>
        </q-item>
      <img src="https://images.theconversation.com/files/142121/original/image-20161018-12454-11m0fyv.jpg?ixlib=rb-1.1.0&q=45&auto=format&w=1200&h=675.0&fit=crop">
        <q-bar class="bg-white condtent" >
        <p style="font-size:12px">  <q-icon size="xs" color="red" name="favorite" /> 250</p>
        <p style="font-size:12px"> <q-icon size="xs" color="grey" name="cancel" /> 60 Comments</p>
        <p style="font-size:12px"><q-icon size="xs" color="grey" name="mode_comment" /> 1k Shares </p>
        <p style="font-size:12px"><q-icon size="xs" color="grey" name="share" />1.2k Views </p>
        </q-bar>
      <q-separator />
        <q-bar class="bg-white content" >
        <q-btn @click="agreer(4)" v-if="agree === 2" flat color="green" class="content" > <q-icon style="padding-right:4px" name="check_circle"/> Agreed </q-btn>
        <q-btn @click="agreer(1)" v-if="agree === 1 || agree === 3 " flat color="grey-7" class="content"><q-icon style="padding-right:4px" name="check_circle"/>  Agree </q-btn>
        <q-btn @click="agreer(2)" v-if="agree === 1 || agree === 2" flat color="grey-7" class="content"  ><q-icon style="padding-right:4px" name="cancel"/>  Disagree </q-btn>
        <q-btn @click="agreer(4)" v-if="agree === 3" flat color="red" class="content" ><q-icon style="padding-right:4px" name="cancel"/>  Disagreed </q-btn>
        <q-btn  flat color="grey-7" class="content"  > <q-icon style="padding-right:4px" name="mode_comment"/> Comment </q-btn>
        <q-btn  flat color="grey-7" class="content"  ><q-icon style="padding-right:4px" name="share"/>  Share </q-btn>
        </q-bar>

    <q-bar class="bg-grey-4" style="height:15px">

    </q-bar>
    </q-card>
</div>

</template>

<script>
import Vue from 'vue';
export default Vue.extend({
  name: 'feedpost',
  components: {  },
  data() {
    return {
        agree: 1
    }
  },
  methods:{
      agreer(val){
          if(val === 4 ){
              this.agree = 1
          }
          if(val === 1 ){
              this.agree = 2
          }else if(val === 2) {
              this.agree = 3
          }
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
      max-width: 400px;
      font-size: 8.5px;
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
      padding: 25px 50px 6px 50px;
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