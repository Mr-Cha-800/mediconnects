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
  sectionGroups?: {
    id?: string;
    name?: string;
  }[],
  connections? : number;
  followers? : number;
  following? : number;
  groups? : number;
  groupsPartOf? : number;
  organizations? : number;
  organizationsPartOf? : number;
  posts? : number;
  followed? : boolean;
  connected? : boolean;
  refreshToken?: {
    token: string;
  }
}

export interface UserProfileStateInterface {
  users: UserProfileInterface[],
  profile: UserProfileInterface;
  user: UserProfileInterface;
  filter: string[];
  status: {
    loading: boolean;
    updating: boolean;
    error?: string
  };
  userStatus: {
    loading?: boolean;
    error?: string
  }
}

const state: UserProfileStateInterface = {
  users: [],
  profile : {},
  user: {},
  userStatus: {},
  filter: ['experience','education','companies','family','music'],
  status: {
    loading: false,
    updating: false,
  }
};

export default state;
