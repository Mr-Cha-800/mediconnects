import { ActionTree } from 'vuex';
import { StateInterface } from '../index';
import { CometChat } from '@cometchat-pro/chat/CometChat';
import { CallingStateInterface } from 'src/store/calling/state';

const actions: ActionTree<CallingStateInterface, StateInterface> = {
  callUser: ({ commit }, { receiverID, callType, receiverType }) => {
    const call = new CometChat.Call(receiverID, callType, receiverType);

    CometChat.initiateCall(call).then(
      (outGoingCall: CometChat.Call) => {
        commit('startCall', outGoingCall);
        console.log('Call initiated successfully:', outGoingCall);
      },
      (error: any) => {
        commit('failedCall', error);
        console.log('Call initialization failed with exception:', error);
      }
    );
  },

  addCallListener: ({ commit,dispatch }, { id }) => {
    CometChat.addCallListener(
      id,
      new CometChat.CallListener({
        onIncomingCallReceived(call: any) {
          console.log('Incoming call:', call);
          commit('receiveCall', call);
        },
        onOutgoingCallAccepted(call: any) {
          console.log('Outgoing call accepted:', call);
          commit('callAccepted', call);
          dispatch('startCall');
        },
        onOutgoingCallRejected(call: any) {
          console.log('Outgoing call rejected:', call);
          commit('endCall', call);
        },
        onIncomingCallCancelled(call: any) {
          console.log('Incoming call cancelled:', call);
          commit('endCall', call);
        }
      }));
  },

  acceptCall: ({ commit, dispatch, state }) => {
    if (state.call) {
      CometChat.acceptCall(state.call.getSessionId()).then(
        call => {
          console.log('Call accepted successfully:', call);
          commit('callAccepted', call);
          dispatch('startCall');
        },
        error => {
          console.log('Call acceptance failed with error', error);
          commit('failedCall', error);
        });
    }
  },

  endCall: ({ commit, state }) => {
    if (state.call) {
      CometChat.endCall(state.call.getSessionId()).then(
        call => {
          console.log('call ended', call);
        }, error => {
          console.log('error', error);
        }
      );
    }
  },
  rejectCall: ({ commit, state }) => {
    if (state.call) {
      const status = CometChat.CALL_STATUS.REJECTED;
      CometChat.rejectCall(state.call.getSessionId(), status).then(
        call => {
          commit('endCall', call);
        },
        error => {
          commit('failedCall', error);
        });
    }
  },
  startCall: ({ commit, state }) => {
    if (state.call) {
      const sessionId = state.call.getSessionId();
      const callType = state.call.getType();
      const callSettings = new CometChat.CallSettingsBuilder()
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
            /* hiding/closing the call screen can be done here. */
          },
          onError: error => {
            console.log("Error :", error);
            /* hiding/closing the call screen can be done here. */
          }
        })
      );
    }
  },
};

export default actions;
