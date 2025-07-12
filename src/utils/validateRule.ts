import { BookFormData } from '@/types/forms';

export const validateStep1 = {
  /** 독서 시작일 검증 */
  startDate: (value: string, formValues: BookFormData) => {
    const { readStatus, publishedDate } = formValues;
    if (publishedDate && new Date(value) < new Date(publishedDate)) {
      return '독서 시작일은 출판일 이후여야 합니다.';
    }
    if (readStatus !== 'wantToRead' && !value) {
      return '독서 시작일을 입력해주세요.';
    }
    return true;
  },

  /** 독서 완료일 검증 */
  endDate: (value: string, formValues: BookFormData) => {
    const { readStatus, startDate } = formValues;
    if (readStatus === 'read' && startDate && value && new Date(value) < new Date(startDate)) {
      return '독서 완료일은 독서 시작일 이후여야 합니다.';
    }
    if (readStatus === 'wantToRead' && value) {
      return '읽고 싶은 책은 독서 기간을 입력할 수 없습니다.';
    }
    if (readStatus === 'reading' && value) {
      return '읽고 있는 책은 독서 완료일을 입력할 수 없습니다.';
    }
    if (readStatus === 'holding' && value) {
      return '보류 중인 책은 독서 완료일을 입력할 수 없습니다.';
    }
    if (readStatus === 'read' && !value) {
      return '독서 완료일을 입력해주세요.';
    }
    if (readStatus === '' && !value) {
      return '독서 완료일을 선택해주세요.';
    }
    return true;
  },
};
