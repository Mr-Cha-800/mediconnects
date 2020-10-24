import { GetterTree } from 'vuex';
import { StateInterface } from '../index';
import { PostingStateInterface } from './state';

const getters: GetterTree<PostingStateInterface, StateInterface> = {
  posts: ({ posts }) => {
    const p = [...posts];
    return p.reverse();
  },
  status: ({ status }) => status || {},
};

export default getters;
