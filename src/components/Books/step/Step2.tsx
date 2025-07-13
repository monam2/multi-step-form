import { css } from '@emotion/react';
import { useFormContext } from 'react-hook-form';

import Rating from '../Rating';
import { BaseButton } from '@/components/common';

import { colors } from '@/styles/colors';

const Step2Styles = css({
  display: 'flex',
  flexDirection: 'column',
  width: '100%',
  height: '100%',
  gap: '50px',
});

const RatingContainerStyles = css({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  gap: '10px',
});

const TextContainerStyles = css({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  padding: '20px',
  gap: '10px',
  fontSize: '16px',
  color: colors.gray,
});

const ButtonContainerStyles = css({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  gap: '10px',
  marginBottom: '20px',
});

const TextStyles = css({
  fontSize: '16px',
  color: colors.gray,
});

const Step2 = () => {
  const { watch, setValue } = useFormContext();
  const isRecommended = watch('isRecommended');

  const handleRatingChange = (value: number) => {
    setValue('rating', value);
  };

  return (
    <div css={Step2Styles}>
      <h2>도서 추천</h2>
      <div css={TextContainerStyles}>
        <span>다른 사람들에게 이 도서를 추천하시겠습니까?</span>
      </div>
      <div css={ButtonContainerStyles}>
        <BaseButton
          size="large"
          variant="contained"
          color={isRecommended ? 'primary' : 'secondary'}
          onClick={() => setValue('isRecommended', true)}
        >
          추천하기
        </BaseButton>
        <BaseButton
          size="large"
          variant="contained"
          color={isRecommended ? 'secondary' : 'primary'}
          onClick={() => setValue('isRecommended', false)}
        >
          추천안함
        </BaseButton>
      </div>
      <div css={RatingContainerStyles}>
        <span css={css(TextStyles, { fontSize: '20px', marginBottom: '20px' })}>
          별점을 선택해주세요.
        </span>
        <Rating size={40} value={watch('rating')} onChange={handleRatingChange} />
        <span css={TextStyles}>별점은 1점 또는 5점을 선택하신 경우</span>
        <span css={TextStyles}>다음 단계에서 독후감을 필수로 작성해야 합니다.</span>
      </div>
    </div>
  );
};

export default Step2;
