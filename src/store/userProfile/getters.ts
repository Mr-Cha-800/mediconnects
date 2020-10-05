import { GetterTree } from 'vuex';
import { StateInterface } from '../index';
import { UserProfileInterface } from './state';

const getters: GetterTree<UserProfileInterface, StateInterface> = {
  getAvatar: ({ avatar }) => avatar,
};

export default getters;
