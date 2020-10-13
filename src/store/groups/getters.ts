import { GetterTree } from 'vuex';
import { StateInterface } from '../index';
import { GroupsStateInterface } from './state';

const getters: GetterTree<GroupsStateInterface, StateInterface> = {
  getGroups: ({ groups }) => groups || [],
  getGroup: ({ group }) => group || {},
  status: ({ status }) => status || {},
};

export default getters;
