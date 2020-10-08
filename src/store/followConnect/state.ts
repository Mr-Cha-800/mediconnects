
export interface ConnectRequestInterface {
  id?: string;
  message?: string;
}

export interface FollowConnectStateInterface {
  connectsRequests: ConnectRequestInterface[];
  status: {
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
    following: false,
    followed: false,
    connecting: false,
    connected: false,
  }
};

export default state;
