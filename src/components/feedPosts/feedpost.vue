<template>
  <div class="q-mt-md">
    <q-card flat>
      <q-item>
        <q-item-section avatar>
          <q-avatar>
            <q-img :src="propAvatar" height="100%"/>
          </q-avatar>
        </q-item-section>
        <q-item-section>
          <q-item-label>{{post.createdBy.firstName}} {{post.createdBy.lastName}}</q-item-label>
          <q-item-label caption>{{post.createdBy.title}}</q-item-label>
          <q-item-label caption>{{formatDate(post.timestamp)}}</q-item-label>
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
  import formatDistanceToNow from 'date-fns/formatDistanceToNow'
  import ImageCard from 'components/posts/ImageCard.vue';
  import TextCard from 'components/posts/TextCard.vue';
  import { avatarMediaObject } from 'src/helpers/parseMediaOject';

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
      },
      formatDate(stringDate) {
        return formatDistanceToNow(new Date(stringDate), { addSuffix: true });
      },
    },
  computed: {
    propAvatar() {
      return avatarMediaObject(this.$props.post.createdBy.avatar);
    },
    postingTypes: () => PostingTypesEnum,
  }
  });
</script>
