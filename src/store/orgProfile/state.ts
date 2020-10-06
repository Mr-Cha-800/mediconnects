import { MediaObject } from 'src/types';

export interface OrganizationInterface {
  id?: string;
  name?: string;
  description?: string;
  avatar?: MediaObject;
}

export interface OrgProfileInterface {
  orgs: OrganizationInterface[],
  status: {
    loading: boolean,
    error?: string
  }
}

const state: OrgProfileInterface = {
  orgs: [],
  status: {
    loading: false,
  }
};

export default state;
