import { API } from 'src/constants';
import axios from 'axios';
import { GroupsStateInterface, GroupsInterface } from 'src/store/groups/state';

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
export const create = ( name:string ) =>
  axios.post<GroupsStateInterface>(`${API}/groups`, name)
  .then(({ data }) => data);

 export const getGroups = (params: GroupsSearchQueryInterface) =>
  axios.get<{ groups: GroupsInterface[] }>(`${API}/groups`, { params })
    .then(({ data: { groups = [] } }) => groups);

export const update = ({ id, name }: UpdateQueryInterface ) =>
  axios.put<GroupsStateInterface>(`${API}/groups/${id}`, name)
  .then(({ data }) => data);

export const remove = ({ id }: UpdateQueryInterface) =>
  axios.delete(`${API}/groups/${id}`)
  .then(({ data }) => data);
