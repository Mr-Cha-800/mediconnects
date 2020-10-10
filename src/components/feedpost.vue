<template>
  <div class="q-mt-md">
    <q-card flat>
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
        <q-item-label class="text-body1">Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore non nemo amet
          molestias? At magni, soluta placeat maiores totam, dignissimos
        </q-item-label>
      </q-item>
      <img
        src="https://www.hopkinsmedicine.org/-/media/images/health/2_-treatment/surgical-care/methods-of-surgery-teaser.ashx">

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
    <q-bar class="bg-grey-4" style="height:15px">

    </q-bar>
    <q-card flat>
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
        <q-item-label class="text-body1">Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore non nemo amet
          molestias? At magni, soluta placeat maiores totam, dignissimos
        </q-item-label>
      </q-item>
      <img
        src="https://images.theconversation.com/files/142121/original/image-20161018-12454-11m0fyv.jpg?ixlib=rb-1.1.0&q=45&auto=format&w=1200&h=675.0&fit=crop">
      <q-bar class=" q-pt-md justify-between  text-body2 bg-white">
        <p>
          <q-icon color="red" name="favorite"/>
          250
        </p>
        <p>
          <q-icon color="grey" name="cancel"/>
          60 Comments
        </p>
        <p>
          <q-icon color="grey" name="mode_comment"/>
          1k Shares
        </p>
        <p>
          <q-icon color="grey" name="share"/>
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

  export default Vue.extend({
    name: 'feedpost',
    components: {},
    data() {
      return {
        agree: 1
      };
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
    }
  });
</script>
