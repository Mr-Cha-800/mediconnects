import { Module } from 'vuex';
import { StateInterface } from '../index';
import state, { UserProfileInterface } from './state';
import actions from './actions';
import getters from './getters';
import mutations from './mutations';

const userProfileModule: Module<UserProfileInterface, StateInterface> = {
  namespaced: true,
  actions,
  getters,
  mutations,
  state
};

export default userProfileModule;
