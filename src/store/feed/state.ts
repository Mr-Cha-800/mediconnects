export enum PostingTypesEnum {
  IMAGE = 'image',
  VIDEO = 'video',
  AUDIO = 'audio',
  DOCUMENT = 'document',
  TEXT = 'text',
};

export interface PostingRequestInterface {
  sectionId?: string;
  id?: string;
  type?: PostingTypesEnum;
  title?: string;
  description?: string;
  weight?: number;
  sectionGroup?: string;
  organizations?: string[];
  mediaSource?: File;
  content?: string;
}

export interface PostInterface extends Pick<PostingRequestInterface, 'type' | 'title' | 'description' | 'organizations' | 'sectionGroup'>{
  id?: string;
  timestamp?: string;
  createdBy?: {
    id?: string;
  },
  content?: {

  }
}

export interface PostingStateInterface {
  posts: PostInterface[];
  section: SectionInterface,
  posting?: {
    post: PostingRequestInterface;
    status: {
      loading: boolean;
      error?: string;
    }
  },
  status: {
    loading: boolean;
    error?: string;
  }
}

const state: PostInterface = {
  posts: [],
  section: {},
  status: {
    loading: false,
  }
};

export interface SectionInterface {
  weight?: number,
  section: {
    id?: string,
    timestamp?: string,
    type?: string,
    title?: string,
    description?: string
  },
  id?: string,
  timestamp?: string,
  group?: string
}
export default state;
