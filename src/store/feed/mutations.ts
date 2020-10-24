import { MutationTree } from 'vuex';
import Vue from 'vue';
import { PostInterface } from 'src/store/feed/state';
import { SectionInterface } from './state';
const mutation: MutationTree<PostInterface> = {
  getPostsRequest(state) {
    Vue.set(state, 'posts', []);
    Vue.set(state, 'status', { loading: true });
  },
  getPostsSuccess(state, postsList: PostInterface[]) {
    Vue.set(state, 'posts', postsList);
    Vue.set(state, 'status', { loading: false });
  },
  getPostsFailed(state, error: string) {
    Vue.set(state, 'posts', []);
    Vue.set(state, 'status', { loading: false, error });
  },
};

export default mutation;
