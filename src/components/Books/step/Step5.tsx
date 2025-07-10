import { useState } from 'react';
import { css } from '@emotion/react';

import { BaseButton } from '@/components/common';

import { colors } from '@/styles/colors';

const Step2Styles = css({
  display: 'flex',
  flexDirection: 'column',
  width: '100%',
  height: '100%',
  gap: '50px',
});

const TextContainerStyles = css({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  padding: '20px',
  gap: '10px',
  fontSize: '16px',
  color: colors.gray,
});

const ButtonContainerStyles = css({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  gap: '10px',
  marginBottom: '20px',
});

const Step5 = () => {
  const [isRecommended, setIsRecommended] = useState(true);

  return (
    <div css={Step2Styles}>
      <h2>공개 설정</h2>
      <div css={TextContainerStyles}>
        <span>다른 사람들에게 이 도서를 공개하시겠습니까?</span>
      </div>
      <div css={ButtonContainerStyles}>
        <BaseButton
          css={css({ width: '100px' })}
          size="large"
          variant="contained"
          color={isRecommended ? 'primary' : 'secondary'}
          onClick={() => setIsRecommended(true)}
        >
          공개
        </BaseButton>
        <BaseButton
          css={css({ width: '100px' })}
          size="large"
          variant="contained"
          color={isRecommended ? 'secondary' : 'primary'}
          onClick={() => setIsRecommended(false)}
        >
          비공개
        </BaseButton>
      </div>
    </div>
  );
};

export default Step5;
