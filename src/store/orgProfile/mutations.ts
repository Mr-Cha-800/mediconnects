import { MutationTree } from 'vuex';
import { OrgProfileInterface } from './state';
import Vue from 'vue';
import { UserProfileInterface } from 'src/store/userProfile/state';

const mutation: MutationTree<OrgProfileInterface> = {
  orgSearchRequest(state) {
    Vue.set(state, 'orgs', []);
    Vue.set(state, 'status', { loading: true });
  },
  orgSearchSuccess(state, orgsList: OrgProfileInterface[]) {
    Vue.set(state, 'orgs', orgsList);
    Vue.set(state, 'status', { loading: false });
  },
  orgSearchFailed(state, error: string) {
    Vue.set(state, 'orgs', []);
    Vue.set(state, 'status', { loading: false, error });
  },

  orgProfileAddRequest(state) {
    Vue.set(state, 'status', { updating: true });
  },

  orgProfileAddSuccess(state) {
    Vue.set(state, 'status', { updating: false });
  },


  orgProfileAddFailed(state, error: string) {
    Vue.set(state, 'status', { updating: false, error });
  },
};

export default mutation;
