import { css } from '@emotion/react';

const FormHeaderStyles = css({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'space-between',
  width: '100%',
  height: '100px',
  backgroundColor: 'white',
  gap: '20px',
  marginTop: '50px',
});

const FormHeader = () => {
  return (
    <div css={FormHeaderStyles}>
      <h1>도서 리뷰 작성</h1>
    </div>
  );
};

export default FormHeader;
