import { ActionTree } from 'vuex';
import { StateInterface } from '../index';
import { UserProfileInterface } from './state';
import * as userProfile from './../../services/userProfile.service';

const actions: ActionTree<UserProfileInterface, StateInterface> = {
  getUserProfile: ({ commit }, id) => {
    userProfile.get(id).then(userDetails => {
      commit('userProfileSuccess', userDetails);
    })
  }
};

export default actions;
