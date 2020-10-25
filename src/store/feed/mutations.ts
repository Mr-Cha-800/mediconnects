import { MutationTree } from 'vuex';
import Vue from 'vue';
import { PostingStateInterface } from 'src/store/feed/state';
import { SectionInterface } from './state';
const mutation: MutationTree<PostingStateInterface> = {
  getPostsRequest(state) {
    Vue.set(state, 'posts', []);
    Vue.set(state, 'status', { loading: true });
  },
  getPostsSuccess(state, postsList: PostingStateInterface[]) {
    Vue.set(state, 'posts', postsList);
    Vue.set(state, 'status', { loading: false });
  },
  getPostsFailed(state, error: string) {
    Vue.set(state, 'posts', []);
    Vue.set(state, 'status', { loading: false, error });
  },
};

export default mutation;
