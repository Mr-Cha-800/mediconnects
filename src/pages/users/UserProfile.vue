<template>
  <State :status="userStatus" :empty="!user">
    <q-card flat>
      <NavBanner />
      <UserProfileHeader :profile="user" />
      <q-separator />
    </q-card>

    <div v-for="{ section } in user.sections" :key="section.id">
      <q-card flat square class="q-mt-md">
        <TextCard v-if="section.type === postingTypes.TEXT" :post="section"/>
        <ImageCard v-if="section.type === postingTypes.IMAGE" :post="section"/>
        <VideoCard v-if="section.type === postingTypes.VIDEO" :post="section"/>
        <AudioCard v-if="section.type === postingTypes.AUDIO" :post="section"/>
      </q-card>
    </div>
  </State>
</template>

<script lang="ts">
  import Vue from 'vue';
  import { mapActions, mapGetters } from 'vuex';
  import State from 'components/common/State.vue';
  import UserProfileHeader from 'components/profile/UserProfileHeader.vue';
  import { PostingTypesEnum } from 'src/store/posting/state';
  import ImageCard from 'components/posts/ImageCard.vue';
  import TextCard from 'components/posts/TextCard.vue';
  import VideoCard from 'components/posts/VideoCard.vue';
  import AudioCard from 'components/posts/AudioCard.vue';
  import { mapCacheActions } from 'vuex-cache';
  import NavBanner from 'components/common/NavBanner.vue';

  export default Vue.extend({
    name: 'UserProfile',
    components: { State, UserProfileHeader, TextCard, ImageCard, VideoCard, AudioCard, NavBanner },
    computed: {
      ...mapGetters('userProfileModule', ['user', 'userStatus']),
      postingTypes: () => PostingTypesEnum
    },
    methods: {
      ...mapCacheActions('userProfileModule', ['getUser']),
    },
    beforeMount() {
      const { $route: { params: {userId = ''} = {} } = {} } = this;
      if (userId) {
        this.getUser(userId);
      }
    }
  });
</script>

<style>

</style>
