import { css } from '@emotion/react';

import { colors } from '@/styles/colors';

const Step6Styles = css({
  display: 'flex',
  flexDirection: 'column',
  width: '100%',
  height: '100%',
  gap: '200px',
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

const Step6 = () => {
  return (
    <div css={Step6Styles}>
      <h2>도서 등록 완료</h2>
      <div css={TextContainerStyles}>
        <span>도서 등록이 완료되었습니다.</span>
      </div>
    </div>
  );
};

export default Step6;
