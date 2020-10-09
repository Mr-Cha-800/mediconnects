import { GetterTree } from 'vuex';
import { StateInterface } from '../index';
import { UserProfileStateInterface } from './state';
import { avatarMediaObject } from 'src/helpers/parseMediaOject';
import { EntityTypes } from 'src/types';

const getters: GetterTree<UserProfileStateInterface, StateInterface> = {
  userConnectsRequests: ({ profiles }) =>
  profiles.filter(({type}) => type === EntityTypes.USER) || [],
  profile: ({ profile }) => profile,
  status: ({ status }) => status,
  getAvatar: ({ profile: { avatar } }) => avatarMediaObject(avatar),
};

export default getters;
