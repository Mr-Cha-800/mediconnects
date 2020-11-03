import { GetterTree } from 'vuex';
import { StateInterface } from '../index';
import { PostingStateInterface } from './state';

const getters: GetterTree<PostingStateInterface, StateInterface> = {
  postingStatus: ({ posting: {status} = {} }) => status || {},
  status: ({ status }) => status || {},
  postingContent: ({ posting: {payload} = {} }) => payload || {},
  sectionDetails: ({ section }) => section || {}
};

export default getters;
