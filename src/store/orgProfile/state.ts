import { MediaObject } from 'src/types';

export interface OrganizationInterface {
  id?: string;
  name?: string;
  description?: string;
  avatar?: MediaObject;
  followers?: number,
  tenants?: number,
  followed?: boolean,
}

export interface OrgProfileInterface {
  orgs: OrganizationInterface[],
  org: OrganizationInterface,
  orgMembers: any[],
  status: {
    loading: boolean,
    error?: string
  }
}

const state: OrgProfileInterface = {
  orgs: [],
  org: {},
  orgMembers: [],
  status: {
    loading: false,
  }
};

export default state;
