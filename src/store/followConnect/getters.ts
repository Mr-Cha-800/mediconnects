import { GetterTree } from 'vuex';
import { StateInterface } from '../index';
import { FollowConnectStateInterface } from './state';
import { EntityTypes } from 'src/types';

const getters: GetterTree<FollowConnectStateInterface, StateInterface> = {
  userConnectsRequests: ({ connectsRequests }) =>
    connectsRequests.filter(({type}) => type === EntityTypes.USER) || [],
  status: ({ status }) => status || {},
};

export default getters;
