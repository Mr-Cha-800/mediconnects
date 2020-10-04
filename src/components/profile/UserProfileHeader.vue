<template>
  <div>
    <q-item>
      <q-item-section avatar>
        <q-avatar size="10rem">
          <img src="https://cdn.quasar.dev/img/avatar2.jpg">
        </q-avatar>
      </q-item-section>
      <q-item-section>
        <q-item-label>
          <span class="text-h5 text-primary">Kingsley R. Chin, M.D.</span>
        </q-item-label>
        <q-item-label caption>
          <span class="text-h6 text-primary">CEO KICventures LLC</span>
        </q-item-label>

        <q-rating
          v-model="ratingModel"
          size="1.5em"
          color="yellow-7"
          icon="star_border"
          icon-selected="star"
          class="q-pb-md"
        />
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
            Connect to get CEO life success tolls and daily motivaitons. DR. Kingsley R. Chin is a
          Harvard graduate and the CEO of the KICVentures, a leading health and technology investment firm with a
            portfolio valued at over one billion - and a goal of five billion in five years.
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

  export default Vue.extend({
    name: 'UserProfileHeader',
    components: { UserProfileSocialTags, UserProfileSkillsTags },
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
