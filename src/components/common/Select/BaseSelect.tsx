import { css } from '@emotion/react';
import { colors } from '@/styles/colors';

type SelectColor = 'primary' | 'secondary' | 'error';
type SelectVariant = 'contained' | 'outlined';
type SelectSize = 'small' | 'medium' | 'large' | 'full';

interface BaseSelectStylesProps
  extends Omit<React.SelectHTMLAttributes<HTMLSelectElement>, 'size' | 'color'> {
  color?: SelectColor;
  variant?: SelectVariant;
  size?: SelectSize;
  error?: string;
  helperText?: string;
}

const baseSelectWrapperStyles = (props: BaseSelectStylesProps) => {
  const { size } = props;
  return css({
    width: size === 'full' ? '100%' : 'fit-content',
    display: 'flex',
    flexDirection: 'column',
    gap: '6px',
    fontWeight: 'semibold',
  });
};

const baseSelectStyles = (props: BaseSelectStylesProps) => {
  const { color = 'primary', variant = 'outlined', size = 'medium', disabled = false } = props;

  return css({
    border: 'none',
    borderRadius: '6px',
    display: 'flex',
    alignItems: 'center',
    width:
      size === 'full'
        ? '100%'
        : size === 'small'
          ? '120px'
          : size === 'medium'
            ? '160px'
            : size === 'large'
              ? '200px'
              : 'fit-content',
    height: size === 'full' ? '40px' : size === 'small' ? '30px' : '40px',
    backgroundColor:
      variant === 'contained' ? (disabled ? colors.lightGray : colors.white) : 'transparent',
    outline:
      variant === 'outlined'
        ? `2.5px solid ${color === 'error' ? colors.error : colors.lightGray}`
        : '2.5px solid transparent',
    padding: size === 'small' ? '8px 12px' : '12px 12px',
    fontSize: size === 'small' ? '12px' : size === 'medium' ? '14px' : '16px',
    fontWeight: 'semibold',
    color: disabled ? colors.darkGray : colors.black,
    cursor: disabled ? 'default' : 'pointer',

    '&:focus': {
      outline: `2.5px solid ${color === 'error' ? colors.error : colors[color]}`,
      outlineOffset: '2px',
    },

    '&:active': {
      outline: `2.5px solid ${color === 'error' ? colors.error : colors[color]}`,
      outlineOffset: '2px',
    },

    '&:blur': {
      outline: variant === 'outlined' ? `2.5px solid ${colors.lightGray}` : 'none',
      outlineOffset: '2px',
    },

    '&:disabled': {
      opacity: 0.6,
      outline: 'none',
      backgroundColor: colors.lightGray,
    },
  });
};

const baseSelectTextWrapperStyles = ({ error }: { error?: string }) => {
  return css({
    width: '100%',
    display: 'flex',
    color: colors.gray,
    fontSize: '12px',
    marginTop: '2px',
    justifyContent: error ? '0' : 'auto',
  });
};

const baseSelectErrorStyles = () =>
  css({
    ...baseSelectTextWrapperStyles,
    color: colors.error,
  });

const baseSelectHelperTextStyles = css({
  ...baseSelectTextWrapperStyles,
  margin: '0 0 0 auto',
});

interface BaseSelectProps extends BaseSelectStylesProps {
  options: { key?: string; value: string; label: string }[];
  error?: string;
  helperText?: string;
}

const BaseSelect = ({ options, error, helperText, ...restProps }: BaseSelectProps) => {
  const { color, variant, size, ...props } = restProps;

  return (
    <div css={baseSelectWrapperStyles({ size })}>
      <select css={baseSelectStyles({ color, variant, size, ...props })} {...props}>
        {options.map(({ key, value, label }, index) => (
          <option key={key || label || value || `${index}-${value}`} value={value}>
            {label}
          </option>
        ))}
      </select>
      <div css={baseSelectTextWrapperStyles({ error })}>
        {error && <p css={baseSelectErrorStyles}>{error}</p>}
        {helperText && <p css={baseSelectHelperTextStyles}>{helperText}</p>}
      </div>
    </div>
  );
};

export default BaseSelect;
