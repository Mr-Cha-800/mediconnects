import { API } from 'src/constants';
import axios from 'axios';
import { UserProfileInterface } from 'src/store/userProfile/state';
import mediaUploader, { UploadType } from 'src/services/mediaUploader.service';
import { SectionInterface } from 'src/store/posting/state';

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

export const addSection = async ({ post, weight, group }: { post?: string, group?: string, weight?: number }) => {
  return axios.post<any>(`${API}/account/profile/sections`, { post, weight, group })
    .then(({ data }) => data);
};

export const editSection = async (id: string, group: string) => {
  return axios.put(`${API}/account/profile/sections/${id}`, {id, group})
    .then(({ data }) => data);
};
export const deleteSection = async (id: string) => {
 //  console.log(id)
  return axios.delete(`${API}/account/profile/sections/${id}`)
    .then(({ data }) => data);
};
export const changeOrderUP = async (id: string, weight: number) => {
  return axios.put(`${API}/account/profile/sections/${id}`, { id, weight})
    .then(({ data }) => data);
};
export const changeOrderDown = async (id: string, weight: number) => {
  return axios.put(`${API}/account/profile/sections/${id}`, { id, weight})
    .then(({ data }) => data);
};

export const getById = (id: string) =>
  axios.get<SectionInterface>(`${API}/account/profile/sections/${id}`)
  .then(({ data }) => data);

  //  working
  export const getContacts = () =>
  axios.get(`${API}/account/connections`)
  .then(({ data }) => data);
