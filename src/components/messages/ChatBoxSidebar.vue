<template>
  <div>
  <div class="fullscreen">
    <SidebarHeader :active-tab="activeTab" />
    <q-page class="row no-wrap">
    <div class="col">
      <div class="column full-height">
        <q-scroll-area
          class="col"
          :thumb-style="thumbStyle"
          :bar-style="barStyle"
          visible>
      <UserList v-if="activeTab=='contacts'" />
      <ChatsList v-else-if="activeTab=='chat'" />
      <GroupList v-else-if="activeTab=='groups'" />

        </q-scroll-area>
      </div>
    </div>

  </q-page>
    <div class="ccl-left-panel-footer-wrap">
      <Nav @activeTab="currentTab" />
    </div>
  </div>
  </div>
</template>

<script>

import SidebarHeader from '../cometchat-components/components/SidebarHeader';
import UserList from '../cometchat-components/components/UserList';
import GroupList from '../cometchat-components/components/GroupList';
import Nav from '../cometchat-components/components/NavComponent';
import ChatsList from './ChatsList';

export default {
  name: 'ChatBoxSidebar',
  components: {
    SidebarHeader,
    Nav,
    UserList,
    GroupList,
    ChatsList
  },
  data() {
    return {
      thumbStyle: {
        right: '4px',
        borderRadius: '5px',
        backgroundColor: '#4A9F9D',
        width: '5px',
        opacity: 0.75
      },

      barStyle: {
        right: '2px',
        borderRadius: '9px',
        backgroundColor: '#4A9F9D',
        width: '9px',
        opacity: 0.2
      },
      activeTab: 'contacts',
    };
  },
  methods: {
    currentTab (value) {
      this.activeTab = value;
    },
  },
};
</script>
