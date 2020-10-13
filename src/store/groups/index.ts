import { Module } from 'vuex';
import { StateInterface } from '../index';
import state, { GroupsStateInterface } from './state';
import actions from './actions';
import getters from './getters';
import mutations from './mutations';

const GroupsModule: Module<GroupsStateInterface, StateInterface> = {
  namespaced: true,
  actions,
  getters,
  mutations,
  state
};

export default GroupsModule;
