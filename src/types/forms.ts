export type Step = {
  Component: React.ComponentType;
  key: string;
};

export type ReadStatus = 'wantToRead' | 'reading' | 'read' | 'holding' | '';

export interface Step1FormData {
  title: string; // 도서 제목
  author: string; // 도서 저자
  publisher: string; // 도서 출판사
  publishedDate: string; // 도서 출판일
  pageCount: number; // 도서 페이지 수
  readStatus: ReadStatus; // 독서 상태
  startDate?: string; // 독서 시작일
  endDate?: string; // 독서 완료일
}

export interface Step2FormData {
  isRecommended: boolean; // 추천 여부
  rating?: number; // 독서 평점
}

export interface Step3FormData {
  review?: string; // 독후감
}

/** 인용구 */
export type Quote = {
  label: string;
  name: string;
  value: string;
  page?: number;
};

export interface Step4FormData {
  quotes: Quote[];
}

export interface Step5FormData {
  isPublic: boolean; // 공개 여부
}

export interface BookFormData
  extends Step1FormData,
    Step2FormData,
    Step3FormData,
    Step4FormData,
    Step5FormData {}
