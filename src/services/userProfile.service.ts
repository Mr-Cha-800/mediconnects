import { API } from 'src/constants';
import axios from 'axios';
import { UserProfileInterface } from 'src/store/userProfile/state';

export const get = (id: string) =>
  axios.get<UserProfileInterface>(`${API}/accounts/${id}`)
    .then(({ data }) => data);

export const update = (payload: UserProfileInterface) =>
  axios.put<UserProfileInterface>(`${API}/account`, payload)
    .then(({ data }) => data);
