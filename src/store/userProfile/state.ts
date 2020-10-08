import { MediaObject } from 'src/types';

export interface UserProfileInterface {
  id?: string;
  email?: string;
  firstName?: string;
  lastName?: string;
  title?: string;
  description?: string;
  avatar?: MediaObject;
  sections?: any[],
  connections? : number;
  followers? : number;
  following? : number;
  groups? : number;
  groupsPartOf? : number;
  organizations? : number;
  organizationsPartOf? : number;
  posts? : number;
}

export interface UserProfileStateInterface {
  profile: UserProfileInterface;
  connectsRequests?: any[];
  status: {
    loading: boolean;
    updating: boolean;
  }
}

const state: UserProfileStateInterface = {
  profile: {},
  status: {
    loading: false,
    updating: false,
  }
};

export default state;
