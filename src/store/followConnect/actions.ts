import { ActionTree } from 'vuex';
import { StateInterface } from '../index';
import { FollowConnectStateInterface } from './state';
import * as followConnect from './../../services/followConnect.service';

const actions: ActionTree<FollowConnectStateInterface, StateInterface> = {
  follow: ({ commit }, { entity, type }) => {
    commit('FollowRequest');
    followConnect.follow(entity, type).then(() => {
      commit('FollowSuccess');
    }).catch(error => commit('FollowFailed', error));
  },

  connect: ({ commit }, {entity, type, message}) => {
    commit('ConnectRequest');
    followConnect.connect(entity, type, message).then(() => {
      commit('ConnectSuccess');
    }).catch(error => commit('ConnectFailed', error));
  },

  getConnectRequests: ({ commit }) => {
    commit('ConnectRequestsRequest');
    followConnect.connectRequests().then(connectsRequests => {
      commit('ConnectRequestsSuccess', connectsRequests);
    }).catch(error => commit('ConnectRequestsFailed', error));
  },

  acceptConnect: ({ commit }, requestId: string) => {
    commit('ConnectRequest');
    followConnect.acceptConnect(requestId).then(() => {
      commit('ConnectSuccess');
    }).catch(error => commit('ConnectFailed', error));
  },

  rejectConnect: ({ commit }, requestId: string) => {
    commit('ConnectRequest');
    followConnect.rejectConnect(requestId).then(() => {
      commit('ConnectSuccess');
    }).catch(error => commit('ConnectFailed', error));
  },
};

export default actions;
