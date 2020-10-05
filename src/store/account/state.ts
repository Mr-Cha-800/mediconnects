export interface UserInterface {
  id?: string;
  email?: string;
  token?: string;
}
export interface AccountInterface {
  status: {
    loggedIn?: boolean,
    error?: string,
  },
  user: UserInterface,
}

const user = JSON.parse(<string>localStorage.getItem('user'));
const token = JSON.parse(<string>localStorage.getItem('token'));

const state: AccountInterface = user && token
  ? { status: { loggedIn: true }, user }
  : { status: {}, user: {} };

export default state;
