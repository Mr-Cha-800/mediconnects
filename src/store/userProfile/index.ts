import { Module } from 'vuex';
import { StateInterface } from '../index';
import state, { UserProfileStateInterface } from './state';
import actions from './actions';
import getters from './getters';
import mutations from './mutations';

const userProfileModule: Module<UserProfileStateInterface, StateInterface> = {
  namespaced: true,
  actions,
  getters,
  mutations,
  state
};

export default userProfileModule;
