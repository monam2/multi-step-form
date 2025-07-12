import { BookFormData } from '@/types/forms';

export const READING_STATUS_OPTIONS: { label: string; value: string }[] = [
  { label: '독서 상태를 선택해주세요.', value: '' },
  { label: '읽고 싶은 책', value: 'wantToRead' },
  { label: '읽는 중', value: 'reading' },
  { label: '읽은 책', value: 'read' },
  { label: '보류 중', value: 'holding' },
];

export const INIT_FORM_DATA: BookFormData = {
  title: '',
  author: '',
  publisher: '',
  publishedDate: '',
  pageCount: 0,
  readStatus: '',
  startDate: '',
  endDate: '',
  isRecommended: true,
  rating: 0,
  review: '',
  quotes: [
    {
      id: 0,
      label: '인용구',
      name: 'quote',
      value: '',
    },
  ],
  isPublic: false,
};
