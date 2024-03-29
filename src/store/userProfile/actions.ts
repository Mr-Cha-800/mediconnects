import { ActionTree } from 'vuex';
import { StateInterface } from '../index';
import { UserProfileStateInterface } from './state';
import * as userProfile from './../../services/userProfile.service';
import { UsersSearchQueryInterface } from 'src/services/userProfile.service';
import * as AccountService from 'src/services/accounts.service';
import * as CometChat from 'src/services/cometChat.service';
import { Router } from 'src/router';
import { LoadingTypesEnum } from 'src/store/posting/state';

const actions: ActionTree<UserProfileStateInterface, StateInterface> = {
  search: ({ commit }, payload: UsersSearchQueryInterface) => {
    commit('SearchRequestsRequest');
    userProfile.search(payload).then(profileList => {
      commit('SearchRequestsSuccess', profileList);
    }).catch(error => {
      commit('SearchRequestsFailed', error);
    })
  },

  getUser: ({ commit }, id) => {
    commit('UserProfileRequest');
    userProfile.user(id).then(userDetails => {
      commit('UserProfileSuccess', userDetails);
      if (userDetails && userDetails.followed) {
        commit('followConnectModule/FollowSuccess', { entity: id }, {root: true});
      }
      if (userDetails && userDetails.connected) {
        commit('followConnectModule/ConnectSuccess', { entity: id }, {root: true});
      }
    }).catch(error => {
      commit('UserProfileFailed', error);
    })
  },

  getMyProfile: ({ commit, dispatch }) => {
    commit('MyProfileRequest');
    userProfile.get().then(userDetails => {
      dispatch('callingModule/addCallListener', userDetails, {root: true});
      commit('MyProfileSuccess', userDetails);
    }).catch(error => commit('MyProfileFailed', error));
  },

  updateProfile: ({ commit, dispatch }, payload) => {
    commit('MyProfileUpdateRequest');
    userProfile.update(payload).then(userDetails => {
      // refresh the token, After Updating profile
      const { refreshToken = {} } = userDetails
      AccountService.handleRefreshTokenResponse(refreshToken);
      commit('MyProfileUpdateSuccess', userDetails);
      Router.push({name: 'MyProfile'});
    }).catch(error => commit('MyProfileUpdateFailed', error));
  },
  filterSectionss: ({ commit }, payload) =>{
    console.log('Updated + ',payload);
    commit('updateFilter',payload)
  },
  addSection: ({commit},payload)=>{
    commit('AddNewSection',payload)
  },
  getContacts: ({ commit, dispatch }) => {
    userProfile.getContacts().then(contactList => {
      commit('getContacts', contactList);
    }).catch(error => commit('MyProfileFailed', error));
  },
  //section groups actions
  addSectionGroup:({ commit },payload) => {
    userProfile.addSectionGroup( payload ).then((sectionGroup :string ) => {
        commit('sectionGroupAdded', payload);
    });
  }
}

export default actions;
