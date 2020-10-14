import { MutationTree } from 'vuex';
import Vue from 'vue';
import { PostingStateInterface } from 'src/store/posting/state';

const mutation: MutationTree<PostingStateInterface> = {
  PostingRequest(state, post) {
    Vue.set(state, 'posting', { post, status: { loading: true } });
  },

  PostingSuccess(state) {
    Vue.set(state, 'posting', { ...state.posting, status: { loading: false } });
  },

  PostingFailed(state, error) {
    Vue.set(state, 'posting', { ...state.posting, status: { loading: false, error } });
  },
};

export default mutation;
