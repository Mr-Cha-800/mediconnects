import { GetterTree } from 'vuex';
import { StateInterface } from '../index';
import { OrgProfileInterface } from './state';

const getters: GetterTree<OrgProfileInterface, StateInterface> = {
  getOrgs: ({ orgs }) => orgs || [],
  orgMembers: ({ orgMembers }) => orgMembers || [],
  orgDetails: ({ org }) => org || {},
  status: ({ status }) => status || {},
};

export default getters;
