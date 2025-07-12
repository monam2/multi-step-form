import { css } from '@emotion/react';
import { colors } from '@/styles/colors';
import { BaseSelect } from '@/components/common';

interface LabeledSelectProps extends React.ComponentProps<typeof BaseSelect> {
  label: string;
  id?: string;
  required?: boolean;
  error?: string;
  helperText?: string;
}

const labeledSelectWrapperStyles = css({
  display: 'flex',
  flexDirection: 'column',
  gap: '4px',
  width: '100%',
});

const LabeledSelect = ({
  label,
  id,
  required,
  error,
  helperText,
  ...restProps
}: LabeledSelectProps) => {
  return (
    <div css={labeledSelectWrapperStyles}>
      <label htmlFor={id} css={css({ fontWeight: 'semibold' })}>
        {label}
        {required && <span css={css({ color: colors.error })}>*</span>}
      </label>
      <BaseSelect id={id} error={error} helperText={helperText} {...restProps} />
    </div>
  );
};

export default LabeledSelect;
