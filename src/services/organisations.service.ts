import { API } from 'src/constants';
import axios from 'axios';
import { OrganizationInterface } from 'src/store/orgProfile/state';
import mediaUploader, { UploadType } from 'src/services/mediaUploader.service';

export enum OrgSearchScopeEnum {
  PUBLIC = 'public',
  PART_OF = 'partof',
  ACCOUNT = 'account',
  FOLLOWING = 'following',
}

export interface OrgSearchQueryInterface {
  keyword?: string;
  scope?: OrgSearchScopeEnum;
}

export const search = (params: OrgSearchQueryInterface) =>
  axios.get<{ organizations: OrganizationInterface[] }>(`${API}/organizations`, { params })
    .then(({ data: { organizations = [] } }) => organizations);

export const getById = (id: string) =>
  axios.get<OrganizationInterface>(`${API}/organizations/${id}`)
  .then(({ data }) => data);

export const getPublicById = (id: string) =>
  axios.get<OrganizationInterface>(`${API}/public/organizations/${id}?link=${id}`)
  .then(({ data }) => data);

export const add = async ({ profile, avatar }: { profile: OrganizationInterface, avatar: File }) => {
  let avatarMediaObject;
  if (avatar) {
    avatarMediaObject = await mediaUploader(avatar, UploadType.IMAGE);
    profile = { ...profile, avatar: avatarMediaObject };
  }
  return axios.post<OrganizationInterface>(`${API}/organizations`, profile)
    .then(({ data }) => data);
};

export const edit = async ({ profile: {id, ...updatedProfile}, avatar }: { profile: OrganizationInterface, avatar: File }) => {
  let avatarMediaObject;
  if (avatar) {
    avatarMediaObject = await mediaUploader(avatar, UploadType.IMAGE);
    updatedProfile = { ...updatedProfile, avatar: avatarMediaObject };
  }
  return axios.put<OrganizationInterface>(`${API}/organizations/${id}`, updatedProfile)
    .then(({ data }) => data);
};
