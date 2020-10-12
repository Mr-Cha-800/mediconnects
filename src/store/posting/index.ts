import { Module } from 'vuex';
import { StateInterface } from '../index';
import state, { PostingStateInterface } from './state';
import actions from './actions';
import getters from './getters';
import mutations from './mutations';

const postingModule: Module<PostingStateInterface, StateInterface> = {
  namespaced: true,
  actions,
  getters,
  mutations,
  state
};

export default postingModule;
