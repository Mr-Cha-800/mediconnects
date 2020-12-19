<template>
  <State :status="userStatus" :empty="!user">
    <q-card flat>
      <NavBanner />
      <UserProfileHeader :profile="user" />
      <q-separator />
    </q-card>

    <div >
      <q-list bordered>
        <template v-for="section in user.sections" >
          <feedpost :key="section.id" :post="section"/>
        </template>
      </q-list>
    </div>
  </State>
</template>

<script lang="ts">
  import Vue from 'vue';
  import { mapGetters } from 'vuex';
  import State from 'components/common/State.vue';
  import UserProfileHeader from 'components/profile/UserProfileHeader.vue';
  import { PostingTypesEnum } from 'src/store/posting/state';
  import ImageCard from 'components/posts/ImageCard.vue';
  import TextCard from 'components/posts/TextCard.vue';
  import VideoCard from 'components/posts/VideoCard.vue';
  import AudioCard from 'components/posts/AudioCard.vue';
  import { mapCacheActions } from 'vuex-cache';
  import NavBanner from 'components/common/NavBanner.vue';
  import feedpost from 'components/profile/ProfileSectionPost.vue';

  export default Vue.extend({
    name: 'UserProfile',
    components: { State, UserProfileHeader, TextCard, ImageCard, VideoCard, AudioCard, NavBanner,feedpost },
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
