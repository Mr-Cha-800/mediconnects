import { GetterTree } from 'vuex';
import { StateInterface } from '../index';
import { UserProfileStateInterface } from './state';
import { avatarMediaObject } from 'src/helpers/parseMediaOject';

const getters: GetterTree<UserProfileStateInterface, StateInterface> = {
  profile: ({ profile }) => profile,
  status: ({ status }) => status,
  getAvatar: ({ profile: { avatar } }) => avatarMediaObject(avatar),
};

export default getters;
