import { API } from 'src/constants';
import axios from 'axios';
import { GroupsStateInterface, GroupsInterface, TenantsInterface } from 'src/store/groups/state';
import mediaUploader, { UploadType } from 'src/services/mediaUploader.service';
import { EntityTypes } from 'src/types';

export enum GroupsSearchScopeEnum {
  PART_OF = 'partof',
  ACCOUNT = 'account',
}

export interface GroupsSearchQueryInterface {
  scope?: GroupsSearchScopeEnum;
  keyword?: string;
}
export interface UpdateQueryInterface {
  id?: string;
  name?: string;
}
export interface AddTenantInterface {
  tenant?: string;
  type?: EntityTypes;
}
export const create = async ({ profile, avatar }: { profile: GroupsInterface, avatar: File }) => {
  let avatarMediaObject;
  if (avatar) {
    avatarMediaObject = await mediaUploader(avatar, UploadType.IMAGE);
    profile = { ...profile, avatar: avatarMediaObject };
  }
axios.post<GroupsStateInterface>(`${API}/groups`, profile)
  .then(({ data }) => data);
}

export const addTenanttoGroup = async (id: String, payload : AddTenantInterface) => {
axios.post<GroupsStateInterface>(`${API}/groups/${id}/tenants`, payload)
  .then(({ data }) => data);
}

 export const getGroups = (params: GroupsSearchQueryInterface) =>
  axios.get<{ groups: GroupsInterface[] }>(`${API}/groups`, { params })
    .then(({ data: { groups = [] } }) => groups);


 export const getTenants = (id: string) =>
  axios.get<{ tenants: TenantsInterface[] }>(`${API}/groups/${id}/tenants`)
    .then(({ data: { tenants = [] } }) => tenants);


export const getById = (id: string) =>
axios.get<GroupsInterface>(`${API}/groups/${id}`)
.then(({ data }) => data);

export const update = async ({ profile: {id, ...updatedProfile}, avatar }: { profile: GroupsInterface, avatar: File })=> {
  let avatarMediaObject;
  if (avatar) {
    avatarMediaObject = await mediaUploader(avatar, UploadType.IMAGE);
    updatedProfile = { ...updatedProfile, avatar: avatarMediaObject };
  }
  axios.put<GroupsStateInterface>(`${API}/groups/${id}`, updatedProfile)
  .then(({ data }) => data);
}

export const removeTenant = (idGroup: string, idTenant: string) =>
  axios.delete(`${API}/groups/${idGroup}/tenants/${idTenant}`)
  .then(({ data }) => data);

export const remove = ({ id }: UpdateQueryInterface) =>
  axios.delete(`${API}/groups/${id}`)
  .then(({ data }) => data);
