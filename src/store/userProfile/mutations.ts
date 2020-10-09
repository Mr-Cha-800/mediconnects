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

  IncreaseUserFollowers(state) {
    const { profile: { followers = 0 } = {} } = state;
    Vue.set(state, 'profile', { ...state.profile, followers: followers + 1 });
  },
  DecreaseUserFollowers(state) {
    const { profile: { followers = 0 } = {} } = state;
    Vue.set(state, 'profile', { ...state.profile, followers: followers && followers - 1 });
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
  }
};

export default mutation;
