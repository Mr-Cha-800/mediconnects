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
            />
            <q-btn
              round
              v-if="$route.name === 'home' "
              flat
              @click="sideMenu = !sideMenu"
            >
              <q-avatar size="40px">
                <img :src="getAvatar">
              </q-avatar>
            </q-btn>
          </div>
          <div class="q-ml-sm-xs q-ml-md">
            <Search/>
          </div>
          <div class="q-ml-auto">
            <div class="row">
              <q-btn round dense flat color="white" size="14px" icon="chat_bubble_outline">
                <q-badge align="bottom" color="red" text-color="white" floating>
                  2
                </q-badge>
              </q-btn>

              <q-btn round dense flat color="white" size="14px" icon="notifications">
                <q-badge align="bottom" color="red" text-color="white" floating>
                  2
                </q-badge>
              </q-btn>
            </div>
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
            </q-item>
          </q-list>
        </q-scroll-area>

        <q-img class="absolute-top" src="https://cdn.quasar.dev/img/material.png" style="height: 12rem">
          <div class="absolute-bottom bg-transparent">
            <q-avatar size="5rem" class="q-mb-sm">
              <img :src="getAvatar">
            </q-avatar>
            <div class="text-weight-bold">{{profile.firstName}} {{profile.lastName}}</div>
            <router-link exact :to="{name: 'userProfile'}" class="text-white">View Profile</router-link>
            <router-link exact :to="{name: 'userProfileUpdate'}" class="text-white q-ml-md">Edit</router-link>
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
          groups: {
            label: 'Groups',
            icon: 'groups',
            pathName: 'groups'
          },
          messages: {
            label: 'Messages',
            icon: 'message',
            pathName: 'messages'
          }
        }
      };
    },
    methods: {
      ...mapActions('accountModule', ['logout']),
      ...mapActions('userProfileModule', ['getProfile'])
    },
    computed: {
      ...mapGetters('userProfileModule', ['profile', 'status', 'getAvatar'])
    },
    created() {
      this.getProfile();
    }
  });
</script>

<style lang="scss" scoped>
</style>
