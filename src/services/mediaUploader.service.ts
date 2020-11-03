import { API, MEDIA_API } from 'src/constants';
import axios from 'axios';
import { getAudioMeta, getImageMeta, getVideoMeta } from 'src/helpers/getFileMeta';

export enum UploadType {
  IMAGE = 'image',
  VIDEO = 'video',
  AUDIO = 'audio',
  BINARY = 'binary',
}

export default async (file: File | null, uploadType: UploadType) => {
  if (file) {
    const objectId = await createObject();
    await uploadChunks(
      objectId,
      createChunks(file)
    );
    return await publishObject(objectId, uploadType, file);
  }
};


const createObject = () =>
  axios.post<{ id: string }>(`${API}/storage/object`)
    .then(({ data: { id = '' } }) => id);

const createChunks = (file: File): Blob[] => {
  let size = 2048 * 5, chunks = Math.ceil(file.size / size);
  const chunkedFile = [];

  for (let i = 0; i < chunks; i++) {
    chunkedFile.push(file.slice(
      i * size, Math.min(i * size + size, file.size), file.type
    ));
  }

  return chunkedFile;
};

const uploadChunks = async (id: string, chunkedFile: Blob[]) => {
  const token = JSON.parse(<string>localStorage.getItem('token'));
  const instance = axios.create({
    headers: {
      Authorization: `Bearer ${token}`,
      'Content-Type': 'application/octet-stream'
    }
  });
  for (const chunk of chunkedFile) {
    await instance.put(`${API}/storage/object/${id}`, chunk);
  }
};

const publishObject = async (id: string, uploadType: UploadType, file: File) => {
  let meta: any = {};
  if (uploadType === UploadType.IMAGE) {
    meta = await getImageMeta(file);
  }
  if (uploadType === UploadType.VIDEO) {
    meta = await getVideoMeta(file);
  }
  if (uploadType === UploadType.AUDIO) {
    meta = await getAudioMeta(file);
  }
  return axios.post<{ resource: string }>(`${API}/storage/object/${id}/publish`, {
    optimizer: uploadType,
    mimeType: file.type,
    ...meta,
  }).then(({ data }) => data);
}
