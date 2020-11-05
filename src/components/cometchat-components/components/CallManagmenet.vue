<template>
    <div><!-- this is only for testing -->
        <q-btn v-if="callobject.ongoingcall" @click="cancel">cancel</q-btn>
        <q-btn flat color="primary" round icon="call" @click="calll('audio')"/>
        <q-btn flat color="primary" round icon="videocam" @click="calll('video')"/>
        <q-btn v-if="callobject.isincomingcall" @click="reject">reject</q-btn>
        <q-btn v-if="callobject.isincomingcall" @click="accept">accept</q-btn>
        <q-btn v-if="callobject.callinprogress" @click="endcalll">End call</q-btn>
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
    methods:{
      calll(typeofcall){
      var receiverID = this.selectedUser.uid;
      var callType;
      if(typeofcall === 'audio') { callType = CometChat.CALL_TYPE.AUDIO; }
      else if(typeofcall === 'video') { callType = CometChat.CALL_TYPE.VIDEO;}
      var receiverType = CometChat.RECEIVER_TYPE.USER;

      var call = new CometChat.Call(receiverID, callType, receiverType);

      CometChat.initiateCall(call).then(
        outGoingCall => {
          console.log("Call initiated successfully:", outGoingCall);
          this.callobject.sessionID = outGoingCall.sessionId
          this.callobject.ongoingcall = true
          // perform action on success. Like show your calling screen.
        },
        error => {
          console.log("Call initialization failed with exception:", error);
        }
      );
      },
      cancel(){
        var sessionID = this.callobject.sessionID;
        var status = CometChat.CALL_STATUS.CANCELLED;
        var vm = this
        CometChat.rejectCall(sessionID, status).then(
        call => {
          // call canceled
            vm.callobject.ongoingcall = false
            console.log("Call rejected successfully", call);
        },
        error => {
            console.log("Call rejection failed with error:", error);
        }
        );
      },
      accept(){
        var sessionID = this.callobject.sessionID;
        var vm = this;
        CometChat.acceptCall(sessionID).then(
        call => {
            vm.startcall(call)
            // call not ongoing or incoming , it's in progress
            vm.callobject.ongoingcall = false
            vm.callobject.isincomingcall = false
            // call in progress
            vm.callobject.callinprogress = true
            console.log("Call accepted successfully:", call);
            // start the call using the startCall() method
        },
        error => {
            console.log("Call acceptance failed with error", error);
            // handle exception
        }
        );
      },
      reject(){
        var sessionID = this.callobject.sessionID;
        var vm = this;
        var status = CometChat.CALL_STATUS.REJECTED;

        CometChat.rejectCall(sessionID, status).then(
        call => {
            console.log("Call rejected successfully", call);
            // call rejected
            vm.callobject.isincomingcall = false
        },
        error => {
            console.log("Call rejection failed with error:", error);
        }
        );
      },
      startcall(call){
        var vm = this;
        var sessionId = this.callobject.sessionID;
        var callType = call.type;
        var callSettings = new CometChat.CallSettingsBuilder()
                                            .setSessionID(sessionId)
                                            .enableDefaultLayout(true)
                                            .setIsAudioOnlyCall(callType == 'audio' ? true : false)
                                            .build();
        CometChat.startCall(
          callSettings,
          document.getElementById("callScreen"),
          new CometChat.OngoingCallListener({
            onUserJoined: user => {
              /* Notification received here if another user joins the call. */
              console.log("User joined call:", user);
              /* this method can be use to display message or perform any actions if someone joining the call */
            },
            onUserLeft: user => {
              /* Notification received here if another user left the call. */
              console.log("User left call:", user);
              /* this method can be use to display message or perform any actions if someone leaving the call */
            },
            onCallEnded: call => {
              /* Notification received here if current ongoing call is ended. */
              console.log("Call ended:", call);
              vm.endcalll();
              /* hiding/closing the call screen can be done here. */
            },
            onError: error => {
              console.log("Error :", error);
              /* hiding/closing the call screen can be done here. */
            }
          })
        );
      },
      endcalll(){
        CometChat.endCall(this.callobject.sessionID).then(
            call => {
              // call ended not in progress
                this.callobject.callinprogress = false
                console.log('call ended', call);
            }, error => {
                console.log('error', error);
            }
        );
      }
    },
    created(){
        var listnerID = this.selectedUser.uid;
        var vm = this;
        CometChat.addCallListener(
        listnerID,
        new CometChat.CallListener({
            onIncomingCallReceived(call) {
            console.log("Incoming call:", call);
            // call incoming
            vm.callobject.isincomingcall = true;
            vm.callobject.sessionID = call.sessionId
            //console.log(vm.callobject.sessionID)
            // Handle incoming call
            },
            onOutgoingCallAccepted(call) {
              vm.startcall(call)
            console.log("Outgoing call accepted:", call);
            // the call is no longer coming or going it's in progress
            vm.callobject.ongoingcall = false
            vm.callobject.isincomingcall = false
            // call in progress
            vm.callobject.callinprogress = true
            // Outgoing Call Accepted
            },
            onOutgoingCallRejected(call) {
            //call is rejected
            vm.callobject.ongoingcall = false
            console.log("Outgoing call rejected:", call);
            // Outgoing Call Rejected
            },
            onIncomingCallCancelled(call) {
            console.log("Incoming call cancelled:", call);
            // call is cancelled
            vm.callobject.isincomingcall = false
            }
        })
        );
    }
}
</script>

<style>

</style>