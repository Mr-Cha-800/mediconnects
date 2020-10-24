import { GetterTree } from 'vuex';
import { StateInterface } from '../index';
import { PostingStateInterface } from './state';

const getters: GetterTree<PostingStateInterface, StateInterface> = {
  posts: ({ posts }) => posts || [],
  status: ({ status }) => status || {},
};

export default getters;
