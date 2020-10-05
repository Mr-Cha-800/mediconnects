import { API } from 'src/constants';
import axios from 'axios';
import { OrgProfileInterface } from 'src/store/orgProfile/state';

export enum OrgSearchScopeEnum {
  PUBLIC = "public",
  PART_OF = "partof",
  ACCOUNT = "account",
  FOLLOWING = "following",
}
export interface OrgSearchQueryInterface {
  keyword?: string;
  scope?: OrgSearchScopeEnum;
}

export const search = (params: OrgSearchQueryInterface) =>
  axios.get<OrgProfileInterface>(`${API}/organizations`, { params })
    .then(({ data }) => data);
