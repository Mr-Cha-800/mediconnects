import { GetterTree } from 'vuex';
import { StateInterface } from '../index';
import { CallingStateInterface } from 'src/store/calling/state';

const getters: GetterTree<CallingStateInterface, StateInterface> = {
  status: ({ status }) => status || {},
  call: ({ call }) => call || {},
};

export default getters;
