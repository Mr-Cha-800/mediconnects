<template>
  <div @scroll="handleChatScroll($event)">
    <q-scroll-area :style="style">
      <q-list>
        <q-item
          v-for="(chatRow, index) in chatList"
          :key="index"
          clickable
          v-ripple
          @click="currentUser(chatRow, index)"
          :class="(selectedChatIndex === index) ? 'bg-grey-2' : ''"
        >
          <q-item-section avatar>
            <q-avatar>
              <q-img :src="chatRow.conversationWith.avatar || chatRow.conversationWith.icon" />
            </q-avatar>
          </q-item-section>

          <q-item-section>
            <q-item-label lines="1">
              {{chatRow.conversationWith.name}}
            </q-item-label>
            <q-item-label class="conversation__summary" caption>
              <q-icon name="check" v-if="chatRow.lastMessage"/>
              {{chatRow.lastMessage.data.text}}
            </q-item-label>
          </q-item-section>

          <q-item-section side v-if="chatRow.unreadMessageCount > 0">
            <q-item-label caption>
              {{chatRow.unreadMessageCount}}
            </q-item-label>
          </q-item-section>
        </q-item>
      </q-list>
    </q-scroll-area>
  </div>
</template>

<script>
  import { CometChat } from "@cometchat-pro/chat";

  export const STRING_CONSTS = {
    STRING_MESSAGES: {
      LOADING_MESSSAGE: 'Loading...',
      SEARCH_LOADING: 'Searching...',
      ERROR_LOADING_USERS: 'Error in loading',
      ERROR_COMETCHAT_LOGIN: 'Loag in error, reload',
      ERROR_NO_USERS_FOUND: 'No users found',
      EMPTY_STRING: '',
      SINGLE_SPACE: ' ',
    }
  };

  export default {
    name: "ChatsList",
    data() {
      return {
        chatList: [],
        chatRequest: '',
        messageToDisplay: '',
        searchKey: '',
        selectedChatIndex: null,
        callChatList(searchKey) {
          if (searchKey) {
            this.chatRequest = new CometChat.ConversationsRequestBuilder().setLimit(30).setSearchKeyword(searchKey).build();
          } else {
            this.chatRequest = new CometChat.ConversationsRequestBuilder().setLimit(30).build();
          }
          return this.chatRequest;
        },

        chatFetchNext() {
          return this.chatRequest.fetchNext();
        },

      }
    },
    methods: {
      currentUser(data, index) {
        this.$root.$emit('selectedUser', data.conversationWith);
        this.chatList[index].unreadMessageCount = 0;
        this.selectedChatIndex = index;
      },

      getChatList(data) {
        this.callChatList(data).fetchNext().then(chat => {
            this.chatList = [...this.chatList, ...chat];
          },
          error => {
            console.log(error);
          })
      },

      handleChatScroll(element) {
        if ((element.target.offsetHeight + element.target.scrollTop) >= (element.target.scrollHeight - 20)) {
          this.chatFetchNext().then((chat) => {
            this.chatList = [...this.chatList, ...chat];
          }, error => {
            console.log(error)
          });
        }
      },

      onSearchChange(event){
        this.chatList = [];
        if (this.searchStarted) {
          clearTimeout(this.searchStarted);
        }
        if (event.target.value.trim() !== STRING_CONSTS.STRING_MESSAGES.EMPTY_STRING) {
          this.searchStarted = setTimeout(() => {
            this.messageToDisplay = STRING_CONSTS.STRING_MESSAGES.SEARCH_LOADING;
            this.getChatList(event.target.value);
          }, 400);
        } else if (event.target.value.trim() === STRING_CONSTS.STRING_MESSAGES.EMPTY_STRING && event.data === null) {
          event.target.value = STRING_CONSTS.STRING_MESSAGES.EMPTY_STRING;
          this.searchStarted = setTimeout(() => {
            this.getChatList();
          }, 400);
        } else if (event.target.value.trim() === STRING_CONSTS.STRING_MESSAGES.EMPTY_STRING && event.data === STRING_CONSTS.STRING_MESSAGES.SINGLE_SPACE) {
          event.target.value = STRING_CONSTS.STRING_MESSAGES.EMPTY_STRING;
        }
      },
    },
    created() {
      this.getChatList();
    },
    computed: {
      style () {
        return {
          height: this.$q.screen.height - 104 + 'px'
        }
      }
    }
  };
</script>
