import { css } from '@emotion/react';
import { colors } from '@/styles/colors';

type InputColor = 'primary' | 'secondary' | 'error';
type InputVariant = 'contained' | 'outlined';
type InputSize = 'small' | 'medium' | 'large' | 'full';

interface BaseInputStylesProps
  extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'size' | 'color'> {
  color?: InputColor;
  variant?: InputVariant;
  size?: InputSize;
  error?: string;
  helperText?: string;
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
      variant === 'contained' ? (disabled ? colors.lightGray : colors.white) : 'transparent',
    outline:
      variant === 'outlined'
        ? `2px solid ${color === 'error' ? colors.error : colors.lightGray}`
        : '2px solid transparent',
    padding: size === 'small' ? '8px 12px' : '12px',
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

    '&[type="date"]': {
      position: 'relative',
      '&::-webkit-calendar-picker-indicator': {
        position: 'absolute',
        right: '12px',
        width: '16px',
        height: '16px',
        cursor: 'pointer',
        zIndex: 10,
      },
      '&::-webkit-datetime-edit': {
        paddingRight: '24px',
      },
    },
  });
};

const baseInputWrapperStyles = css({
  width: '100%',
  display: 'flex',
  flexDirection: 'column',
  gap: '4px',
  fontWeight: 'semibold',
});

const baseInputTextWrapperStyles = ({ error }: { error?: string }) => {
  return css({
    color: colors.gray,
    fontSize: '12px',
    marginTop: '2px',
    marginLeft: error ? '0' : 'auto',
  });
};

const baseInputErrorStyles = () =>
  css({
    ...baseInputTextWrapperStyles,
    color: colors.error,
  });

const baseInputHelperTextStyles = css({
  ...baseInputTextWrapperStyles,
  margin: '0 0 0 auto',
});

const BaseInput = ({ error, helperText, ...restProps }: BaseInputStylesProps) => {
  const { color, variant, size, ...props } = restProps;
  return (
    <div css={baseInputWrapperStyles}>
      <input css={baseInputStyles({ color, variant, size, ...props })} {...props} />
      {(error || helperText) && (
        <div css={baseInputTextWrapperStyles({ error })}>
          {error && <p css={baseInputErrorStyles}>{error}</p>}
          {helperText && <p css={baseInputHelperTextStyles}>{helperText}</p>}
        </div>
      )}
    </div>
  );
};

export default BaseInput;
