<template>
<div>
    <q-header class="bg-teal-6" elevated>
      <div class="largeheader">

      <q-toolbar >

          <q-btn round @click="$router.push('/profile')" flat>
            <q-avatar size="30px">
              <img src="https://cdn.quasar.dev/img/boy-avatar.png">
            </q-avatar>
            <q-tooltip>Account</q-tooltip>
          </q-btn>
          <Search class="largesearch"/>
        <div class=" row no-wrap items-center absolute-right">


  <q-btn round dense flat color="white" size="12px" icon="chat_bubble_outline">
     <q-badge align="bottom" color="red" text-color="white" floating>
              2
            </q-badge>
            <q-tooltip>Chat</q-tooltip>
          </q-btn>

          <q-btn round dense flat color="white"  size="12px" icon="notifications">
            <q-badge align="bottom" color="red" text-color="white" floating>
              2
            </q-badge>
            <q-tooltip>Notifications</q-tooltip>
          </q-btn>
              <q-btn
          flat
          dense
          round
          icon="more_vert"
          aria-label="Menu"
          @click="leftDrawerOpen = !leftDrawerOpen"
        />

        </div>

      </q-toolbar>
      </div>
      <q-bar class="bg-red-7" style="height:20px">

     <div class="col text-center text-white" style="font-size:10px">
      <q-icon name="warning" class="text-white" style="font-size: 16px;" />
        NEWS ALERT
      </div>
    </q-bar>
    </q-header>

    <q-drawer
		    class="hii"
        v-model="leftDrawerOpen"
        show-if-above
        overlay
        :width="250"
        :breakpoint="400"
      >
          <q-list padding>
	<q-item  to="/feed"  clickable v-ripple>
              <q-item-section avatar>
                <q-icon name="home" />
              </q-item-section>
              <q-item-section>
                Feed
              </q-item-section>
    </q-item>
	<q-item  to="/organization"  clickable v-ripple>
              <q-item-section avatar>
                <q-icon name="event" />
              </q-item-section>
              <q-item-section>
                Organization
              </q-item-section>
    </q-item>
	<q-expansion-item
        expand-separator
        icon="assignment_ind"
        label="Authentication"

      >
            <q-item  to="/auth/register"  clickable v-ripple>
              <q-item-section avatar>
              </q-item-section>
              <q-item-section>
                Register
              </q-item-section>
            </q-item>
            <q-item   to="/auth/login"   clickable v-ripple>
              <q-item-section avatar>
              </q-item-section>
              <q-item-section>
                Login
              </q-item-section>
            </q-item>
        </q-expansion-item>

          </q-list>

      </q-drawer>
    </div>
</template>

<script>
import EssentialLink from 'components/EssentialLink.vue'
import Search from 'components/Search.vue'


import Vue from 'vue';

export default Vue.extend({
  name: 'MainLayout',
  components: { EssentialLink, Search },
  data() {
    return {
      leftDrawerOpen: true,
    }
  }
});
</script>

<style lang="scss" scoped>
.profilepic{
  border-radius: 50%;
  padding-top: 1px;
}
@media screen and (min-width: 600px) {
  .largeheader{
    padding: 0px 150px 0px 150px;
  }
}
@media screen and (min-width: 600px)  and (max-width: 950px){
  .largeheader{
    padding: 0px 50px 0px 50px
  }
  .largesearch{
    margin-right:70px;
  }
}
</style>