import { GetterTree } from 'vuex';
import { StateInterface } from '../index';
import { AccountInterface, UserInterface } from './state';

const getters: GetterTree<AccountInterface, StateInterface> = {
  isAuthenticated: ({ status: { loggedIn = false } }: AccountInterface): boolean =>  loggedIn,
  user: ({ user }: AccountInterface): UserInterface =>  user,
  status: ({ status }: AccountInterface) =>  status,
};

export default getters;
