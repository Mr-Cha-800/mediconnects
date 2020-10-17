import { API } from 'src/constants';
import axios from 'axios';
import { UserProfileInterface } from 'src/store/userProfile/state';
import mediaUploader, { UploadType } from 'src/services/mediaUploader.service';

export enum UsersSearchScopeEnum {
  PUBLIC = 'public',
  FOLLOWING = 'following',
}
export interface UsersSearchQueryInterface {
  keyword?: string;
  scope?: UsersSearchScopeEnum;
}
export const get = () =>
  axios.get<UserProfileInterface>(`${API}/account/profile`)
    .then(({ data }) => data);

export const search = (params: UsersSearchQueryInterface) =>
    axios.get<{ users: UserProfileInterface[] }>(`${API}/users`, { params })
      .then(({ data: { users = [] } }) => users);

export const user = (id: string) =>
    axios.get<UserProfileInterface>(`${API}/users/${id}/profile`)
      .then(({ data }) => data);

export const update = async ({ profile, avatar }: { profile: UserProfileInterface, avatar: File }) => {
  let avatarMediaObject;
  if (avatar) {
    avatarMediaObject = await mediaUploader(avatar, UploadType.IMAGE);
    profile = { ...profile, avatar: avatarMediaObject };
  }
  return axios.put<UserProfileInterface>(`${API}/account`, profile)
    .then(({ data }) => data);
};

export const getSections = async () => {
  return axios.get<any>(`${API}/account/profile/sections`)
    .then(({ data }) => data);
};

export const addSection = async ({ post, weight }: { post?: string, weight?: number }) => {
  return axios.post<any>(`${API}/account/profile/sections`, { post, weight })
    .then(({ data }) => data);
};

export const editSection = async ({ post, weight }: { post?: string, weight?: number }) => {
  return axios.put<any>(`${API}/account/profile/sections/5f89b8e6894e041b5f7ef1bb`, { post, weight })
    .then(({ data }) => data);
};