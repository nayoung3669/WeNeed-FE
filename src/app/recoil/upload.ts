import { atom } from 'recoil';

export const filestate = atom<DNDFileTypes[]>({
  key: 'filestate',
  default: [],
});

export const textState = atom<DndTextTypes[]>({
  key: 'textState',
  default: [],
});

export const orderState = atom<number>({
  key: 'orderState',
  default: 0,
});

export const userId = atom<number[]>({
  key: 'userIdFormState',
  default: [],
});

export const uploadDataState = atom<UploadPFTypes>({
  key: 'uploadDataState',
  default: {
    articleType: 'PORTFOLIO',
    title: '',
    content: [],
    skills: [],
    tags: [],
    teamMembersId: [],
    sharedText: '',
    thumbnail: '',
  },
});

export const crewRecruiterState = atom<null>({
  key: 'crewRecruiterState',
  default: null,
});

export const imageBlobState = atom<BlobImages[]>({
  key: 'imageBlobState',
  default: [],
});

export const thumbnailState = atom<File | null>({
  key: 'thumbnailState',
  default: null,
});

export const thumbnailUrlState = atom<string>({
  key: 'thumbnailUrlState',
  default: '',
});

export const errorState = atom<Error | null>({
  key: 'errorState',
  default: null,
});
