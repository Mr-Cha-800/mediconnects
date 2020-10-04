import { API } from 'src/constants';

export const login = (user: string, password: string) => {
  const requestOptions = {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ user, password })
  };

  return fetch(`${API}/security/login`, requestOptions)
    .then(res => res.json())
    .then(({ id, email, token }) => {
      if (token) {
        localStorage.setItem('token', JSON.stringify(token));
        localStorage.setItem('user', JSON.stringify({ id, email }));
      }
      return {id, email};
    });
};

export const logout = () => localStorage.removeItem('user');

export const register = (user: { user: string, password: string }) => {
  const requestOptions = {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(user)
  };

  return fetch(`${API}/security/signup`, requestOptions).then(res => res.json());
};
