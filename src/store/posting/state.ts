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
  organizations?: string[];
  mediaSource?: File;
  content?: string;
}

export interface PostInterface extends Pick<PostingRequestInterface, 'type' | 'title' | 'description' | 'organizations'>{
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
  status: {
    loading: false,
  }
};

export default state;
