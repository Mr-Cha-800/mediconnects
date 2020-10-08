import { MutationTree } from 'vuex';
import { UserProfileInterface, UserProfileStateInterface } from './state';
import Vue from 'vue';

const mutation: MutationTree<UserProfileStateInterface> = {
  userProfileRequest(state) {
    Vue.set(state, 'status', { loading: true });
  },

  userProfileSuccess(state, userDetails: UserProfileInterface) {
    Vue.set(state, 'profile', userDetails);
    Vue.set(state, 'status', { loading: false });
  },

  userProfileFailed(state, error: string) {
    Vue.set(state, 'profile', {});
    Vue.set(state, 'status', { loading: false, error });
  },

  userProfileUpdateRequest(state) {
    Vue.set(state, 'status', { updating: true });
  },

  userProfileUpdateSuccess(state, userDetails: UserProfileInterface) {
    Vue.set(state, 'profile', userDetails);
    Vue.set(state, 'status', { updating: false });
  },

  userProfileUpdateFailed(state, error: string) {
    Vue.set(state, 'status', { updating: false, error });
  },

  userProfileFollowRequest(state) {
    Vue.set(state, 'status', { following: true });
  },

  userProfileFollowSuccess(state) {
    Vue.set(state, 'status', { following: false });
  },

  userProfileFollowFailed(state, error: string) {
    Vue.set(state, 'status', { following: false, error });
  },

  userProfileConnectRequest(state) {
    Vue.set(state, 'status', { following: true });
  },

  userProfileConnectSuccess(state) {
    Vue.set(state, 'status', { following: false });
  },

  userProfileConnectFailed(state, error: string) {
    Vue.set(state, 'status', { following: false, error });
  },
};

export default mutation;
