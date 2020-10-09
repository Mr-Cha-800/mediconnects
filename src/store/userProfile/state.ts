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
  followed? : boolean;
}

export interface UserProfileStateInterface {
  profiles: UserProfileInterface[],
  profile: UserProfileInterface;
  connectsRequests?: any[];
  status: {
    loading: boolean;
    updating: boolean;
    error?: string
  }
}

const state: UserProfileStateInterface = {
  profiles: [],
  profile: {},
  status: {
    loading: false,
    updating: false,
  }
};

export default state;
