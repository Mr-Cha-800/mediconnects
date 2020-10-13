import { API } from 'src/constants';
import axios from 'axios';
import { GroupsStateInterface, GroupsInterface } from 'src/store/groups/state';
import mediaUploader, { UploadType } from 'src/services/mediaUploader.service';

export enum OrgSearchScopeEnum {
  PUBLIC = 'public',
  PART_OF = 'partof',
  ACCOUNT = 'account',
  FOLLOWING = 'following',
}

export interface OrgSearchQueryInterface {
  scope?: OrgSearchScopeEnum;
}
export interface UpdateQueryInterface {
  id?: string;
  name?: string;
}
export const create = async ( name:string ) => {
  await axios.post<GroupsStateInterface>(`${API}/groups`, name)
  .then(({ data }) => data);
};

 export const getGroups = async (params: OrgSearchQueryInterface) =>
  await  axios.get<{ groups: GroupsInterface[] }>(`${API}/groups`, { params })
    .then(({ data: { groups = [] } }) => groups);

export const updatee = async ( payload: UpdateQueryInterface ) => {
  axios.put<GroupsStateInterface>(`${API}/groups/${payload.id}`, payload.name)
  .then(({ data }) => data);
};

export const deletee = async (payload: UpdateQueryInterface) => {
  await   axios.delete(`${API}/groups/${payload.id}`)
  .then(({ data }) => data);
};