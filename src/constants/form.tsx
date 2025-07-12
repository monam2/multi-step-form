import {
  BookFormData,
  Step1FormData,
  Step2FormData,
  Step3FormData,
  Step4FormData,
  Step5FormData,
} from '@/types/forms';

export const READING_STATUS_OPTIONS: { label: string; value: string }[] = [
  { label: '독서 상태를 선택해주세요.', value: '' },
  { label: '읽고 싶은 책', value: 'wantToRead' },
  { label: '읽는 중', value: 'reading' },
  { label: '읽은 책', value: 'read' },
  { label: '보류 중', value: 'holding' },
];

export const INIT_STEP1_FORM_DATA: Step1FormData = {
  title: '',
  author: '',
  publisher: '',
  publishedDate: '',
  pageCount: 0,
  readStatus: '',
  startDate: '',
  endDate: '',
};

export const INIT_STEP2_FORM_DATA: Step2FormData = {
  isRecommended: true,
  rating: 0,
};

export const INIT_STEP3_FORM_DATA: Step3FormData = {
  review: '',
};

export const INIT_STEP4_FORM_DATA: Step4FormData = {
  quotes: [
    {
      id: 0,
      label: '인용구',
      name: 'quote',
      value: '',
    },
  ],
};

export const INIT_STEP5_FORM_DATA: Step5FormData = {
  isPublic: false,
};

export const INIT_FORM_DATA: BookFormData = {
  ...INIT_STEP1_FORM_DATA,
  ...INIT_STEP2_FORM_DATA,
  ...INIT_STEP3_FORM_DATA,
  ...INIT_STEP4_FORM_DATA,
  ...INIT_STEP5_FORM_DATA,
};
