export type VForm = Vue & {
  validate: () => boolean;
  resetValidation: () => boolean;
  reset: () => void;
};

export type MediaObject = {
  resource?: string;
  id?: string;
};

export enum EntityTypes {
  ORG = 'organization',
  USER = 'user',
}
