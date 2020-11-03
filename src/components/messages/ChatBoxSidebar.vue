<template>
  <div>
    <SidebarHeader :active-tab="activeTab" />
    <UserList v-if="activeTab=='contacts'" />
    <ChatsList v-else-if="activeTab=='chat'" />
    <GroupList v-else-if="activeTab=='groups'" />
    <div class="ccl-left-panel-footer-wrap">
      <Nav @activeTab="currentTab" />
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
  name: "ChatBoxSidebar",
  components: {
    SidebarHeader,
    Nav,
    UserList,
    GroupList,
    ChatsList
  },
  data() {
    return {
      activeTab: "contacts",
    };
  },
  methods: {
    currentTab (value) {
      this.activeTab = value;
    },
  },
};
</script>
