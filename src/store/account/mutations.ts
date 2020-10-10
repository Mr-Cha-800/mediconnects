import { MutationTree } from 'vuex';
import { AccountInterface, UserInterface } from './state';
import Vue from 'vue';

const mutation: MutationTree<AccountInterface> = {
  loginRequest(state) {
    Vue.set(state, 'user', {});
    Vue.set(state, 'status', {loggedIn: false, loading: true});
  },
  loginSuccess(state, user: UserInterface) {
    Vue.set(state, 'user', user);
    Vue.set(state, 'status', {loggedIn: true, loading: false});
  },
  loginFailure(state, error) {
    Vue.set(state, 'status', { loggedIn: false, loading: false, error });
  },
  logout(state) {
    Vue.set(state, 'user', {});
    Vue.set(state, 'status', { loggedIn: false });
  },
  registerRequest(state) {
    Vue.set(state, 'user', {});
    Vue.set(state, 'status', {loggedIn: false, loading: true});
  },
  registerSuccess(state, user: UserInterface) {
    Vue.set(state, 'user', user);
    Vue.set(state, 'status', {loggedIn: true, loading: false});
  },
  registerFailure(state, error) {
    Vue.set(state, 'status', { loggedIn: false, error, loading: false });
  }
};

export default mutation;
