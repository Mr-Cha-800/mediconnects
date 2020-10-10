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
    axios.get<{ profiles: UserProfileInterface[] }>(`${API}/users`, { params })
      .then(({ data: { profiles = [] } }) => profiles);

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
