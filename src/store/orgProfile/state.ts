export interface OrganizationInterface {
  id?: string;
  name?: string;
  title?: string;
  description?: string;
  logo?: string;
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
