import { MediaObject } from 'src/types';

export interface OrganizationInterface {
  id?: string;
  name?: string;
  description?: string;
  avatar?: MediaObject;
  followers?: number,
  tenants?: number,
}

export interface OrgProfileInterface {
  orgs: OrganizationInterface[],
  org: OrganizationInterface,
  status: {
    loading: boolean,
    error?: string
  }
}

const state: OrgProfileInterface = {
  orgs: [],
  org: {},
  status: {
    loading: false,
  }
};

export default state;
