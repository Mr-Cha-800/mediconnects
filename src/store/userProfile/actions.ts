import { ActionTree } from 'vuex';
import { StateInterface } from '../index';
import { UserProfileStateInterface } from './state';
import * as userProfile from './../../services/userProfile.service';
import { OrgProfileQueryInterface } from './../../services/userProfile.service';
import * as AccountService from 'src/services/accounts.service';
import { Router } from 'src/router';

const actions: ActionTree<UserProfileStateInterface, StateInterface> = {
  search: ({ commit }, payload: OrgProfileQueryInterface) => {
    commit('SearchRequestsRequest');
    userProfile.search(payload).then(profileList => {
      commit('SearchRequestsSuccess', profileList);
    }).catch(error => {
      commit('SearchRequestsSuccess', error);
    })
  },
  getProfile: ({ commit }) => {
    commit('userProfileRequest');
    userProfile.get().then(userDetails => {
      commit('userProfileSuccess', userDetails);
    }).catch(error => commit('userProfileFailed', error));
  },
  getPublicProfile: ({ commit }, {id}) => {
    commit('userProfileRequest');
    userProfile.getPublic(id).then(userDetails => {
      commit('userProfileSuccess', userDetails);
      if (userDetails && userDetails.followed) {
        commit('followConnectModule/FollowSuccess', { entity: id }, {root: true});
      }
    }).catch(error => commit('userProfileFailed', error));
  },

  updateProfile: ({ commit }, payload) => {
    commit('userProfileUpdateRequest');
    userProfile.update(payload).then(userDetails => {
      // refresh the token, After Updating profile
      AccountService.refreshToken().then(user => {
        commit('userProfileUpdateSuccess', userDetails);
        Router.back();
      }).catch(error => commit('userProfileUpdateFailed', error));
    }).catch(error => commit('userProfileUpdateFailed', error));
  }
};

export default actions;
