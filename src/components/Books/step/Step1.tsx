import { css } from '@emotion/react';

import { RHFLabeledInput, RHFLabeledSelect } from '@/components/common';

import { validateStep1 } from '@/utils/validateRule';

import { BookFormData } from '@/types/forms';
import { READING_STATUS_OPTIONS } from '@/constants/form';
import { useFormContext } from 'react-hook-form';

const Step1Styles = css({
  display: 'flex',
  flexDirection: 'column',
  width: '100%',
  height: '100%',
  gap: '20px',
});

const InputContainerStyles = css({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'flex-start',
  justifyContent: 'center',
  gap: '30px',

  '@media (max-width: 525px)': {
    gap: '16px',
  },
});

const InputRowStyles = css({
  display: 'flex',
  flexDirection: 'row',
  gap: '16px',
  width: '100%',

  '@media (max-width: 525px)': {
    flexDirection: 'column',
  },
});

const Step1 = () => {
  const { watch } = useFormContext();
  return (
    <div css={Step1Styles}>
      <h2>도서 기본 정보</h2>
      <div css={InputContainerStyles}>
        <div css={InputRowStyles}>
          <RHFLabeledInput<BookFormData>
            label="도서 제목"
            name="title"
            placeholder="도서 제목을 입력해주세요."
            size="full"
            rules={{ required: '도서 제목을 입력해주세요.' }}
          />
          <RHFLabeledInput<BookFormData>
            name="author"
            label="도서 저자"
            placeholder="도서 저자를 입력해주세요."
            size="full"
            rules={{ required: '도서 저자를 입력해주세요.' }}
          />
        </div>
        <div css={InputRowStyles}>
          <RHFLabeledInput<BookFormData>
            label="도서 출판사"
            name="publisher"
            placeholder="도서 출판사를 입력해주세요."
            size="full"
            rules={{ required: '도서 출판사를 입력해주세요.' }}
          />
          <RHFLabeledInput<BookFormData>
            label="도서 출판일"
            name="publishedDate"
            placeholder="도서 출판일을 입력해주세요."
            type="date"
            size="full"
            rules={{ required: '도서 출판일을 입력해주세요.' }}
          />
        </div>
        <div css={InputRowStyles}>
          <RHFLabeledInput<BookFormData>
            label="총 페이지 수"
            name="pageCount"
            placeholder="총 페이지 수를 입력해주세요."
            min={1}
            type="number"
            size="full"
            rules={{
              min: { value: 1, message: '페이지 수를 다시 입력해주세요.' },
            }}
          />
          <RHFLabeledSelect<BookFormData>
            label="독서 상태"
            size="full"
            name="readStatus"
            defaultValue=""
            options={READING_STATUS_OPTIONS}
            rules={{ required: '독서 상태를 선택해주세요.' }}
          />
        </div>
        <div css={InputRowStyles}>
          <RHFLabeledInput<BookFormData>
            label="독서 시작일"
            name="startDate"
            placeholder="독서 시작일을 입력해주세요."
            type="date"
            size="full"
            disabled={watch('readStatus') === 'wantToRead' && watch('readStatus') !== ''}
            rules={{
              validate: (value, formValues) =>
                validateStep1.startDate(value, formValues as BookFormData),
            }}
          />
          <RHFLabeledInput<BookFormData>
            label="독서 완료일"
            name="endDate"
            placeholder="독서 완료일을 입력해주세요."
            type="date"
            size="full"
            disabled={watch('readStatus') !== 'read' && watch('readStatus') !== ''}
            rules={{
              validate: (value, formValues) =>
                validateStep1.endDate(value, formValues as BookFormData),
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default Step1;
