<template>
  <q-header elevated>
    <q-toolbar class="row">
      <div class="col-12 col-md-10 offset-md-1 col-lg-8 offset-lg-2">
        <div class="flex items-center">
          <div>
            <q-btn
              v-if="$route.name !== 'home' "
              @click="$router.back()"
              flat
              round
              icon="arrow_back"
              class="xs-hide sm-hide q-mr-xs"
            />
            <q-btn
              round
              flat
              @click="sideMenu = !sideMenu"
            >
              <q-avatar size="40px">
                <img :src="getAvatar">
              </q-avatar>
            </q-btn>
          </div>
          <div class="q-ml-xs-xs q-ml-md row">
            <Search/>
          </div>
          <div class="q-ml-auto xs-hide">
            <q-btn round dense flat color="white" size="14px" icon="notifications">
              <q-badge label="2" align="bottom" color="red" text-color="white" floating />
            </q-btn>
          </div>
        </div>
      </div>

      <q-drawer v-model="sideMenu" side="left" behavior="mobile">
        <q-scroll-area style="height: calc(100% - 12rem); margin-top: 12rem;">
          <q-list padding class="text-grey-8">
            <q-item
              v-for="menuItem in menuItems"
              :active="$route.name === menuItem.pathName"
              clickable
              v-ripple
              exact
              :to="{ name: menuItem.pathName }"
            >
              <q-item-section avatar>
                <q-icon :name="menuItem.icon"/>
              </q-item-section>

              <q-item-section>
                {{menuItem.label}}
              </q-item-section>
              <q-item-section side v-if="menuItem.badge">
                <q-badge :label="menuItem.badge" color="red" text-color="white" />
              </q-item-section>
            </q-item>
          </q-list>
        </q-scroll-area>

        <q-img class="absolute-top" src="https://cdn.quasar.dev/img/material.png" style="height: 12rem">
          <div class="absolute-bottom bg-transparent">
            <q-avatar size="5rem" class="q-mb-sm">
              <img :src="getAvatar">
            </q-avatar>
            <div class="text-weight-bold">{{profile.firstName}} {{profile.lastName}}</div>
            <router-link exact :to="{name: 'MyProfile'}" class="text-white">View Profile</router-link>
            <router-link exact :to="{name: 'MyProfileUpdate'}" class="text-white q-ml-md">Edit</router-link>
          </div>
        </q-img>

        <q-item
          clickable
          v-ripple
          class="absolute-bottom text-grey-8"
          @click="logout()"
        >
          <q-item-section avatar>
            <q-icon name="power_settings_new"/>
          </q-item-section>

          <q-item-section>
            Logout
          </q-item-section>
        </q-item>
      </q-drawer>

    </q-toolbar>
<!--    <q-bar class="bg-red-7">
      <div class="col text-center text-white">
        <q-icon name="warning" class="text-white"/>
        NEWS ALERT
      </div>
    </q-bar>-->
  </q-header>
</template>

<script lang="ts">
  import Search from 'components/Search.vue';
  import Vue from 'vue';
  import { mapActions, mapGetters } from 'vuex';

  export default Vue.extend({
    name: 'MainLayout',
    components: { Search },
    data() {
      return {
        sideMenu: false,
        menuItems: {
          home: {
            label: 'Home',
            icon: 'home',
            pathName: 'home'
          },
          org: {
            label: 'Organizations',
            icon: 'apartment',
            pathName: 'profileOrganizations'
          },
          requests: {
            label: 'Connect Requests',
            icon: 'group_add',
            pathName: 'UserConnectRequests'
          },
          groups: {
            label: 'Groups',
            icon: 'groups',
            pathName: 'groups'
          },
          messages: {
            label: 'Messages',
            icon: 'message',
            pathName: 'messages',
            badge: '99+',
          }
        }
      };
    },
    methods: {
      ...mapActions('accountModule', ['logout']),
      ...mapActions('userProfileModule', ['getMyProfile'])
    },
    computed: {
      ...mapGetters('userProfileModule', ['profile', 'status', 'getAvatar'])
    },
    created() {
      this.getMyProfile();
    }
  });
</script>

<style lang="scss" scoped>

</style>
