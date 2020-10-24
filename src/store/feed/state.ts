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
  section?: {
    weight?: number,
    section?: SectionInterface,
    id?: string,
    timestamp?: string,
    group?: string
  },
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

const state: PostingStateInterface = {
  posts: [],
  section: {},
  status: {
    loading: false,
  }
};

export interface SectionInterface {
  id?: string,
  timestamp?: string,
  type?: string,
  title?: string,
  description?: string
}
export default state;
