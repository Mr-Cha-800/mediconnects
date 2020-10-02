import { GetterTree } from 'vuex';
import { StateInterface } from '../index';
import { AccountInterface } from './state';

const getters: GetterTree<AccountInterface, StateInterface> = {
  someAction (/* context */) {
    // your code
  }
};

export default getters;
