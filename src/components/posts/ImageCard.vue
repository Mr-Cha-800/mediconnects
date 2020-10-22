<template>
    <div>
      <div class="q-pa-md">
        <p class="text-h4 text-grey-8">{{post.title}}</p>
        <p class="text-body1 text-grey-8">{{post.description}}</p>
      </div>
      <q-img v-if="post" :src="postImage"/>
    </div>
</template>
<script lang="ts">
  import Vue from 'vue';
  import { postImageMediaObject } from 'src/helpers/parseMediaOject';

  export default Vue.extend({
    name: 'ImageCard',
    props: {
      post: {
        type: Object,
        default: () => ({})
      }
    },
    computed: {
      postImage(): string {
        return postImageMediaObject(this.$props.post.content);
      },
    }
  });
</script>
