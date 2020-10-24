<template>
    <div>
      <div class="q-pa-md">
        <p class="text-body1 text-grey-8">{{post.description}}</p>
      </div>
      <q-img v-if="post" :src="postImage">
        <div v-if="post.title" class="absolute-top text-subtitle2 text-center bg-grey-5" style="opacity: 0.8">
          <span class="text-h3">{{post.title}}</span>
        </div>
      </q-img>
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
