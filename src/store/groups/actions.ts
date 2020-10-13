import { ActionTree } from 'vuex';
import { StateInterface } from '../index';
import * as groups from './../../services/groups.service';
import { OrgSearchQueryInterface } from 'src/services/organisations.service';
import { GroupsInterface, GroupsStateInterface } from 'src/store/groups/state';
import { Router } from 'src/router';
const actions: ActionTree<GroupsStateInterface, StateInterface> = {

  addGroup: ({ commit, dispatch }, payload) => {
    commit('groupAddRequest');
    groups.create(payload).then(() => {
      // to Avoid refresh when adding
     /* groups.getGroups(payload).then(response => {
        commit('getGroupSuccess', response);
      }) */
      // to refresh when adding
      dispatch('getgroupp', {
        scope:'account'
      })
    }).catch(error => {
      commit('groupAddFailed', error);
    })
  },
  getgroupp: ({ commit }, payload) => {
    commit('getGroupRequest');
    groups.getGroups(payload).then(response => {
      commit('getGroupSuccess', response);
    }).catch(error => {
      commit('getGroupFailed', error);
    })
  },
  updategroup: ({ commit }, payload) => {
    commit('groupAddRequest');
    groups.updatee(payload).then(() => {
      commit('groupAddSuccess');
    }).catch(error => {
      console.log(error)
      commit('groupAddFailed', error);
    })
  },
  deletegroup: ({ commit, dispatch }, payload) => {
    commit('groupAddRequest');
    groups.deletee(payload).then(response => {
      groups.getGroups({
        scope: 'account'
      }).then(response => {
        commit('getGroupSuccess', response);
      })
    }).catch(error => {
      console.log(error)
      commit('groupAddFailed', error);
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
