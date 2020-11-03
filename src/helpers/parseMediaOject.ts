import { MediaObject } from 'src/types';
import { DEFAULT_IMAGE, MEDIA_API } from 'src/constants';

const fileExt = {
  image: '.jpg',
  video: '.mp4',
  audio: '.mp3',
}

export const avatarMediaObject = (
  { resource }: MediaObject = {}
  ): string => resource ? `${MEDIA_API}/${resource}.840${fileExt.image}` : DEFAULT_IMAGE;


export const postImageMediaObject = (
  { resource }: MediaObject = {}
  ): { srcset: string, src: string } => {
  const src = avatarMediaObject({resource});
  const srcset = [400, 840, 1440].reduce((str, size, index ) => {
    return `${str}, ${resource ? `${MEDIA_API}/${resource}.${size}${fileExt.image}` : DEFAULT_IMAGE} ${index + 1}x`;

  }, '');

  return { src, srcset };
};

export const videoMediaObject = (
  { resource }: MediaObject = {}
): string => resource ? `${MEDIA_API}/${resource}${fileExt.video}` : '';

export const audioMediaObject = (
  { resource }: MediaObject = {}
): string => resource ? `${MEDIA_API}/${resource}${fileExt.audio}` : '';
