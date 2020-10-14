<template>
  <div class="q-pa-sm">
    <q-item class="flex fit justify-start items-center">
      <div class="q-pr-lg q-pr-xl-md">
        <q-avatar size="15vh">
          <q-img :src="avatar" height="100%"/>
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
    <q-item v-if="!isMyProfile">
      <q-item-label caption>
        <FollowConnect :type="entity" :entity="profile.id" />
      </q-item-label>
    </q-item>
    <q-item class="row" v-if="!isMyProfile">
      <q-item-section class="col-12">
        <q-item-label caption>
          <UserProfileSocialTags :count="profile.followers">Followers</UserProfileSocialTags>
          <UserProfileSocialTags :count="profile.following">Following</UserProfileSocialTags>
          <UserProfileSocialTags :count="profile.connections">Connections</UserProfileSocialTags>
          <UserProfileSocialTags :count="profile.organizations">Organizations</UserProfileSocialTags>
          <UserProfileSocialTags :count="profile.posts">Posts</UserProfileSocialTags>
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
        <UserProfileSections :user-sections="profile.sectionsGroups"/>
      </q-item-section>
    </q-item>
  </div>
</template>
<script lang="ts">
  import Vue from 'vue';
  import UserProfileSocialTags from 'components/profile/UserProfileSocialTags.vue';
  import { mapGetters } from 'vuex';
  import FollowConnect from 'components/public/FollowConnect.vue';
  import { EntityTypes } from 'src/types';
  import { avatarMediaObject } from 'src/helpers/parseMediaOject';
  import UserProfileSections from 'components/profile/UserProfileSections.vue';

  export default Vue.extend({
    name: 'UserProfileHeader',
    components: { UserProfileSocialTags, UserProfileSections, FollowConnect },
    props: {
      profile: {
        type: Object,
        default: (): Record<string, unknown> => ({})
      },
    },
    computed: {
      ...mapGetters('userProfileModule', ['isMe']),
      avatar(): string {
        return avatarMediaObject(this.$props.profile.avatar);
      },
      entity: (): EntityTypes => EntityTypes.USER,
      isMyProfile(): boolean {
        return this.isMe(this.$props.profile.id);
      }
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
