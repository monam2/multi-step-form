import { css } from '@emotion/react';

interface UnstylishButtonProps {
  children: React.ReactNode;
  onClick: () => void;
}

const UnstylishButton = ({ children, onClick }: UnstylishButtonProps) => {
  return (
    <button
      onClick={onClick}
      css={css({
        backgroundColor: 'transparent',
        border: 'none',
        cursor: 'pointer',
        padding: 0,
        margin: 0,
      })}
    >
      {children}
    </button>
  );
};

export default UnstylishButton;
