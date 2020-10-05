import { MutationTree } from 'vuex';
import { OrgProfileInterface } from './state';
import Vue from 'vue';

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
};

export default mutation;
