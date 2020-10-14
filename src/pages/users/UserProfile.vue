<template>
  <State :status="userStatus" :empty="!user">
    <q-card flat>
        <template>
          <UserProfileHeader :profile="user" />
          <q-separator />
          <q-btn flat color="primary" class="full-width" size="md" label="View Activity"></q-btn>
        </template>

    </q-card>

    <div v-for="{ section } in user.sections">
      <q-card flat square class="q-mt-md">
        <TextCard v-if="section.type === postingTypes.TEXT" :post="section"/>
        <ImageCard v-if="section.type === postingTypes.IMAGE" :post="section"/>
        <div class="absolute-right">
          <q-btn flat round color="primary" icon="keyboard_arrow_up"/>
          <q-btn flat round color="primary" icon="edit"/>
          <q-btn flat round color="primary" icon="keyboard_arrow_down"/>
        </div>
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

  export default Vue.extend({
    name: 'UserProfile',
    components: { State, UserProfileHeader, TextCard, ImageCard },
    computed: {
      ...mapGetters('userProfileModule', ['user', 'userStatus']),
      postingTypes: () => PostingTypesEnum
    },
    methods: {
      ...mapActions('userProfileModule', ['getUser']),
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
