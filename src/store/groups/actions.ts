import { ActionTree } from 'vuex';
import { StateInterface } from '../index';
import * as groups from './../../services/groups.service';
import { GroupsStateInterface } from 'src/store/groups/state';
import { Router } from 'src/router';
const actions: ActionTree<GroupsStateInterface, StateInterface> = {

  addGroup: ({ commit, dispatch }, payload) => {
    commit('groupEditRequest');
    groups.create(payload).then(() => {
      commit('groupAddSuccess');
      dispatch('getGroups')
      Router.back();
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
  getGroup: ({ commit }, id: string) => {
    commit('orgByIdRequest');
    groups.getById(id).then(response => {
      commit('orgByIdSuccess', response);
    }).catch(error => {
      commit('orgByIdFailed', error);
    })
  },
  updateGroup: ({ commit, dispatch }, payload) => {
    commit('groupEditRequest');
    groups.update(payload).then(() => {
      commit('groupUpdateSuccess', payload);
      dispatch('getGroups')
      Router.back();
    }).catch(error => {
      commit('groupEditFailed', error);
    })
  },
  deleteGroup: ({ commit, dispatch }, payload) => {
    commit('groupEditRequest');
    groups.remove(payload).then(response => {
      commit('groupDeleteSuccess', payload);
      dispatch('getGroups')
    }).catch(error => {
      console.log(error)
      commit('groupEditFailed', error);
    })
  },
  // tenants add not yet ready, causing 500 error
  addTenant: ({ commit, dispatch }, payload) => {
    // commit('groupAddRequest');
    groups.addTenanttoGroup(payload.groupId, payload.payload).then(response=> {
console.log(response)
    }).catch(error => {
     // commit('groupAddFailed', error);
    })
  },
  // this works
  getTenants: ({ commit }, payload) => {
    commit('getGroupsRequest');
    groups.getTenants(payload).then(response => {
      commit('getGroupsSuccess', response);
    }).catch(error => {
      commit('getGroupsFailed', error);
    })
  },
};

export default actions;
