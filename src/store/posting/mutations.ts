import { MutationTree } from 'vuex';
import Vue from 'vue';
import { PostingStateInterface } from 'src/store/posting/state';
import { SectionInterface } from './state';
const mutation: MutationTree<PostingStateInterface> = {
  PostingRequest(state, payload) {
    Vue.set(state, 'posting', { payload, status: { loading: true } });
  },

  PostingSuccess(state) {
    Vue.set(state, 'posting', { ...state.posting, status: { loading: false } });
  },

  PostingFailed(state, error) {
    Vue.set(state, 'posting', { ...state.posting, status: { loading: false, error } });
  },
  sectionByIdRequest(state) {
    Vue.set(state, 'section', {});
    Vue.set(state, 'status', { loading: true });
  },
  sectionByIdSuccess(state, section: SectionInterface) {
    Vue.set(state, 'section', section);
    Vue.set(state, 'status', { loading: false });
  },
  sectionByIdFailed(state, error: string) {
    Vue.set(state, 'section', {});
    Vue.set(state, 'status', { loading: false, error });
  },
};

export default mutation;
