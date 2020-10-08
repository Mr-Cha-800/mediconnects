import { UserProfileInterface } from 'src/store/userProfile/state';
import { EntityTypes } from 'src/types';

export interface ConnectRequestInterface {
  id?: string;
  timestamp?: string;
  data: {
    message?: string;
  };
  createdBy: UserProfileInterface,
  recipient: {
    id?: string;
  }
  type: EntityTypes;
}

export interface FollowConnectStateInterface {
  connectsRequests: ConnectRequestInterface[];
  status: {
    loading: boolean;
    following: boolean;
    followed: boolean;
    connecting: boolean;
    connected: boolean;
    error?: string;
  }
}

const state: FollowConnectStateInterface = {
  connectsRequests: [],
  status: {
    loading: false,
    following: false,
    followed: false,
    connecting: false,
    connected: false,
  }
};

export default state;
