import { API } from 'src/constants';
import axios from 'axios';
import { UserProfileInterface } from 'src/store/userProfile/state';
import mediaUploader, { UploadType } from 'src/services/mediaUploader.service';

export const get = (id: string) =>
  axios.get<UserProfileInterface>(`${API}/public/account/profile/${id}`)
    .then(({ data }) => data);
