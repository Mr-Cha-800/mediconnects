<template>
  <div>
    <q-header elevated class="q-py-xs" height-hint="58">
      <q-toolbar>
        <q-btn
          flat
          dense
          round
          @click="sideMenu = !sideMenu"
          aria-label="Menu"
          icon="menu"
        />

        <q-btn flat no-caps no-wrap class="q-ml-xs" v-if="$q.screen.gt.xs">
          <q-toolbar-title shrink class="text-weight-bold">
            MediConnects
          </q-toolbar-title>
        </q-btn>

        <q-space/>

        <div class="YL__toolbar-input-container row no-wrap">
          <Search/>
        </div>

        <q-space/>

        <div class="q-gutter-sm row items-center no-wrap">
          <q-btn round dense flat icon="message" :to="{name: 'messages'}">
            <q-tooltip>Messages</q-tooltip>
          </q-btn>
          <q-btn round dense flat icon="notifications">
            <q-badge color="red" text-color="white" floating>
              2
            </q-badge>
            <q-tooltip>Notifications</q-tooltip>
          </q-btn>
          <q-btn round flat exact :to="{name: 'MyProfile'}" v-if="$q.screen.gt.sm">
            <q-avatar size="26px">
              <q-img :src="getAvatar" />
            </q-avatar>
            <q-tooltip>Account</q-tooltip>
          </q-btn>
        </div>
      </q-toolbar>
    </q-header>

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
              <q-badge :label="menuItem.badge" color="red" text-color="white"/>
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
    <!--<q-bar class="bg-red-7">
      <div class="col text-center text-white">
        <q-icon name="warning" class="text-white"/>
        NEWS ALERT
      </div>
    </q-bar>-->
  </div>
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
        search: '',
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

<style lang="sass">
  .YL
    &__toolbar-input-container
      min-width: 100px
      width: 55%

    &__toolbar-input-btn
      border-radius: 0
      border-style: solid
      border-width: 1px 1px 1px 0
      border-color: rgba(0, 0, 0, .24)
      max-width: 60px
      width: 100%

    &__drawer-footer-link
      color: inherit
      text-decoration: none
      font-weight: 500
      font-size: .75rem

      &:hover
        color: #000
</style>
