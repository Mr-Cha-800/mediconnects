import { API } from 'src/constants';

export const login = (username: string, password: string) => {
  const requestOptions = {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ username, password })
  };

  return fetch(`${API}/api/login`, requestOptions)
    .then(res => res.json())
    .then(({ user, token }) => {
      if (token) {
        localStorage.setItem('user', JSON.stringify(user));
      }
      return user;
    });
};

export const logout = () => localStorage.removeItem('user');

export const register = (user: { username: string, password: string }) => {
  const requestOptions = {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(user)
  };

  return fetch(`${API}/api/register`, requestOptions).then(res => res.json());
};
