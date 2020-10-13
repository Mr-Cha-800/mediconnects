import { ActionTree } from 'vuex';
import { StateInterface } from '../index';
import * as groups from './../../services/groups.service';
import { GroupsStateInterface } from 'src/store/groups/state';
const actions: ActionTree<GroupsStateInterface, StateInterface> = {

  addGroup: ({ commit }, payload) => {
    commit('groupEditRequest');
    groups.create(payload).then(() => {
      commit('groupAddSuccess');
    }).catch(error => {
      commit('groupEditFailed', error);
    })
  },
  getGroups: ({ commit }, payload) => {
    commit('getGroupsRequest');
    groups.getGroups(payload).then(response => {
      commit('getGroupsSuccess', response);
    }).catch(error => {
      commit('getGroupsFailed', error);
    })
  },
  updateGroup: ({ commit }, payload) => {
    commit('groupEditRequest');
    groups.update(payload).then(() => {
      commit('groupUpdateSuccess', payload);
    }).catch(error => {
      commit('groupEditFailed', error);
    })
  },
  deleteGroup: ({ commit, dispatch }, payload) => {
    commit('groupEditRequest');
    groups.remove(payload).then(response => {
      commit('groupDeleteSuccess', payload);
    }).catch(error => {
      console.log(error)
      commit('groupEditFailed', error);
    })
  },
  // tenants not yet ready
  addTenant: ({ commit, dispatch }, payload) => {
    commit('groupAddRequest');
    groups.create(payload).then(() => {
      commit('groupAddSuccess');
    }).catch(error => {
      commit('groupAddFailed', error);
    })
  },
};

export default actions;
