import { useState } from 'react';
import { css } from '@emotion/react';

import { LabeledTextarea } from '@/components/common';

import { colors } from '@/styles/colors';

const Step3Styles = css({
  display: 'flex',
  flexDirection: 'column',
  width: '100%',
  height: '100%',
  gap: '30px',
});

const TextContainerStyles = css({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  padding: '20px',
  gap: '10px',
  fontSize: '14px',
  color: colors.gray,
});

const InputContainerStyles = css({
  display: 'flex',
  flexDirection: 'column',
  gap: '10px',
  marginBottom: '20px',
});

const Step3 = () => {
  const [review, setReview] = useState('');

  return (
    <div css={Step3Styles}>
      <h2>독후감 작성</h2>
      <div css={TextContainerStyles}>
        <span>다른 사람들과 공유할 수 있는 독후감을 작성해주세요.</span>
        <span>독후감은 최대 1000자까지 작성할 수 있습니다.</span>
      </div>
      <div css={InputContainerStyles}>
        {/* RHF 변경 및 별점에 따른 유효성 검증 추가 필요 */}
        <LabeledTextarea
          label=""
          name="review"
          placeholder="독후감을 입력해주세요."
          size="full"
          value={review}
          onChange={(e) => setReview(e.target.value)}
          helperText={`${review.length}/1000`}
        />
      </div>
    </div>
  );
};

export default Step3;
