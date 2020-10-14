import { MutationTree } from 'vuex';
import { FollowConnectStateInterface } from './state';
import Vue from 'vue';

const mutation: MutationTree<FollowConnectStateInterface> = {
  FollowRequest(state, { entity }) {
    const entityStatus = state.followConnectStatus[entity];
    Vue.set(state, 'followConnectStatus', {...state.followConnectStatus, [entity]: { ...entityStatus, following: true } });
  },

  FollowSuccess(state, { entity }) {
    const entityStatus = state.followConnectStatus[entity];
    Vue.set(state, 'followConnectStatus', {...state.followConnectStatus, [entity]: { ...entityStatus, following: false, followed: true } });
  },

  FollowFailed(state, { entity, error }) {
    const entityStatus = state.followConnectStatus[entity];
    Vue.set(state, 'followConnectStatus', {...state.followConnectStatus, [entity]: { ...entityStatus, following: false, error } });
  },

  unFollowRequest(state, { entity }) {
    const entityStatus = state.followConnectStatus[entity];
    Vue.set(state, 'followConnectStatus', {...state.followConnectStatus, [entity]: { ...entityStatus, following: true } });
  },

  unFollowSuccess(state, { entity }) {
    const entityStatus = state.followConnectStatus[entity];
    Vue.set(state, 'followConnectStatus', {...state.followConnectStatus, [entity]: { ...entityStatus, following: false, followed: false } });
  },

  unFollowFailed(state, { entity, error }) {
    const entityStatus = state.followConnectStatus[entity];
    Vue.set(state, 'followConnectStatus', {...state.followConnectStatus, [entity]: { ...entityStatus, following: false, error } });
  },

  ConnectRequest(state, { entity }) {
    const entityStatus = state.followConnectStatus[entity];
    Vue.set(state, 'followConnectStatus', {...state.followConnectStatus, [entity]: { ...entityStatus, connecting: true } });
  },

  ConnectSuccess(state, { entity }) {
    const entityStatus = state.followConnectStatus[entity];
    Vue.set(state, 'followConnectStatus', {...state.followConnectStatus, [entity]: { ...entityStatus, connecting: false, connected: true } });
  },

  ConnectFailed(state, { entity, error }) {
    const entityStatus = state.followConnectStatus[entity];
    Vue.set(state, 'followConnectStatus', {...state.followConnectStatus, [entity]: { ...entityStatus, connecting: false, error } });
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
    const updateConnectsRequests = state.connectsRequests.filter(({id}) => id !== requestId)
    Vue.set(state, 'connectsRequests', updateConnectsRequests);
    Vue.set(state, 'requestStatus', {...state.requestStatus, [requestId]: { accepting: false } });
  },

  AcceptFailed(state, { requestId, error }) {
    Vue.set(state, 'requestStatus', {...state.requestStatus, [requestId]: { error } });
  },


  RejectRequest(state, { requestId }) {
    Vue.set(state, 'requestStatus', {...state.requestStatus, [requestId]: { rejecting: true } });
  },

  RejectSuccess(state, { requestId }) {
    const updateConnectsRequests = state.connectsRequests.filter(({id}) => id !== requestId)
    Vue.set(state, 'connectsRequests', updateConnectsRequests);
    Vue.set(state, 'requestStatus', {...state.requestStatus, [requestId]: { rejecting: false } });
  },

  RejectFailed(state, { requestId, error }) {
    Vue.set(state, 'requestStatus', {...state.requestStatus, [requestId]: { error } });
  },
};

export default mutation;
