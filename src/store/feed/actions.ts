import { ActionTree } from 'vuex';
import { StateInterface } from '../index';
import { PostInterface } from './state';
import * as feed from './../../services/feed.service';
import * as userProfile from './../../services/userProfile.service';
import {Router} from 'src/router';

const actions: ActionTree<PostInterface, StateInterface> = {
  getPosts: ({ commit }) => {
    commit('getPostsRequest');
    feed.getPosts().then(response => {
      commit('getPostsSuccess', response);
    }).catch(error => {
      commit('getPostsFailed', error);
    });
  },
};

export default actions;
