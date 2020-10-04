import { MutationTree } from 'vuex';
import { AccountInterface } from './state';

const mutation: MutationTree<AccountInterface> = {
  loginRequest(state, user) {
    console.log(state, user)
    state = { status: { loggingIn: true }, user };
  },
  loginSuccess(state, user) {
    state = { status: { loggedIn: true }, ...user };
  },
  loginFailure(state) {
    state = { status: {}, user: {} };
  },
  logout(state) {
    state = { status: {}, user: {} };
  },
  registerRequest(state, user) {
    state = { status: { registering: true }, user };
  },
  registerSuccess(state, user) {
    state = { status: {}, ...user };
  },
  registerFailure(state, error) {
    state = { status: {}, user: {} };
  }
};

export default mutation;
