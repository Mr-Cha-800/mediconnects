import { ActionTree } from 'vuex';
import { StateInterface } from '../index';
import { FollowConnectStateInterface } from './state';
import * as followConnect from './../../services/followConnect.service';

const actions: ActionTree<FollowConnectStateInterface, StateInterface> = {
  follow: ({ commit }, { entity, type }) => {
    commit('FollowRequest', { entity });
    followConnect.follow(entity, type).then(() => {
      commit('FollowSuccess', { entity });
      commit('userProfileModule/IncreaseUserFollowers', {}, { root: true });
    }).catch(error => commit('FollowFailed', { entity, error }));
  },

  unFollow: ({ commit }, { entity }) => {
    commit('unFollowRequest', { entity });
    followConnect.unFollow(entity).then(() => {
      commit('unFollowSuccess', { entity });
      commit('orgProfileModule/DecreaseOrgFollowers', {}, { root: true });
      commit('userProfileModule/DecreaseUserFollowers', {}, { root: true });
    }).catch(error => commit('unFollowFailed', { entity, error }));
  },

  connect: ({ commit }, {entity, type, message}) => {
    commit('ConnectRequest', { entity });
    followConnect.connect(entity, type, message).then(() => {
      commit('ConnectSuccess', { entity });
    }).catch(error => commit('ConnectFailed', { entity, error }));
  },

  getConnectRequests: ({ commit }) => {
    commit('ConnectRequestsRequest');
    followConnect.connectRequests().then(connectsRequests => {
      commit('ConnectRequestsSuccess', connectsRequests);
    }).catch(error => commit('ConnectRequestsFailed', error));
  },

  acceptConnect: ({ commit }, requestId: string) => {
    commit('AcceptRequest', { requestId });
    followConnect.acceptConnect(requestId).then(() => {
      commit('AcceptSuccess', { requestId });
    }).catch(error => commit('AcceptFailed', { requestId, error }));
  },

  rejectConnect: ({ commit }, requestId: string) => {
    commit('RejectRequest', { requestId });
    followConnect.rejectConnect(requestId).then(() => {
      commit('RejectSuccess', { requestId });
    }).catch(error => commit('RejectFailed', { requestId, error }));
  },
};

export default actions;
