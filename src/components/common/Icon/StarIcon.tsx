import { css } from '@emotion/react';
import { colors } from '@/styles/colors';

import { Star, StarHalf } from 'lucide-react';

interface StarIconProps {
  rating: 0 | 0.5 | 1;
  dist?: 'left' | 'right';
}

const StarsStyles = css({
  display: 'flex',
  gap: '4px',
});

const RatingStyles = css({
  position: 'absolute',
  top: 0,
});

const StarIcon = ({ rating, dist }: StarIconProps) => {
  if (rating === 0.5 && dist === 'left') {
    return (
      <div css={css({ position: 'relative' })}>
        <Star
          css={{ ...StarsStyles }}
          fill={colors.lightGray}
          stroke={colors.lightGray}
          size={32}
        />
        <StarHalf
          css={{ ...StarsStyles, ...RatingStyles }}
          fill={colors.yellow[300]}
          stroke={colors.yellow[500]}
          size={32}
        />
      </div>
    );
  }

  if (rating === 0.5 && dist === 'right') {
    return (
      <div css={css({ position: 'relative' })}>
        <StarHalf
          css={{ ...StarsStyles, ...RatingStyles }}
          fill={colors.yellow[300]}
          stroke={colors.yellow[500]}
          size={32}
        />
      </div>
    );
  }

  return (
    <Star
      fill={rating === 1 ? colors.yellow[300] : colors.lightGray}
      stroke={rating === 1 ? colors.yellow[500] : colors.lightGray}
      size={32}
    />
  );
};

export default StarIcon;
