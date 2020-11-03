<template>
  <div>
    <div class="q-pl-md">
      <p class="text-h4 text-grey-8">{{post.title}}</p>
      <p class="text-body1 text-grey-8">{{post.description}}</p>
    </div>
    <PostVideoMedia :content="post.content">
      <!--<div v-if="post.title" class="absolute-top bg-transparent text-center q-pt-md">
        <span class="text-h4 text-primary text-weight-bolder text-shadow">{{post.title}}</span>
      </div>-->
    </PostVideoMedia>
  </div>
</template>
<script lang="ts">
  import Vue from 'vue';
  import PostVideoMedia from 'components/common/media/PostVideoMedia.vue';
  export default Vue.extend({
    name: 'VideoCard',
    components: { PostVideoMedia },
    props: {
      post: {
        type: Object
      }
    }
  });
</script>
