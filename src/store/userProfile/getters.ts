import { GetterTree } from 'vuex';
import { StateInterface } from '../index';
import { UserProfileStateInterface } from './state';
import { avatarMediaObject } from 'src/helpers/parseMediaOject';

const getters: GetterTree<UserProfileStateInterface, StateInterface> = {
  profile: ({ profile }) => profile,
  isMe: ({ profile: {id: myId} }) => (userId?: string): boolean => userId === myId,
  user: ({ user }) => user,
  users: ({ users }) => users,
  status: ({ status }) => status,
  userStatus: ({ userStatus }) => userStatus,
  getAvatar: ({ profile: { avatar } }) => avatarMediaObject(avatar),
};

export default getters;
