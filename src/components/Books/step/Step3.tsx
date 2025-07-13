import { css } from '@emotion/react';
import { useFormContext } from 'react-hook-form';

import { RHFLabeledTextarea } from '@/components/common';

import { colors } from '@/styles/colors';
import { BookFormData } from '@/types/forms';

const Step3Styles = css({
  display: 'flex',
  flexDirection: 'column',
  width: '100%',
  height: '100%',
  gap: '30px',
});

const TextContainerStyles = css({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  padding: '20px',
  gap: '10px',
  fontSize: '14px',
  color: colors.gray,
});

const InputContainerStyles = css({
  display: 'flex',
  flexDirection: 'column',
  gap: '10px',
  marginBottom: '20px',
});

const Step3 = () => {
  const { watch, setValue } = useFormContext();
  const review = watch('review');
  const rating = watch('rating');

  return (
    <div css={Step3Styles}>
      <h2>독후감 작성</h2>
      <div css={TextContainerStyles}>
        <span>다른 사람들과 공유할 수 있는 독후감을 작성해주세요.</span>
        <span>별점이 1점 또는 5점인 경우 독후감을 필수로 작성해야 합니다.</span>
      </div>
      <div css={InputContainerStyles}>
        {/* RHF 변경 및 별점에 따른 유효성 검증 추가 필요 */}
        <RHFLabeledTextarea<BookFormData>
          label=""
          name="review"
          placeholder="독후감을 입력해주세요."
          size="full"
          value={review}
          onChange={(e) => setValue('review', e.target.value)}
          helperText={`${review.length}/1000`}
          rules={{
            required: rating === 1 || rating === 5 ? '독후감을 입력해주세요.' : false,
            maxLength: {
              value: 1000,
              message: '독후감은 최대 1000자까지 작성할 수 있습니다.',
            },
          }}
        />
      </div>
    </div>
  );
};

export default Step3;
