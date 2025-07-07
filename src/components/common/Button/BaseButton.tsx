import { css } from '@emotion/react';

type ButtonColor = 'primary' | 'secondary';
type ButtonVariant = 'contained' | 'outlined';
type ButtonSize = 'small' | 'medium' | 'large';

interface BaseButtonStylesProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  color?: ButtonColor;
  variant?: ButtonVariant;
  size?: ButtonSize;
}

const baseButtonStyles = (props: BaseButtonStylesProps) => {
  const { color = 'primary', variant = 'contained', size = 'medium' } = props;

  return css({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor:
      variant === 'contained'
        ? color === 'primary'
          ? '#0064FF'
          : '#f0f0f0'
        : 'transparent',
    border:
      variant === 'outlined'
        ? `1.5px solid ${color === 'primary' ? '#0064FF' : '#f0f0f0'}`
        : 'none',
    borderRadius: '8px',
    padding:
      size === 'small'
        ? '8px 16px'
        : size === 'medium'
          ? '12px 24px'
          : '16px 32px',
    fontSize: size === 'small' ? '12px' : size === 'medium' ? '14px' : '16px',
    fontWeight: 'bold',
    color:
      variant === 'contained'
        ? color === 'primary'
          ? '#fff'
          : '#000'
        : color === 'primary'
          ? '#0064FF'
          : '#000',
    cursor: 'pointer',
    transition: 'all 0.2s ease',

    '&:hover': {
      transform: 'translateY(-1px)',
      transition: 'all 0.1s ease',
    },

    '&:active': {
      transform: 'translateY(0.5px) scale(0.99)',
      transition: 'all 0.1s ease',
    },
  });
};

interface BaseButtonProps extends BaseButtonStylesProps {
  children: React.ReactNode;
}

const BaseButton = (props: BaseButtonProps) => {
  return (
    <button css={baseButtonStyles(props)} {...props}>
      {props.children}
    </button>
  );
};

export default BaseButton;
