import { GetterTree } from 'vuex';
import { StateInterface } from '../index';
import { PostingStateInterface } from './state';

const getters: GetterTree<PostingStateInterface, StateInterface> = {
  postingStatus: ({ posting: {status} = {} }) => status || {},
  postingContent: ({ posting: {post} = {} }) => post || {},
  sectionDetails: ({ section }) => section || {}
};

export default getters;
