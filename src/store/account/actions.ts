import { ActionTree } from 'vuex';
import { StateInterface } from '../index';
import { AccountInterface } from './state';
import * as AccountService from 'src/services/accounts.service';

const actions: ActionTree<AccountInterface, StateInterface> = {
  login({ dispatch, commit }, { username, password }) {
    commit('loginRequest', { username });

    AccountService.login(username, password)
      .then(
        user => {
          commit('loginSuccess', user);
          // redirect('/');
        },
        error => {
          commit('loginFailure', error);
        }
      );
  },

  logout({ commit }) {
    // userService.logout();
    commit('logout');
  },

  register({ dispatch, commit }, user) {
    commit('registerRequest', user);

    AccountService.register(user)
      .then(
        user => {
          commit('registerSuccess', user);
          //router.push('/login');
        },
        error => {
          commit('registerFailure', error);
        }
      );
  }
};

export default actions;
