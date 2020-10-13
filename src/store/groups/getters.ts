import { GetterTree } from 'vuex';
import { StateInterface } from '../index';
import { GroupsStateInterface } from './state';

const getters: GetterTree<GroupsStateInterface, StateInterface> = {
  groups: ({ groups }) => groups || [],
  group: ({ group }) => group || {},
  status: ({ status }) => status || {},
};

export default getters;
