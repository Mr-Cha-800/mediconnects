import { MutationTree } from 'vuex';
import { GroupsInterface, GroupsStateInterface } from './state';
import Vue from 'vue';

const mutation: MutationTree<GroupsStateInterface> = {
  getGroupsRequest(state) {
    Vue.set(state, 'groups', []);
    Vue.set(state, 'status', { loading: true });
  },
  getGroupsSuccess(state, groupsList: GroupsInterface[]) {
    Vue.set(state, 'groups', groupsList);
    Vue.set(state, 'status', { loading: false });
  },
  getGroupsFailed(state, error: string) {
    Vue.set(state, 'groups', []);
    Vue.set(state, 'status', { loading: false, error });
  },

  groupEditRequest(state) {
    Vue.set(state, 'status', { updating: true });
  },

  groupAddSuccess(state, group: GroupsInterface) {
    Vue.set(state, 'status', { updating: false });
    Vue.set(state, 'groups', [...state.groups, group]);
  },

  groupUpdateSuccess(state, updatedGroup: GroupsInterface) {
    Vue.set(state, 'status', { updating: false });
    const updatedGroups = state.groups.map(group => {
      return (group.id === updatedGroup.id) ? {...updatedGroup} : group
    });
    Vue.set(state, 'groups', [...updatedGroups]);
  },

  groupDeleteSuccess(state, group: GroupsInterface) {
    Vue.set(state, 'status', { updating: false });
    const updatedGroups = state.groups.filter(({id}) => group.id !== id);
    Vue.set(state, 'groups', [...state.groups, group]);
  },

  groupEditFailed(state, error: string) {
    Vue.set(state, 'status', { updating: false, error });
  },

};

export default mutation;
