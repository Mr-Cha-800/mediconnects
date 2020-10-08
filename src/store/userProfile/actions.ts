import { ActionTree } from 'vuex';
import { StateInterface } from '../index';
import { UserProfileStateInterface } from './state';
import * as userProfile from './../../services/userProfile.service';
import * as AccountService from 'src/services/accounts.service';
import { Router } from 'src/router';

const actions: ActionTree<UserProfileStateInterface, StateInterface> = {
  getProfile: ({ commit }) => {
    commit('userProfileRequest');
    userProfile.get().then(userDetails => {
      commit('userProfileSuccess', userDetails);
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
  },
};

export default actions;
