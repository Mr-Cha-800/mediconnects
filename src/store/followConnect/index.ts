import { Module } from 'vuex';
import { StateInterface } from '../index';
import state, { FollowConnectStateInterface } from './state';
import actions from './actions';
import getters from './getters';
import mutations from './mutations';

const followConnectModule: Module<FollowConnectStateInterface, StateInterface> = {
  namespaced: true,
  actions,
  getters,
  mutations,
  state
};

export default followConnectModule;
