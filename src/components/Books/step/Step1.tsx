import { css } from '@emotion/react';

import { LabeledInput } from '@/components/common';

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
});

const Step1 = () => {
  return (
    <div css={Step1Styles}>
      <h2>도서 기본 정보</h2>
      <div css={InputContainerStyles}>
        <LabeledInput
          label="도서 제목"
          name="title"
          placeholder="도서 제목을 입력해주세요."
          size="full"
        />
        <LabeledInput
          label="도서 저자"
          name="author"
          placeholder="도서 저자를 입력해주세요."
          size="full"
        />
        <LabeledInput
          label="도서 출판사"
          name="publisher"
          placeholder="도서 출판사를 입력해주세요."
          size="full"
        />
        <LabeledInput
          label="도서 출판일"
          name="publicationDate"
          placeholder="도서 출판일을 입력해주세요."
          size="full"
        />
        <LabeledInput
          label="총 페이지 수"
          name="pageCount"
          placeholder="총 페이지 수를 입력해주세요."
          size="full"
        />
      </div>
    </div>
  );
};

export default Step1;
