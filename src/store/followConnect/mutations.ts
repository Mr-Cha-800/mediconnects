import { MutationTree } from 'vuex';
import { FollowConnectStateInterface } from './state';
import Vue from 'vue';

const mutation: MutationTree<FollowConnectStateInterface> = {
  FollowRequest(state) {
    Vue.set(state, 'status', {...state.status, following: true });
  },

  FollowSuccess(state) {
    Vue.set(state, 'status', {...state.status, following: false, followed: true });
  },

  FollowFailed(state, error: string) {
    Vue.set(state, 'status', {...state.status, following: false, followed: false, error });
  },

  ConnectRequest(state) {
    Vue.set(state, 'status', {...state.status, connecting: true });
  },

  ConnectSuccess(state) {
    Vue.set(state, 'status', {...state.status, connecting: false, connected: true });
  },

  ConnectFailed(state, error: string) {
    Vue.set(state, 'status', {...state.status, connecting: false, connected: false, error });
  },
};

export default mutation;
