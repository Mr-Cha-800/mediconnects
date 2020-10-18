import { ActionTree } from 'vuex';
import { StateInterface } from '../index';
import { PostingStateInterface } from './state';
import * as posting from './../../services/post.service';
import * as userProfile from './../../services/userProfile.service';
import {Router} from 'src/router';

const actions: ActionTree<PostingStateInterface, StateInterface> = {
  addPost: ({ commit }, payload) => {
    commit('PostingRequest', payload);
    posting.post(payload).then(() => {
      commit('PostingSuccess', payload);
    }).catch(error => commit('PostingFailed', error));
  },
  addProfilePost: ({ commit }, payload) => {
    commit('PostingRequest', payload);
    posting.post(payload).then(({id: post}) => {
      userProfile.addSection({post}).then(() => {
        commit('PostingSuccess', payload);
      }).catch(error => commit('PostingFailed', error));
    }).catch(error => commit('PostingFailed', error));
  },
  editProfileSection: ({ commit, dispatch }, payload) => {
    commit('PostingRequest', payload);
    posting.editSection(payload).then(({id: post})  => {
      userProfile.editSection(payload.id).then(() => {
        commit('PostingSuccess', payload);
        dispatch(`userProfileModule/getMyProfile`, null, { root: true });
        Router.back();
      }).catch(error => commit('PostingFailed', error));
    }).catch(error => commit('PostingFailed', error));
  },
  deleteSection: ({ commit,dispatch }, payload) => {
      userProfile.deleteSection(payload).then(() => {
     dispatch(`userProfileModule/getMyProfile`, null, { root: true });
    }).catch(error => commit('PostingFailed', error));
  },
  MoveUpSection: ({ commit, dispatch }, payload) => {
      userProfile.changeOrderUP(payload.id,payload.weight).then(() => {
        dispatch(`userProfileModule/getMyProfile`, null, { root: true });
      }).catch(error => commit('PostingFailed', error));
  },
  MoveDownSection: ({ commit, dispatch }, payload) => {
      userProfile.changeOrderDown(payload.id,payload.weight).then(() => {
        dispatch(`userProfileModule/getMyProfile`, null, { root: true });
      }).catch(error => commit('PostingFailed', error));
  },


};

export default actions;
