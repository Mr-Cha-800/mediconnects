import { MutationTree } from 'vuex';
import { FollowConnectStateInterface } from './state';
import Vue from 'vue';

const mutation: MutationTree<FollowConnectStateInterface> = {
  FollowRequest(state, { entity }) {
    Vue.set(state, 'followConnectStatus', {...state.followConnectStatus, [entity]: { following: true } });
  },

  FollowSuccess(state, { entity }) {
    Vue.set(state, 'followConnectStatus', {...state.followConnectStatus, [entity]: { followed: true } });
  },

  FollowFailed(state, { entity, error }) {
    Vue.set(state, 'followConnectStatus', {...state.followConnectStatus, [entity]: { error } });
  },

  ConnectRequest(state, { entity }) {
    Vue.set(state, 'followConnectStatus', {...state.followConnectStatus, [entity]: { connecting: true } });
  },

  ConnectSuccess(state, { entity }) {
    Vue.set(state, 'followConnectStatus', {...state.followConnectStatus, [entity]: { connected: true } });
  },

  ConnectFailed(state, { entity, error }) {
    Vue.set(state, 'followConnectStatus', {...state.followConnectStatus, [entity]: { error } });
  },

  ConnectRequestsRequest(state) {
    Vue.set(state, 'status', {...state.status, loading: true });
  },

  ConnectRequestsSuccess(state, connectsRequests) {
    Vue.set(state, 'status', {...state.status, loading: false });
    Vue.set(state, 'connectsRequests', connectsRequests);
  },

  ConnectRequestsFailed(state, error: string) {
    Vue.set(state, 'status', {...state.status, loading: false, error });
  },

  AcceptRequest(state, { requestId }) {
    Vue.set(state, 'requestStatus', {...state.requestStatus, [requestId]: { accepting: true } });
  },

  AcceptSuccess(state, { requestId }) {
    Vue.set(state, 'requestStatus', {...state.requestStatus, [requestId]: { accepting: true } });
  },

  AcceptFailed(state, { requestId, error }) {
    Vue.set(state, 'requestStatus', {...state.requestStatus, [requestId]: { error } });
  },


  RejectRequest(state, { requestId }) {
    Vue.set(state, 'requestStatus', {...state.requestStatus, [requestId]: { rejecting: true } });
  },

  RejectSuccess(state, { requestId }) {
    Vue.set(state, 'requestStatus', {...state.requestStatus, [requestId]: { rejecting: true } });
  },

  RejectFailed(state, { requestId, error }) {
    Vue.set(state, 'requestStatus', {...state.requestStatus, [requestId]: { error } });
  },
};

export default mutation;
