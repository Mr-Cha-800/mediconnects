import { GetterTree } from 'vuex';
import { StateInterface } from '../index';
import { FollowConnectStateInterface } from './state';

const getters: GetterTree<FollowConnectStateInterface, StateInterface> = {
  getConnectsRequests: ({ connectsRequests }) => connectsRequests || [],
  status: ({ status }) => status || {},
};

export default getters;
