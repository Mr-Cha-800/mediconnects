import { ActionTree } from 'vuex';
import { StateInterface } from '../index';
import { AccountInterface } from './state';
import * as AccountService from 'src/services/accounts.service';

const actions: ActionTree<AccountInterface, StateInterface> = {
  login({ dispatch, commit }, { user, password }) {
    commit('loginRequest', { user });

    AccountService.login(user, password)
      .then(
        ({ id, email }) => {
          commit('loginSuccess', { user: { email, id } });
          // redirect('/');
        },
        error => {
          console.log(error)
          commit('loginFailure', error);
        }
      ).catch(console.log);
  },

  logout({ commit }) {
    // userService.logout();
    commit('logout');
  },

  register({ dispatch, commit }, user) {
    commit('registerRequest', user);

    AccountService.register(user)
      .then(
        ({ id, email }) => {
          commit('registerSuccess', { user: { email, id } });
          //router.push('/login');
        },
        error => {
          commit('registerFailure', error);
        }
      );
  }
};

export default actions;
