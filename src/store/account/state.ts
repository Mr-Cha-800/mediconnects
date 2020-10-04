export interface AccountInterface {
  status: {
    loggedIn?: boolean,
    loggingIn?: boolean,
    registering?: boolean,
  },
  user: {
    id?: string;
    email?: string;
  },
}

const user = JSON.parse(<string>localStorage.getItem('user'));

const state: AccountInterface = user
  ? { status: { loggedIn: true }, user }
  : { status: {}, user: {} };

export default state;
