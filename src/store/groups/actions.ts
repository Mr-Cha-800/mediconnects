import { ActionTree } from 'vuex';
import { StateInterface } from '../index';
import * as groups from './../../services/groups.service';
import * as CometChat from 'src/services/cometChat.service';
import { GroupsStateInterface } from 'src/store/groups/state';
import { Router } from 'src/router';
import { LoadingTypesEnum } from 'src/store/posting/state';

const actions: ActionTree<GroupsStateInterface, StateInterface> = {

  addGroup: ({ commit, dispatch }, payload) => {
    commit('postingModule/PostingRequest', {type: LoadingTypesEnum.GROUP, title: payload.title}, { root: true });
    Router.back();
    groups.create(payload).then(groupDetails => {
      commit('postingModule/PostingSuccess', null, { root: true })
      commit('groupAddSuccess');
      dispatch('getGroups');
    }).catch(error => {
      commit('groupEditFailed', error);
    });
  },
  getGroups: ({ commit }, payload) => {
    commit('getGroupsRequest');
    groups.getGroups(payload).then(response => {
      commit('getGroupsSuccess', response);
    }).catch(error => {
      commit('getGroupsFailed', error);
    });
  },
  getGroup: ({ commit }, id: string) => {
    commit('orgByIdRequest');
    groups.getById(id).then(response => {
      commit('orgByIdSuccess', response);
    }).catch(error => {
      commit('orgByIdFailed', error);
    });
  },
  updateGroup: ({ commit, dispatch }, payload) => {
    commit('postingModule/PostingRequest', {type: LoadingTypesEnum.GROUP, title: payload.title}, { root: true });
    Router.back();
    groups.update(payload).then(() => {
    commit('postingModule/PostingSuccess', null, { root: true })
    commit('groupUpdateSuccess', payload);
      dispatch('getGroups');
      Router.back();
    }).catch(error => {
      commit('groupEditFailed', error);
    });
  },
  deleteGroup: ({ commit, dispatch }, payload) => {
    commit('groupEditRequest');
    groups.remove(payload).then(response => {
      commit('groupDeleteSuccess', payload);
      dispatch('getGroups');
    }).catch(error => {
      console.log(error);
      commit('groupEditFailed', error);
    });
  },
  // tenants add not yet ready, causing 500 error
  addTenant: ({ commit, dispatch }, { groupId, payload }) => {
    commit('getTenantsRequest');
    groups.addTenanttoGroup(groupId, payload).then(response => {
      CometChat.addMemberToGroup(groupId, payload.tenant);
      // waiting 100ms for groups to get indexed
      setTimeout(function(){ dispatch('getTenants', groupId)}, 500);
    }).catch(error => {
      commit('getTenantsFailed', error);
    });
  },
  deleteTenant: ({ commit, dispatch }, payload) => {
    commit('getTenantsRequest');
    groups.removeTenant(payload.idGroup, payload.idTenant).then(response => {
      CometChat.removeMemberFromGroup(payload.idGroup, payload.idTenant);
      // waiting 100ms for groups to get indexed
      setTimeout(function(){ dispatch('getTenants', payload.idGroup)} , 100);
    }).catch(error => {
      commit('getTenantsFailed', error);
    });
  },
  // this works
  getTenants: ({ commit }, payload) => {
    commit('getTenantsRequest');
    groups.getTenants(payload).then(response => {
      commit('getTenantsSuccess', response);
    }).catch(error => {
      commit('getTenantsFailed', error);
    });
  }
};

export default actions;
