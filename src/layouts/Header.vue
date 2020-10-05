<template>
  <q-header elevated>
    <q-toolbar class="row">
      <div class="col-12 col-md-10 offset-md-1 col-lg-8 offset-lg-2">
        <div class="flex items-center">
          <div>
            <q-btn round @click="$router.push({name: 'userProfile'})" flat>
              <q-avatar size="40px">
                <img src="https://cdn.quasar.dev/img/boy-avatar.png">
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
              <q-btn
                flat
                dense
                round
                size="14px"
                icon="more_vert"
                aria-label="Menu"
              />
              <q-menu
                transition-show="jump-down"
                transition-hide="jump-up"
              >
                <q-list style="min-width: 100px">
                  <q-item clickable to="/profile">
                    <q-item-section>Profile</q-item-section>
                  </q-item>
                  <q-item clickable to="/profile/organizations">
                    <q-item-section>Organizations</q-item-section>
                  </q-item>
                  <q-separator />
                  <q-item clickable @click="logout()">
                    <q-item-section>Logout</q-item-section>
                  </q-item>
                </q-list>
              </q-menu>
            </div>
          </div>
        </div>
      </div>

    </q-toolbar>
    <q-bar class="bg-red-7">
      <div class="col text-center text-white">
        <q-icon name="warning" class="text-white"/>
        NEWS ALERT
      </div>
    </q-bar>
  </q-header>
</template>

<script lang="ts">
  import Search from 'components/Search.vue';
  import Vue from 'vue';
  import { mapGetters, mapActions } from 'vuex'

  export default Vue.extend({
    name: 'MainLayout',
    components: { Search },
    computed: {
      ...mapGetters('userProfileModule', ['getAvatar']),
    },
    methods: {
      ...mapActions('accountModule', ['logout']),
    }
  });
</script>

<style lang="scss" scoped>
</style>
