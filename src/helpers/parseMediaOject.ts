import { MediaObject } from 'src/types';
import { DEFAULT_IMAGE, MEDIA_API } from 'src/constants';

const fileExt = {
  image: '.jpg',
  video: '.mp4',
  audio: '.mp3',
}

export const avatarMediaObject = (
  { resource }: MediaObject = {}
  ) => resource ? `${MEDIA_API}/${resource}.840${fileExt.image}` : DEFAULT_IMAGE;

export const postImageMediaObject = (
  { resource }: MediaObject = {}
  ) => resource ? `${MEDIA_API}/${resource}.840${fileExt.image}` : DEFAULT_IMAGE;
