<template>
  <div>
    <div class="q-pl-md">
      <p class="text-h4 text-grey-8">{{post.title}}</p>
      <p class="text-body1 text-grey-8">{{post.description}}</p>
    </div>
    <PostAudioMedia :content="post.content" />
  </div>
</template>
<script lang="ts">
  import Vue from 'vue';
  import PostAudioMedia from 'components/common/media/PostAudioMedia.vue';
  export default Vue.extend({
    name: 'AudioCard',
    components: { PostAudioMedia },
    props: {
      post: {
        type: Object
      }
    }
  });
</script>
