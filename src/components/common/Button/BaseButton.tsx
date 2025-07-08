import { css } from '@emotion/react';
import { colors } from '@/styles/colors';

type ButtonColor = 'primary' | 'secondary';
type ButtonVariant = 'contained' | 'outlined';
type ButtonSize = 'small' | 'medium' | 'large' | 'full';

interface BaseButtonStylesProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
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
    backgroundColor: variant === 'contained' ? colors[color] : 'transparent',
    border: variant === 'outlined' ? `1.5px solid ${colors[color]}` : 'none',
    borderRadius: '8px',
    padding: size === 'small' ? '8px 16px' : size === 'medium' ? '10px 20px' : '12px 24px',
    width: size === 'full' ? '100%' : 'fit-content',
    height: size === 'full' ? '40px' : '30px',
    fontSize: size === 'small' ? '12px' : size === 'medium' ? '14px' : '16px',
    fontWeight: 'bold',
    color: variant === 'contained' ? colors.white : colors.primary,
    cursor: 'pointer',
    transition: 'all 0.1s ease',

    '&:hover': {
      transform: 'translateY(-0.5px)',
      transition: 'all 0.1s ease',
    },

    '&:active': {
      transform: 'translateY(0.3px) scale(0.99)',
      transition: 'all 0.1s ease',
    },

    ':disabled': {
      opacity: 0.4,
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
