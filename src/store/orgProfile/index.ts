import { Module } from 'vuex';
import { StateInterface } from '../index';
import state, { OrgProfileInterface } from './state';
import actions from './actions';
import getters from './getters';
import mutations from './mutations';

const orgProfileModule: Module<OrgProfileInterface, StateInterface> = {
  namespaced: true,
  actions,
  getters,
  mutations,
  state
};

export default orgProfileModule;
