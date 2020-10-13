import { MutationTree } from 'vuex';
import { GroupsStateInterface } from './state';
import Vue from 'vue';

const mutation: MutationTree<GroupsStateInterface> = {
  getGroupRequest(state) {
    Vue.set(state, 'groups', []);
    Vue.set(state, 'status', { loading: true });
  },
  getGroupSuccess(state, groupsList: GroupsStateInterface[]) {
    Vue.set(state, 'groups', groupsList);
    Vue.set(state, 'status', { loading: false });
  },
  getGroupFailed(state, error: string) {
    Vue.set(state, 'groups', []);
    console.log('error', error);
    Vue.set(state, 'status', { loading: false, error });
  },

  groupAddRequest(state) {
    Vue.set(state, 'status', { updating: true });
  },

  groupAddSuccess(state) {
    Vue.set(state, 'status', { updating: false });
  },

  groupAddFailed(state, error: string) {
    Vue.set(state, 'status', { updating: false, error });
  },










  orgByIdRequest(state) {
    Vue.set(state, 'groups', {});
    Vue.set(state, 'status', { loading: true });
  },
  orgByIdSuccess(state, org: GroupsStateInterface) {
    Vue.set(state, 'groups', org);
    Vue.set(state, 'status', { loading: false });
  },
  orgByIdFailed(state, error: string) {
    Vue.set(state, 'groups', {});
    Vue.set(state, 'status', { loading: false, error });
  },


  orgProfileEditRequest(state) {
    Vue.set(state, 'status', { updating: true });
  },

  orgProfileEditSuccess(state) {
    Vue.set(state, 'status', { updating: false });
  },

  orgProfileEditFailed(state, error: string) {
    Vue.set(state, 'status', { updating: false, error });
  },

};

export default mutation;
