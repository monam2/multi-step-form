import { css } from '@emotion/react';
import { colors } from '@/styles/colors';

type TextareaColor = 'primary' | 'secondary' | 'error';
type TextareaVariant = 'contained' | 'outlined';
type TextareaSize = 'small' | 'medium' | 'large' | 'full';

interface BaseTextareaStylesProps
  extends Omit<React.TextareaHTMLAttributes<HTMLTextAreaElement>, 'size' | 'color'> {
  color?: TextareaColor;
  variant?: TextareaVariant;
  size?: TextareaSize;
  error?: string;
  helperText?: string;
}

const baseTextareaStyles = (props: BaseTextareaStylesProps) => {
  const { color = 'primary', variant = 'outlined', size = 'medium', disabled } = props;

  return css({
    border: 'none',
    borderRadius: '6px',
    width: size === 'full' ? '100%' : 'fit-content',
    minHeight:
      size === 'small'
        ? '80px'
        : size === 'medium'
          ? '100px'
          : size === 'large'
            ? '120px'
            : '100px',
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
    resize: 'vertical',
    fontFamily: 'inherit',

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

const baseTextareaWrapperStyles = css({
  width: '100%',
  display: 'flex',
  flexDirection: 'column',
  gap: '4px',
  fontWeight: 'semibold',
});

const baseTextareaTextWrapperStyles = ({ error }: { error?: string }) => {
  return css({
    display: 'flex',
    flexDirection: 'row',
    gap: '4px',
    color: colors.gray,
    fontSize: '12px',
    marginTop: '2px',
    marginLeft: error ? '0' : 'auto',
  });
};

const baseTextareaErrorStyles = () =>
  css({
    ...baseTextareaTextWrapperStyles,
    color: colors.error,
  });

const baseTextareaHelperTextStyles = css({
  ...baseTextareaTextWrapperStyles,
  margin: '0 0 0 auto',
});

const BaseTextarea = ({ error, helperText, ...restProps }: BaseTextareaStylesProps) => {
  const { color, variant, size, ...props } = restProps;
  return (
    <div css={baseTextareaWrapperStyles}>
      <textarea css={baseTextareaStyles({ color, variant, size, ...props })} {...props} />
      {(error || helperText) && (
        <div css={baseTextareaTextWrapperStyles({ error })}>
          {error && <p css={baseTextareaErrorStyles}>{error}</p>}
          {helperText && <p css={baseTextareaHelperTextStyles}>{helperText}</p>}
        </div>
      )}
    </div>
  );
};

export default BaseTextarea;
