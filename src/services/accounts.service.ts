import { API } from 'src/constants';
import axios from 'axios';
import { UserInterface } from 'src/store/account/state';

export const login = (user: string, password: string) =>
  axios.post<UserInterface>(`${API}/security/login`, { user, password })
    .then(({ data }) => handleLoginResponse(data));

export const refreshToken = (oldToken: string) =>
  axios.post<string>(`${API}/security/token`, { token: oldToken })
    .then(({ data }) => data);

export const logout = () => localStorage.removeItem('user');

export const register = (user: string, password: string) =>
  axios.post<UserInterface>(`${API}/security/signup`, { user, password })
    .then(({ data }) => handleLoginResponse(data));

const handleLoginResponse = ({ id, email, token }: UserInterface) => {
  if (token) {
    localStorage.setItem('token', JSON.stringify(token));
    localStorage.setItem('user', JSON.stringify({ id, email }));
  }
  return { id, email, token };
};
