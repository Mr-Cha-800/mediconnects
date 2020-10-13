
export interface GroupsInterface {
  id?: string;
  name?: string;
  description?: string;
  avatar?: MediaObject;
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
