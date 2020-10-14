import { ActionTree } from 'vuex';
import { StateInterface } from '../index';
import { PostingStateInterface } from './state';
import * as posting from './../../services/post.service';
import * as userProfile from './../../services/userProfile.service';

const actions: ActionTree<PostingStateInterface, StateInterface> = {
  addPost: ({ commit }, payload) => {
    commit('PostingRequest', payload);
    posting.post(payload).then(() => {
      commit('PostingSuccess', payload);
    }).catch(error => commit('PostingFailed', error));
  },
  addProfilePost: ({ commit }, payload) => {
    commit('PostingRequest', payload);
    posting.post(payload).then(({id: post}) => {
      userProfile.addSection({post}).then(() => {
        commit('PostingSuccess', payload);
      }).catch(error => commit('PostingFailed', error));
    }).catch(error => commit('PostingFailed', error));
  },
};

export default actions;
