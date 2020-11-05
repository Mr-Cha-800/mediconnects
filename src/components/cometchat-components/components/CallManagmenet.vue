<template>
    <div><!-- this is only for testing -->
        <q-btn flat color="primary" round icon="call" @click="audioCall()"/>
        <q-btn flat color="primary" round icon="videocam" @click="videoCall()"/>
    </div>
</template>

<script>
  import { CometChat } from "@cometchat-pro/chat";
export default {
    data(){
        return{
            callobject: {
                sessionID: '',
                ongoingcall: false,
                isincomingcall: false,
                callinprogress: false
            }
        }
    },
    props:{
        selectedUser:{
            type: Object,
            required: true
        }
    },
    methods: {
      audioCall() {
        const receiverID = this.selectedUser.uid;
        const callType = CometChat.CALL_TYPE.AUDIO;
        const receiverType = CometChat.RECEIVER_TYPE.USER;
        this.$store.dispatch('callingModule/callUser', { receiverID, callType, receiverType });
      },
      videoCall() {
        const receiverID = this.selectedUser.uid;
        const callType = CometChat.CALL_TYPE.VIDEO;
        const receiverType = CometChat.RECEIVER_TYPE.USER;
        this.$store.dispatch('callingModule/callUser', { receiverID, callType, receiverType });
      },
    }
}
</script>

<style>

</style>
