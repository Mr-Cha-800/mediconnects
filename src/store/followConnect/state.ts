import { UserProfileInterface } from 'src/store/userProfile/state';
import { EntityTypes } from 'src/types';
import { OrganizationInterface } from 'src/store/orgProfile/state';

export interface ConnectRequestInterface {
  id?: string;
  timestamp?: string;
  data: {
    message?: string;
  };
  createdBy: UserProfileInterface,
  entity: UserProfileInterface | OrganizationInterface,
  recipient: {
    id?: string;
  }
  type: EntityTypes;
}

export interface FollowConnectStateInterface {
  connectsRequests: ConnectRequestInterface[];
  followConnectStatus: {
    [key: string]: {
      following: boolean;
      followed: boolean;
      connecting: boolean;
      connected: boolean;
      error?: string;
    }
  };
  requestStatus: {
    [key: string]: {
      accepting: boolean;
      rejecting: boolean;
      error: boolean;
    }
  };
  status: {
    loading: boolean;
    error?: string;
  }
}

const state: FollowConnectStateInterface = {
  connectsRequests: [],
  requestStatus: {},
  followConnectStatus: {},
  status: {
    loading: false,
  }
};

export default state;
