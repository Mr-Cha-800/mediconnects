<template>
  <div class="q-mt-md">
    <q-card flat>
      <q-item :to="{name: 'UserProfile', params: { userId: post.createdBy.id}}" >
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
      <VideoCard v-if="post.type === postingTypes.VIDEO" :post="post"/>
      <AudioCard v-if="post.type === postingTypes.AUDIO" :post="post"/>

      <q-bar class="q-my-xs bg-white">
        <span class="text-grey-8 text-body1 q-mr-md">
          <q-icon color="red" class="" name="favorite"/>
          500
        </span>
        <span class="text-grey-8 text-body1 q-mr-md">
          <q-icon color="grey" class="" name="mode_comment"/>
          5 Comments
        </span>
        <span class="text-grey-8 text-body1 q-mr-md">
          <q-icon color="grey" class="" name="share"/>
          2 Shares
        </span>
      </q-bar>


      <q-separator/>
      <div class="flex q-py-xs">
        <div>
          <q-btn no-wrap no-caps size="sm" @click="agreer(4)" v-if="agree === 2" flat color="green">
            <q-icon class="q-pr-xs" name="check_circle"/>
            <span class="text-body2 q-pr-xs">Agreed</span>
          </q-btn>
          <q-btn no-wrap no-caps size="sm" @click="agreer(1)" v-if="agree === 1 || agree === 3 " flat color="grey-7">
            <q-icon class="q-pr-xs" name="check_circle"/>
            <span class="text-body2 q-pr-xs">Agree</span>
          </q-btn>
          <q-btn no-wrap no-caps size="sm" @click="agreer(2)" v-if="agree === 1 || agree === 2" flat color="grey-7">
            <q-icon class="q-pr-xs" name="cancel"/>
            <span class="text-body2 q-pr-xs">Disagree</span>
          </q-btn>
          <q-btn no-wrap no-caps size="sm" @click="agreer(4)" v-if="agree === 3" flat color="red">
            <q-icon class="q-pr-xs" name="cancel"/>
            <span class="text-body2 q-pr-xs">Disagreed</span>
          </q-btn>
        </div>
        <q-space />
        <div>
          <q-btn no-wrap no-caps size="sm" flat color="grey-7">
            <q-icon class="q-pr-xs" name="mode_comment"/>
            <span class="text-body2 q-pr-xs">Comment</span>
          </q-btn>
          <q-btn no-wrap no-caps size="sm" flat color="grey-7">
            <q-icon class="q-pr-xs" name="share"/>
            <span class="text-body2 q-pr-xs">Share</span>
          </q-btn>
        </div>
      </div>
    </q-card>
  </div>

</template>

<script>
  import Vue from 'vue';
  import { PostingTypesEnum } from 'src/store/posting/state';
  import formatDistanceToNow from 'date-fns/formatDistanceToNow'
  import ImageCard from 'components/posts/ImageCard.vue';
  import TextCard from 'components/posts/TextCard.vue';
  import VideoCard from 'components/posts/VideoCard.vue';
  import AudioCard from 'components/posts/AudioCard.vue';
  import { avatarMediaObject } from 'src/helpers/parseMediaOject';

  export default Vue.extend({
    name: 'feedpost',
    components: {ImageCard, TextCard, VideoCard, AudioCard },
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
