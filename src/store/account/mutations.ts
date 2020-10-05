import { MutationTree } from 'vuex';
import { AccountInterface, UserInterface } from './state';
import Vue from 'vue';

const mutation: MutationTree<AccountInterface> = {
  loginRequest(state) {
    Vue.set(state, 'user', {});
    Vue.set(state, 'status', {loggedIn: false});
  },
  loginSuccess(state, user: UserInterface) {
    Vue.set(state, 'user', user);
    Vue.set(state, 'status', {loggedIn: true});
  },
  loginFailure(state, error) {
    Vue.set(state, 'status', { loggedIn: false, error });
  },
  logout(state) {
    Vue.set(state, 'user', {});
    Vue.set(state, 'status', { loggedIn: false });
  },
  registerRequest(state) {
    Vue.set(state, 'user', {});
    Vue.set(state, 'status', {loggedIn: false});
  },
  registerSuccess(state, user: UserInterface) {
    Vue.set(state, 'user', user);
    Vue.set(state, 'status', {loggedIn: true});
  },
  registerFailure(state, error) {
    Vue.set(state, 'status', { loggedIn: false, error });
  }
};

export default mutation;
