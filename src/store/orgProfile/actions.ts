import { ActionTree } from 'vuex';
import { StateInterface } from '../index';
import * as organizations from './../../services/organisations.service';
import { OrgSearchQueryInterface } from 'src/services/organisations.service';
import { OrganizationInterface, OrgProfileInterface } from 'src/store/orgProfile/state';
import { Router } from 'src/router';
import { LoadingTypesEnum } from 'src/store/posting/state';
import { OrgSearchScopeEnum } from './../../services/organisations.service';
const actions: ActionTree<OrgProfileInterface, StateInterface> = {
  search: ({ commit }, payload: OrgSearchQueryInterface) => {
    commit('orgSearchRequest');
    organizations.search(payload).then(orgsList => {
      commit('orgSearchSuccess', orgsList);
    }).catch(error => {
      commit('orgSearchFailed', error);
    })
  },
  getOrg: ({ commit }, id: string) => {
    commit('orgByIdRequest');
    organizations.getById(id).then(org => {
      if (org && org.followed) {
        commit('followConnectModule/FollowSuccess', { entity: id }, {root: true});
      }
      if (org && org.connected) {
        commit('followConnectModule/ConnectSuccess', { entity: id }, {root: true});
      }
      commit('orgByIdSuccess', org);
    }).catch(error => {
      commit('orgByIdFailed', error);
    })
  },

  getOrgMembers: ({ commit }, id: string) => {
    commit('orgMembersRequest');
    organizations.getMembers(id).then(org => {
      commit('orgMembersSuccess', org);
    }).catch(error => {
      commit('orgMembersFailed', error);
    })
  },

  getPublicOrg: ({ commit }, id: string) => {
    commit('orgByIdRequest');
    organizations.getPublicById(id).then(org => {
      commit('orgByIdSuccess', org);
      if (org && org.followed) {
        commit('followConnectModule/FollowSuccess', { entity: id }, {root: true});
      }
    }).catch(error => {
      commit('orgByIdFailed', error);
    })
  },

  addOrgProfile: ({ commit, dispatch }, payload) => {
    commit('postingModule/PostingRequest', {type: LoadingTypesEnum.ORG, title: payload.title}, { root: true });
    Router.back();
    organizations.add(payload).then(() => {
      commit('postingModule/PostingSuccess', null, { root: true })
      commit('orgProfileAddSuccess');
      dispatch('search', {scope: OrgSearchScopeEnum.ACCOUNT});
    }).catch(error => {
      commit('orgProfileAddFailed', error);
      commit('postingModule/PostingFailed', null, { root: true });
    })
  },

  editOrgProfile: ({ commit }, payload) => {
    commit('postingModule/PostingRequest', {type: LoadingTypesEnum.ORG, title: payload.title}, { root: true });
    Router.back();
    organizations.edit(payload).then(() => {
      commit('postingModule/PostingSuccess', null, { root: true })
      commit('orgProfileEditSuccess');
    }).catch(error => {
      commit('orgProfileEditFailed', error);
      commit('postingModule/PostingFailed', null, { root: true });
    })
  },
};

export default actions;
