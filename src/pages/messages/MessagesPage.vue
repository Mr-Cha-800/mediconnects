<template>
  <!--<q-card flat class="row">
    <div class="col-4">
      <ChatsList />
    </div>
    <div class="col-8">
      <ChatBox />
    </div>

  </q-card>-->
  <div class="WAL bg-grey-4" :style="style">
    <q-layout view="lHh Lpr lFf" class=" shadow-3" container>
      <q-header>
        <q-toolbar class="bg-grey-3 text-black">
          <q-btn
            round
            flat
            icon="keyboard_arrow_left"
            class="q-mr-sm"
            v-if="!leftDrawerOpen"
            @click="leftDrawerOpen = true"
          ></q-btn>
          <q-btn round flat v-if="selectedUser.avatar || selectedUser.icon">
            <q-avatar>
              <q-img :src="selectedUser.avatar || selectedUser.icon" />
            </q-avatar>
          </q-btn>

          <span class="q-subtitle-1 q-pl-md">
          {{ selectedUser.name }}
        </span>
        <q-chip v-if="selectedUser.status === 'offline'" dense size="sm" color="red" text-color="white" >
          offline
        </q-chip>
        <q-chip v-else-if="selectedUser.status === 'online'" dense size="sm" color="green" text-color="white" >
          online
        </q-chip>
          <q-space />
          <callmanagment :selectedUser="selectedUser"  />
        </q-toolbar>
      </q-header>

      <q-drawer
        v-model="leftDrawerOpen"
        show-if-above
        bordered
        :breakpoint="690"
      >
        <ChatBoxSidebar />
        <!--<ChatsList />-->
      </q-drawer>

      <q-page-container class="bg-white">
        <MessageView :currentUser="selectedUser" />
      </q-page-container>

      <q-footer>
        <q-toolbar class="bg-grey-3 row">
          <MessageFooter />
        </q-toolbar>
      </q-footer>
    </q-layout>
  </div>
</template>

<script>
  import ChatBox from 'components/messages/ChatBox.vue';
  import ChatsList from 'components/messages/ChatsList.vue';
  import MessageFooter from 'components/cometchat-components/components/MessageFooter.vue';
  import MessageView from 'components/cometchat-components/components/MessageView.vue';
  import ChatBoxSidebar from '../../components/messages/ChatBoxSidebar';
  import callmanagment from 'components/cometchat-components/components/CallManagmenet.vue';
  export default {
    name: 'MessagesPage',
    components: { ChatsList, ChatBox, MessageFooter, MessageView, ChatBoxSidebar, callmanagment },
    data() {
      const selectedUser = {};
      return {
        selectedUser,
        leftDrawerOpen: true,
      };
    },
    mounted() {
      this.$root.$on('selectedUser', data => {
        this.leftDrawerOpen = false;
        this.selectedUser = data;
      });
    },
    computed: {
      style () {
        return {
          height: this.$q.screen.height - 52 + 'px'
        }
      }
    }
  };
</script>
<style lang="sass">
  .WAL
    width: 100%
    &__field.q-field--outlined .q-field__control:before
      border: none
    .q-drawer--standard
      .WAL__drawer-close
        display: none
    @media (max-width: 850px)
      .WAL
        padding: 0
        &__layout
          width: 100%
          border-radius: 0
    @media (min-width: 691px)
      .WAL
        &__drawer-open
          display: none
    .conversation__summary
      margin-top: 4px
    .conversation__more
      margin-top: 0!important
      font-size: 1.4rem
</style>
