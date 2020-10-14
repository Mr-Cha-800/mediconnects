
export interface GroupsInterface {
  id?: string;
  name?: string;
  description?: string;
  avatar?: MediaObject;
  tenants?: number
}

export interface TenantsInterface {
  id?: string;
  /* firstName?: string;
  lastName?: string; */
}
export interface GroupsStateInterface {
  groups: GroupsInterface[],
  tenants: TenantsInterface[],
  group: GroupsInterface,
  status: {
    loading: boolean,
    error?: string
  }
}

const state: GroupsStateInterface = {
  groups: [],
  tenants: [],
  group: {},
  status: {
    loading: false,
  }
};


export default state;
