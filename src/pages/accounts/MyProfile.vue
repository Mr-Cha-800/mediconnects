<template>
  <div>
    <State :empty="!profile" :status="status">
      <q-card flat>
        <NavBanner>
          <q-btn flat color="primary" @click="$router.push({name: 'MyProfileUpdate'})" icon="edit" />
        </NavBanner>
        <UserProfileHeader :profile="profile"/>
        <q-separator/>
        <q-btn flat color="primary" class="full-width" size="md" :icon="!viewActivity?'expand_more':'expand_less'" :label="!viewActivity ? 'View Activity' : 'Hide Activity'" @click="viewActivity =! viewActivity"></q-btn>
        <q-separator/>
        <div class="row q-py-lg items-center justify-center">
          <q-btn to="/post/profile" style="width:22rem"  color="primary" label="Post To Profile"  route="/posts/profile"/>
        </div>
        <State v-if="viewActivity" :status="status" :empty="!getSections.length">
            <div>
              <q-list bordered>
                <template v-for="post in userPosts">
                  <feedpost :key="post.id" :post="post"/>
                </template>
              </q-list>
            </div>
        </State>
      </q-card>

      <ProfileSections />
    </State>
  </div>
</template>

<script lang="ts">
  import Vue from 'vue';
  import UserProfileHeader from 'components/profile/UserProfileHeader.vue';
  import ProfilePosting from 'components/profile/ProfilePosting.vue';
  import { mapGetters,mapActions } from 'vuex';
  import State from 'components/common/State.vue';
  import ProfileSections from 'components/posts/ProfileSections.vue';
  import NavBanner from 'components/common/NavBanner.vue';
  import feedpost from 'components/profile/ProfileSectionPost.vue';

  export default Vue.extend({
    name: 'MyProfile',
    data(){
      return {
        viewActivity : false
        }
    },
    components: { UserProfileHeader, ProfilePosting, State, ProfileSections, NavBanner,feedpost },
    computed: {
      ...mapGetters('userProfileModule', ['profile', 'status','getSections']),
      ...mapGetters('accountModule', ['user']),
      userPosts(){
        console.log(this.getSections);
        return this.getSections;
      }
    },

    mounted() {
      if (this.profile && this.profile.email && !this.profile.firstName) {
        return this.$router.push({ name: 'MyProfileUpdate' });
      }
    }
  });
</script>

<style>

</style>
