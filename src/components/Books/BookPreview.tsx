import { css } from '@emotion/react';

import { colors } from '@/styles/colors';

const BookPreviewStyles = css({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  width: '100%',
  height: '100%',
  border: `1px solid ${colors.secondary}`,
  borderRadius: '10px',
  padding: '30px 20px',
});

const BookPreview = () => {
  return <div css={BookPreviewStyles}>BookPreview</div>;
};

export default BookPreview;
