<template>
  <div>
    <q-item>
      <q-item-section avatar>
        <q-avatar size="10rem">
          <img src="https://media-exp1.licdn.com/dms/image/C4E0BAQHs3bgORiiaLA/company-logo_200_200/0?e=1609977600&v=beta&t=LhUuZWZobwM8ORch_kJvTnk5oPr5jyDVhaRfEVMlDa4">
        </q-avatar>
      </q-item-section>
      <q-item-section>
        <q-item-label>
          <span class="text-h5 text-primary">Siemens Gamesa</span>
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
      </q-item-section>
    </q-item>

    <q-item>
      <q-item-label caption>
          <span class="text-body1">
            Siemens Gamesa is a global technology leader in the renewable energy industry - specifically in the development, manufacturing, installation and maintenance of wind turbines. Being a pioneer in renewables since the 1980s, we put our scale and entrepreneurial culture to work on driving the energy transition towards a sustainable world. We empower our customers, people, and partners to lead the future with green energy.
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
    name: 'orgProfileHeader',
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
