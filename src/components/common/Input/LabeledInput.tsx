import { css } from '@emotion/react';
import { colors } from '@/styles/colors';
import { BaseInput } from '@/components/common';

interface LabeledInputProps extends React.ComponentProps<typeof BaseInput> {
  label: string;
  id?: string;
  required?: boolean;
  error?: string;
  helperText?: string;
}

const LabeledInput = ({
  label,
  id,
  required,
  error,
  helperText,
  ...restProps
}: LabeledInputProps) => {
  return (
    <div css={css({ display: 'flex', flexDirection: 'column', gap: '4px', width: '100%' })}>
      <label htmlFor={id} css={css({ fontWeight: 'semibold' })}>
        {label}
        {required && <span css={css({ color: colors.error })}>*</span>}
      </label>
      <BaseInput id={id} error={error} helperText={helperText} {...restProps} />
    </div>
  );
};

export default LabeledInput;
