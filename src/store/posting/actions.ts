import { ActionTree } from 'vuex';
import { StateInterface } from '../index';
import { PostingStateInterface } from './state';
import * as posting from './../../services/post.service';

const actions: ActionTree<PostingStateInterface, StateInterface> = {
  addPost: ({ commit }, payload) => {
    commit('PostingRequest', payload);
    posting.post(payload).then(() => {
      commit('payloadSuccess', payload);
    }).catch(error => commit('payloadFailed', error));
  },
};

export default actions;
