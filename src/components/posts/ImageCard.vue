<template>
    <div>
      <div class="q-pl-md">
        <p class="text-h4 text-grey-8">{{post.title}}</p>
        <p class="text-body1 text-grey-8">{{post.description}}</p>
      </div>
      <PostImageMedia :content="post.content">
        <!--<div v-if="post.title" class="absolute-top bg-transparent text-center">
          <span class="text-h4 text-primary text-weight-bolder text-shadow">{{post.title}}</span>
        </div>-->
      </PostImageMedia>

    </div>
</template>
<script lang="ts">
  import Vue from 'vue';
  import PostImageMedia from 'components/common/media/PostImageMedia.vue';

  export default Vue.extend({
    name: 'ImageCard',
    props: {
      post: {
        type: Object
      }
    },
    components: { PostImageMedia },
  });
</script>
