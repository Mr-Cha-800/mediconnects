import { API } from 'src/constants';
import axios from 'axios';
import { UserProfileInterface } from 'src/store/userProfile/state';
import mediaUploader, { UploadType } from 'src/services/mediaUploader.service';
import { EntityTypes } from 'src/types';

export const get = () =>
  axios.get<UserProfileInterface>(`${API}/account/profile`)
    .then(({ data }) => data);

export const getPublic = (id: string) =>
  axios.get<UserProfileInterface>(`${API}/public/account/profile`)
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
