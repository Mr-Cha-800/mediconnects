import { EntityTypes } from 'src/types';

export interface GroupsInterface {
  id?: string;
  name?: string;
  tenants?: number
}

export interface GroupsStateInterface {
  groups: GroupsInterface[],
  group: GroupsInterface,
  status: {
    loading: boolean,
    error?: string
  }
}

const state: GroupsStateInterface = {
  groups: [],
  group: {},
  status: {
    loading: false,
  }
};

export default state;
