<template>
  <div>
    <q-toolbar class="bg-grey-3 text-black">
      <q-btn round flat>
        <q-avatar>
          <q-img :src="currentUser.avatar" />
        </q-avatar>
      </q-btn>
      <span class="q-subtitle-1 q-pl-md">
          {{ currentUser.name }}
        </span>
      <q-space />

      <q-btn round flat icon="search" />
      <q-btn round flat>
        <q-icon name="attachment" class="rotate-135" />
      </q-btn>
    </q-toolbar>
    <q-scroll-area style="height: calc(100vh - 175px)">
      <MessageView :currentUser="currentUser" />
    </q-scroll-area>
  </div>
</template>
<script>
  import Vue from 'vue';
  import { CometChat } from '@cometchat-pro/chat/CometChat';
  import MessageFooter from 'components/cometchat-components/components/MessageFooter.vue';
  import MessageView from 'components/cometchat-components/components/MessageView.vue';
  export default Vue.extend({
    name: 'ChatBox',
    components: { MessageFooter, MessageView },
    data() {
      const messageRequest = [];
      return {
        newMessage: '',
        messageRequest,
        messages: [],
        currentUser: {},
      }
    },
    methods: {
      messageRequestBuilder: function(uType, uid, limit) {
        var messagesRequest = "";
        if (uType == "user") {
          messagesRequest = new CometChat.MessagesRequestBuilder()
            .setUID(uid)
            .setLimit(limit)
            .build();
        } else {
          messagesRequest = new CometChat.MessagesRequestBuilder()
            .setGUID(uid)
            .setLimit(limit)
            .build();
        }

        return messagesRequest;
      },

      messageWindowRefresh() {
        this.messages = [];

        // this.currentHeight = 0;

        if (this.currentUser && this.currentUser.uid) {
          this.messageRequest = this.messageRequestBuilder("user", this.currentUser.uid, 30);

          this.messageRequest.fetchPrevious().then(
            messages => {
              this.messages = [...messages, ...this.messages];
            },
            err => {
              console.log(err);
            }
          );
        } else if (this.currentUser && this.currentUser.guid) {
          this.messageRequest = this.messageRequestBuilder("group", this.currentUser.guid, 30);

          this.messageRequest.fetchPrevious().then(
            messages => {
              this.messages = [...this.messages, ...messages];

            },
            err => {
              console.log(err);
            }
          );
        }

        // return false;
      },
    },
    mounted() {
      this.$root.$on("selectedUser", data => {
        this.currentUser = data;
        this.messageWindowRefresh();
      });
    }
  });
</script>
