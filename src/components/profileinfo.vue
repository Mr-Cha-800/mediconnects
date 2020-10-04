<template>
<div>
 <q-card class="my-card" flat>
      <q-item>
        <q-item-section avatar>
          <q-avatar style="width:100px;height:100px">
            <img src="https://cdn.quasar.dev/img/avatar2.jpg">
          </q-avatar>
        </q-item-section>
        <q-item-section>
          <q-item-label style="color:#009688">Kingsley R. Chin, M.D.</q-item-label>
          <q-item-label style="color:#009688" caption>CEO KICventures LLC</q-item-label>

          <q-rating
            v-model="ratingModel"
            size="1.5em"
            color="yellow-7"
            icon="star_border"
            icon-selected="star"
          />
            <q-item-label caption> <b>{{infoprofile.followers}}</b> Followers <b>{{infoprofile.following}}</b> Following <b>{{infoprofile.connections}}</b> Connections <b>{{infoprofile.posts}}</b> Posts </q-item-label>
            <q-item-label caption> <b>{{infoprofile.reviews}}</b> Reviews <b>{{infoprofile.helpful}}</b> Helpful <b>{{infoprofile.advice}}</b> Advice <b>{{infoprofile.reputation}}</b> Reputation </q-item-label>
        </q-item-section>
      </q-item>
      <q-item>
        <q-item-label caption>Connect to get CEO life success tolls and daily motivaitons. DR. Kingsley R. Chin is a Harvard graduate and the CEO of the KICVentures, a leading health and technology investment firm with a portfolio valued at over one billion - and a goal of five billion in five years.</q-item-label>
      </q-item>
      <q-item>
        <q-item-section >
          <skills/>
        </q-item-section>
        </q-item>
    </q-card>
    <div>

<profileactions/>

    </div>


</div>

</template>

<script>
import profileactions from 'components/profileactions.vue'
import skills from 'components/skills.vue'

import Vue from 'vue';
export default Vue.extend({
  name: 'profileinfo',
  components: { profileactions, skills  },
  data() {
    return {
        infoprofile:{
            followers: '10k',
            following: '2k',
            connections: '500+',
            posts: '515',
            reviews: '13',
            helpful: '1k',
            advice: '2k',
            reputation: '2177'
        },
        skill: null,
        prompt: false,
        Experience: true,
        ratingModel:3
    }
  },
  watch:{
    ratingModel: function () {
      //use this function to send to database
      this.$q.notify({
          progress: true,
          color: 'teal-6',
          textColor: 'white',
          icon: 'done',
          message: 'You rated : ' +  this.ratingModel + ' stars'
        })
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