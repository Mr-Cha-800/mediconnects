import { MutationTree } from 'vuex';
import Vue from 'vue';
import { CallingStateInterface } from 'src/store/calling/state';
const mutation: MutationTree<CallingStateInterface> = {
  startCall(state, call) {
    Vue.set(state, 'status', { emittingCall: true });
    Vue.set(state, 'call', call);
  },
  receiveCall(state, call) {
    Vue.set(state, 'status', { receivingCall: true });
    Vue.set(state, 'call', call);
  },
  endCall(state) {
    Vue.set(state, 'status', { emittingCall: false, receivingCall: false });
  },
  acceptCall(state) {
    Vue.set(state, 'status', { calling: true });
  },
  callAccepted(state) {
    Vue.set(state, 'status', { calling: true });
  },
  failedCall(state, error) {
    Vue.set(state, 'status', { error });
  },
};

export default mutation;
