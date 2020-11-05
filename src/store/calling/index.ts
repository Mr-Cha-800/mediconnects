import { Module } from 'vuex';
import { StateInterface } from '../index';
import state, { CallingStateInterface } from './state';
import actions from './actions';
import getters from './getters';
import mutations from './mutations';

const callingModule: Module<CallingStateInterface, StateInterface> = {
  namespaced: true,
  actions,
  getters,
  mutations,
  state
};

export default callingModule;
