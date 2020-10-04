<template>
  <q-header elevated>
    <q-toolbar class="row">
      <div class="col-12 col-md-10 offset-md-1 col-lg-8 offset-lg-2">
        <div class="flex items-center">
          <div>
            <q-btn round @click="$router.push('/user')" flat>
              <q-avatar size="40px">
                <img src="https://cdn.quasar.dev/img/boy-avatar.png">
              </q-avatar>
            </q-btn>
          </div>
          <div class="q-ml-lg">
            <Search/>
          </div>
          <div class="q-ml-auto">
            <div class="row">
              <q-btn round dense flat color="white" size="16px" icon="chat_bubble_outline">
                <q-badge align="bottom" color="red" text-color="white" floating>
                  2
                </q-badge>
              </q-btn>

              <q-btn round dense flat color="white" size="16px" icon="notifications">
                <q-badge align="bottom" color="red" text-color="white" floating>
                  2
                </q-badge>
              </q-btn>
              <q-btn
                flat
                dense
                round
                size="16px"
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
                </q-list>
              </q-menu>
            </div>
          </div>
        </div>
      </div>

    </q-toolbar>
    <q-bar class="bg-red-7" style="height:20px">

      <div class="col text-center text-white" style="font-size:10px">
        <q-icon name="warning" class="text-white" style="font-size: 16px;"/>
        NEWS ALERT
      </div>
    </q-bar>
  </q-header>
</template>

<script>
  import Search from 'components/Search.vue';


  import Vue from 'vue';

  export default Vue.extend({
    name: 'MainLayout',
    components: { Search },
    data() {
      return {
        showRightMenu: true
      };
    }
  });
</script>

<style lang="scss" scoped>
</style>
