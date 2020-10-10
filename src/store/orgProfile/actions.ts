import { ActionTree } from 'vuex';
import { StateInterface } from '../index';
import * as organizations from './../../services/organisations.service';
import { OrgSearchQueryInterface } from 'src/services/organisations.service';
import { OrganizationInterface, OrgProfileInterface } from 'src/store/orgProfile/state';
import { Router } from 'src/router';
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
      commit('orgByIdSuccess', org);
    }).catch(error => {
      commit('orgByIdFailed', error);
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

  addOrgProfile: ({ commit }, payload) => {
    commit('orgProfileAddRequest');
    organizations.add(payload).then(() => {
      commit('orgProfileAddSuccess');
      Router.back();
    }).catch(error => {
      commit('orgProfileAddFailed', error);
    })
  },

  editOrgProfile: ({ commit }, payload) => {
    commit('orgProfileEditRequest');
    organizations.edit(payload).then(() => {
      commit('orgProfileEditSuccess');
      Router.back();
    }).catch(error => {
      commit('orgProfileEditFailed', error);
    })
  },
};

export default actions;
