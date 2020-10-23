import { Module } from 'vuex';
import { StateInterface } from '../index';
import state, { PostInterface } from './state';
import actions from './actions';
import getters from './getters';
import mutations from './mutations';

const feedPostsModule: Module<PostInterface, StateInterface> = {
  namespaced: true,
  actions,
  getters,
  mutations,
  state
};

export default feedPostsModule;
