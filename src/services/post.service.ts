import axios from 'axios';
import { PostingRequestInterface, PostingTypesEnum, PostInterface } from 'src/store/posting/state';
import mediaUploader, { UploadType } from 'src/services/mediaUploader.service';
import { API } from 'src/constants';

export const post = async ({ mediaSource, type, title }: PostingRequestInterface) => {
  let mediaSourceMediaObject;
  if (mediaSource) {
    let uploadType: UploadType = UploadType.IMAGE;
    if (type === PostingTypesEnum.VIDEO) uploadType = UploadType.VIDEO;
    if (type === PostingTypesEnum.AUDIO) uploadType = UploadType.AUDIO;
    mediaSourceMediaObject = await mediaUploader(mediaSource, uploadType);
  }
  return axios.post<PostInterface>(`${API}/posts`, {
    type,
    title,
    content: mediaSourceMediaObject
  }).then(({ data }) => data);
}

export const editSection = async ({ sectionId, mediaSource, type, title, description }: PostingRequestInterface) => {
  let mediaSourceMediaObject;
  // console.log('section ID : ' + sectionId)
  if (mediaSource) {
    let uploadType: UploadType = UploadType.IMAGE;
    if (type === PostingTypesEnum.VIDEO) uploadType = UploadType.VIDEO;
    if (type === PostingTypesEnum.AUDIO) uploadType = UploadType.AUDIO;
    mediaSourceMediaObject = await mediaUploader(mediaSource, uploadType);
  }
  return axios.put<PostInterface>(`${API}/posts/${sectionId}`, {
    type,
    title,
    description,
    content: mediaSourceMediaObject
  }).then(({ data }) => data);
}
