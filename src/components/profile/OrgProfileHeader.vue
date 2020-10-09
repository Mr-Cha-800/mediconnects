<template>
  <div class="q-pa-sm">
    <q-item class="flex fit justify-start items-center">
      <div class="q-pr-lg q-pr-xl-md">
        <q-avatar size="8rem">
          <q-img :src="avatar" height="100%"/>
        </q-avatar>
      </div>
      <div class="self-center">
        <q-item-label>
          <span class="text-h5 text-primary">{{org.name}}</span>
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
      <q-item-label caption v-if="$props.public">
        <FollowConnect :type="entity" :entity="org.id" />
      </q-item-label>
    </q-item>
    <q-item class="row">
      <q-item-section class="col-12">
        <q-item-label caption>
          <UserProfileSocialTags :count="org.followers">Followers</UserProfileSocialTags>
          <UserProfileSocialTags :count="org.tenants">Tenants</UserProfileSocialTags>
        </q-item-label>
      </q-item-section>
    </q-item>

    <q-item>
      <q-item-label caption>
          <span class="text-body1">
            {{org.description}}
          </span>
      </q-item-label>
    </q-item>
  </div>
</template>
<script lang="ts">
  import Vue from 'vue';
  import UserProfileSocialTags from 'components/profile/UserProfileSocialTags.vue';
  import UserProfileSkillsTags from 'components/profile/UserProfileSkillsTags.vue';
  import { avatarMediaObject } from 'src/helpers/parseMediaOject';
  import FollowConnect from 'components/public/FollowConnect.vue';
  import { EntityTypes } from 'src/types';

  export default Vue.extend({
    name: 'orgProfileHeader',
    props: {
      org: {
        type: Object,
        default: () => ({})
      },
      public: {
        type: Boolean,
        default: () => false
      }
    },
    components: { UserProfileSocialTags, UserProfileSkillsTags, FollowConnect },
    computed: {
      avatar() {
        return avatarMediaObject(this.$props.org.avatar);
      },
      entity: () => EntityTypes.ORG,
    },
    data() {
      return {
        skill: null,
        prompt: false,
        Experience: true,
        ratingModel: 3
      };
    }

  });
</script>
