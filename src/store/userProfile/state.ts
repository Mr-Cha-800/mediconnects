import { MediaObject } from 'src/types';

export interface UserProfileInterface {
  id?: string;
  email?: string;
  firstName?: string;
  lastName?: string;
  title?: string;
  description?: string;
  avatar?: MediaObject;
  sections?: any[]
}

export interface UserProfileStateInterface {
  profile: UserProfileInterface;
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
