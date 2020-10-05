import { ActionTree } from 'vuex';
import { StateInterface } from '../index';
import * as organizations from './../../services/organisations.service';
import { OrgSearchQueryInterface } from 'src/services/organisations.service';
import { OrgProfileInterface } from 'src/store/orgProfile/state';

const actions: ActionTree<OrgProfileInterface, StateInterface> = {
  getOrgsList: ({ commit }, payload: OrgSearchQueryInterface) => {
    commit('orgSearchRequest');
    organizations.search(payload).then(orgsList => {
      commit('orgSearchSuccess', orgsList);
    }).catch(error => {
      commit('orgSearchFailed', error);
    })
  },
};

export default actions;
