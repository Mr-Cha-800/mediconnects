import { ActionTree } from 'vuex';
import { StateInterface } from '../index';
import { AccountInterface } from './state';
import * as AccountService from 'src/services/accounts.service';
import * as CometChat from 'src/services/cometChat.service';
import { Router } from 'src/router';

const actions: ActionTree<AccountInterface, StateInterface> = {
  login({ commit }, { user, password }) {
    commit('loginRequest');
    AccountService.login(user, password)
      .then(
        (user) => {
          CometChat.login(user.id).then(() => {
            commit('loginSuccess', user);
            return Router.push({name: 'home'});
          }).catch(({ message }) => commit('loginFailure', message));
        }
      ).catch(error => commit('loginFailure', error));
  },

  logout({ commit }) {
    AccountService.logout();
    CometChat.logout();
    commit('logout');
    return Router.push({name: 'login'});
  },

  register({ dispatch, commit }, { user, password }) {
    commit('registerRequest');
    AccountService.register(user, password)
      .then(
        async (user) => {
          await CometChat.createUser(user.id, user.email);
          await CometChat.login(user.id);
          commit('registerSuccess', user);
          Router.push({name: 'home'})
          return Router.push({name: 'MyProfileUpdate'});
        },
        error => {
          commit('registerFailure', error);
        });
  }
};

export default actions;
