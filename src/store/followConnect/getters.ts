import { GetterTree } from 'vuex';
import { StateInterface } from '../index';
import { FollowConnectStateInterface } from './state';
import { EntityTypes } from 'src/types';

const getters: GetterTree<FollowConnectStateInterface, StateInterface> = {
  userConnectsRequests: ({ connectsRequests }) =>
    connectsRequests.filter(({type}) => type === EntityTypes.USER) || [],
  orgConnectsRequests: ({ connectsRequests }) => (orgId: string) =>
    connectsRequests.filter(({entity: {id}}) => id === orgId) || [],
  status: ({ status }) => status || {},
  requestStatus: ({ requestStatus }) => (id: string) => requestStatus[id] || {},
  followConnectStatus: ({ followConnectStatus }) => (id: string) => followConnectStatus[id] || {},
};

export default getters;
