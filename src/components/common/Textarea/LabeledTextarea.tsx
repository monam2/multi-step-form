import { css } from '@emotion/react';
import { colors } from '@/styles/colors';
import { BaseTextarea } from '@/components/common';

interface LabeledTextareaProps extends React.ComponentProps<typeof BaseTextarea> {
  label: string;
  id?: string;
  required?: boolean;
  error?: string;
  helperText?: string;
}

const LabeledTextarea = ({
  label,
  id,
  required,
  error,
  helperText,
  ...restProps
}: LabeledTextareaProps) => {
  return (
    <div css={css({ display: 'flex', flexDirection: 'column', gap: '4px', width: '100%' })}>
      <label htmlFor={id} css={css({ fontWeight: 'semibold' })}>
        {label}
        {required && <span css={css({ color: colors.error })}>*</span>}
      </label>
      <BaseTextarea id={id} error={error} helperText={helperText} {...restProps} />
    </div>
  );
};

export default LabeledTextarea;
