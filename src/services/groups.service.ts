import { API } from 'src/constants';
import axios from 'axios';
import { GroupsStateInterface, GroupsInterface } from 'src/store/groups/state';
import mediaUploader, { UploadType } from 'src/services/mediaUploader.service';

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
export const create = async ({ profile, avatar }: { profile: GroupsInterface, avatar: File }) => {
  let avatarMediaObject;
  if (avatar) {
    avatarMediaObject = await mediaUploader(avatar, UploadType.IMAGE);
    profile = { ...profile, avatar: avatarMediaObject };
  }
axios.post<GroupsStateInterface>(`${API}/groups`, profile)
  .then(({ data }) => data);

}

 export const getGroups = (params: GroupsSearchQueryInterface) =>
  axios.get<{ groups: GroupsInterface[] }>(`${API}/groups`, { params })
    .then(({ data: { groups = [] } }) => groups);


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

export const remove = ({ id }: UpdateQueryInterface) =>
  axios.delete(`${API}/groups/${id}`)
  .then(({ data }) => data);