<template>
  <div class="q-pa-sm">
    <q-item class="flex fit justify-start items-center">
      <div class="q-pr-lg q-pr-xl-md">
        <q-avatar size="15vh">
          <q-img :src="getAvatar" height="100%"/>
        </q-avatar>
      </div>
      <div class="self-center">
        <q-item-label>
          <span class="text-h5 text-primary">{{profile.firstName}} {{profile.lastName}}</span>
        </q-item-label>
        <q-item-label caption>
          <span class="text-h6 text-primary">{{profile.title}}</span>
        </q-item-label>
        <q-rating
          v-model="ratingModel"
          size="1.5em"
          color="yellow-7"
          icon="star_border"
          icon-selected="star"
          readonly
        />
      </div>
    </q-item>
    <q-item>
      <q-item-label caption>
        <FollowConnect :type="entity" :entity="profile.id" />
      </q-item-label>
    </q-item>
    <q-item class="row">
      <q-item-section class="col-12">
        <q-item-label caption>
          <UserProfileSocialTags :count="infoprofile.followers">Followers</UserProfileSocialTags>
          <UserProfileSocialTags :count="infoprofile.followers">Followers</UserProfileSocialTags>
          <UserProfileSocialTags :count="infoprofile.following">Following</UserProfileSocialTags>
          <UserProfileSocialTags :count="infoprofile.connections">Connections</UserProfileSocialTags>
          <UserProfileSocialTags :count="infoprofile.reviews">Reviews</UserProfileSocialTags>
        </q-item-label>
        <q-item-label caption>
          <UserProfileSocialTags :count="infoprofile.posts">Posts</UserProfileSocialTags>
          <UserProfileSocialTags :count="infoprofile.helpful">Helpful</UserProfileSocialTags>
          <UserProfileSocialTags :count="infoprofile.advice">Advice</UserProfileSocialTags>
          <UserProfileSocialTags :count="infoprofile.reputation">Reputation</UserProfileSocialTags>
        </q-item-label>
      </q-item-section>
    </q-item>
    <q-item>
      <q-item-label caption>
          <span class="text-body1">
            {{profile.description}}
          </span>
      </q-item-label>
    </q-item>

    <q-item>
      <q-item-section>
        <UserProfileSkillsTags/>
      </q-item-section>
    </q-item>
  </div>
</template>
<script lang="ts">
  import Vue from 'vue';
  import UserProfileSocialTags from 'components/profile/UserProfileSocialTags.vue';
  import UserProfileSkillsTags from 'components/profile/UserProfileSkillsTags.vue';
  import { mapGetters } from 'vuex';
  import FollowConnect from 'components/public/FollowConnect.vue';
  import { EntityTypes } from 'src/types';

  export default Vue.extend({
    name: 'UserProfileHeader',
    components: { UserProfileSocialTags, UserProfileSkillsTags, FollowConnect },
    computed: {
      ...mapGetters('userProfileModule', ['profile', 'getAvatar']),
      entity: () => EntityTypes.USER,
    },
    data() {
      return {
        infoprofile: {
          followers: 10000,
          following: 12000,
          connections: 1000,
          posts: 4000,
          reviews: 54000,
          helpful: 15000,
          advice: 16000,
          reputation: 100
        },
        skill: null,
        prompt: false,
        Experience: true,
        ratingModel: 3
      };
    }

  });
</script>
