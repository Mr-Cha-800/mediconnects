import { API } from 'src/constants';
import axios from 'axios';
import { OrganizationInterface } from 'src/store/orgProfile/state';
import mediaUploader, { UploadType } from 'src/services/mediaUploader.service';

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
  axios.get<{organizations: OrganizationInterface[]}>(`${API}/organizations`, { params })
    .then(({ data: {organizations = []} }) => organizations);

export const add = async ({profile, avatar}: {profile: OrganizationInterface, avatar: File}) => {
  let avatarMediaObject;
  if (avatar) {
    avatarMediaObject = await mediaUploader(avatar, UploadType.IMAGE);
    profile = {...profile, avatar: avatarMediaObject};
  }
  return axios.post<OrganizationInterface>(`${API}/organizations`, profile)
    .then(({ data }) => data);
}
