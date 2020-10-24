<template>
  <div class="q-mt-md">
    <q-card flat>
      <q-item>
        <q-item-section avatar>
          <q-avatar>
            <!-- THIS didn't work
          <q-img :src="post.createdBy.avatar" height="100%"/>
            -->
            <img src="https://cdn.quasar.dev/img/avatar2.jpg">
          </q-avatar>
        </q-item-section>
        <q-item-section>
          <q-item-label>{{post.createdBy.firstName}} {{post.createdBy.lastName}}</q-item-label>
          <q-item-label caption>{{post.createdBy.title}}</q-item-label>
          <q-item-label caption>{{todaysDate}}</q-item-label>
        </q-item-section>
      </q-item>
      <TextCard v-if="post.type === postingTypes.TEXT" :post="post"/>
      <ImageCard v-if="post.type === postingTypes.IMAGE" :post="post"/>

      <q-bar class="q-pt-md justify-between  text-body2 bg-white">
        <p>
          <q-icon color="red" class="" name="favorite"/>
          500
        </p>
        <p>
          <q-icon color="grey" class="" name="cancel"/>
          5 Comments
        </p>
        <p>
          <q-icon color="grey" class="" name="mode_comment"/>
          2 Shares </p>
        <p>
          <q-icon color="grey" class="" name="share"/>
          1.2k Views
        </p>
      </q-bar>


      <q-separator/>
      <q-bar class="bg-white justify-center centers q-pr-md q-pl-md">
        <q-btn no-wrap no-caps size="sm" @click="agreer(4)" v-if="agree === 2" flat color="green">
          <q-icon class="q-pr-xs" name="check_circle"/>
          Agreed
        </q-btn>
        <q-btn no-wrap no-caps size="sm" @click="agreer(1)" v-if="agree === 1 || agree === 3 " flat color="grey-7">
          <q-icon class="q-pr-xs" name="check_circle"/>
          Agree
        </q-btn>
        <q-btn no-wrap no-caps size="sm" @click="agreer(2)" v-if="agree === 1 || agree === 2" flat color="grey-7">
          <q-icon class="q-pr-xs" name="cancel"/>
          Disagree
        </q-btn>
        <q-btn no-wrap no-caps size="sm" @click="agreer(4)" v-if="agree === 3" flat color="red">
          <q-icon class="q-pr-xs" name="cancel"/>
          Disagreed
        </q-btn>
        <q-btn no-wrap no-caps size="sm" flat color="grey-7">
          <q-icon class="q-pr-xs" name="mode_comment"/>
          Comment
        </q-btn>
        <q-btn no-wrap no-caps size="sm" flat color="grey-7">
          <q-icon class="q-pr-xs" name="share"/>
          Share
        </q-btn>
      </q-bar>
    </q-card>
  </div>

</template>

<script>
  import Vue from 'vue';
  import { PostingTypesEnum } from 'src/store/posting/state';
  import { date } from 'quasar'
  import ImageCard from 'components/posts/ImageCard.vue';
  import TextCard from 'components/posts/TextCard.vue';

  export default Vue.extend({
    name: 'feedpost',
    components: {ImageCard, TextCard },
    data() {
      return {
        agree: 1
      };
    },
    props: {
      post: {
        type: Object,
        default: () => ({})
      }
    },
    methods: {
      agreer(val) {
        if (val === 4) {
          this.agree = 1;
        }
        if (val === 1) {
          this.agree = 2;
        } else if (val === 2) {
          this.agree = 3;
        }
      }
    },
  computed: {
    postingTypes: () => PostingTypesEnum,
    todaysDate () {
      // to calculate time difference for each post , working perfectly !
      const date1 = Date.now()
      let unit = 'day'
      let unithour = 'hours'
      let unitminute = 'minutes'
      let unitsecond = 'seconds'
      if (date.isSameDate(date1, this.post.timestamp,'minute')) {
      let diff = date.getDateDiff(date1, this.post.timestamp, unitsecond)
        return diff + ' Seconds ago'
      }
      else if (date.isSameDate(date1, this.post.timestamp,'hour')) {
      let diff = date.getDateDiff(date1, this.post.timestamp, unitminute)
        return diff + ' Minutes ago'
      }
      else if (date.isSameDate(date1, this.post.timestamp,unit)) {
      let diff = date.getDateDiff(date1, this.post.timestamp, unithour)
        return diff + ' Hours ago'
      }else{
        return date.formatDate(this.post.timestamp, 'dddd D MMMM')
      }
    }
  }
  });
</script>
