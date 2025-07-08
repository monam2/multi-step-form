import { css } from '@emotion/react';
import { colors } from '@/styles/colors';

type InputColor = 'primary' | 'secondary' | 'error';
type InputVariant = 'filled' | 'outlined';
type InputSize = 'small' | 'medium' | 'large' | 'full';

interface BaseInputStylesProps
  extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'size' | 'color'> {
  color?: InputColor;
  variant?: InputVariant;
  size?: InputSize;
}

const baseInputStyles = (props: BaseInputStylesProps) => {
  const { color = 'primary', variant = 'outlined', size = 'medium', disabled } = props;

  return css({
    border: 'none',
    borderRadius: '6px',
    display: 'flex',
    alignItems: 'center',
    width: size === 'full' ? '100%' : 'fit-content',
    height: size === 'full' ? '40px' : 'auto',
    backgroundColor:
      variant === 'filled' ? (disabled ? colors.lightGray : colors.white) : 'transparent',
    outline:
      variant === 'outlined'
        ? `2px solid ${color === 'error' ? colors.error : colors.lightGray}`
        : '2px solid transparent',
    padding: size === 'small' ? '8px 12px' : size === 'medium' ? '12px' : '16px',
    fontSize: size === 'small' ? '12px' : size === 'medium' ? '14px' : '16px',
    fontWeight: 'semibold',
    color: disabled ? colors.darkGray : colors.black,
    cursor: disabled ? 'not-allowed' : 'text',

    '&:focus': {
      outline: `2px solid ${color === 'error' ? colors.error : colors[color]}`,
      boxShadow: `0 0 0 1px ${color === 'error' ? colors.error + '20' : colors[color] + '20'}`,
    },

    '&::placeholder': {
      color: colors.gray,
      fontWeight: 'normal',
    },

    '&:disabled': {
      opacity: 0.6,
      backgroundColor: colors.lightGray,
    },
  });
};

const BaseInput = ({ color, variant, size, ...restProps }: BaseInputStylesProps) => {
  return <input css={baseInputStyles({ color, variant, size, ...restProps })} {...restProps} />;
};

export default BaseInput;
