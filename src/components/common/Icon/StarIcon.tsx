import { css } from '@emotion/react';
import { colors } from '@/styles/colors';

import { Star, StarHalf } from 'lucide-react';

interface StarIconProps {
  rating: 0 | 0.5 | 1;
  size?: number;
}

const StarsStyles = css({
  display: 'flex',
  gap: '4px',
});

const RatingStyles = css({
  position: 'absolute',
  top: 0,
});

const StarIcon = ({ rating, size = 32 }: StarIconProps) => {
  if (rating === 1) {
    return (
      <Star fill={colors.yellow[300]} stroke={colors.yellow[500]} strokeWidth={1.5} size={size} />
    );
  }

  if (rating === 0) {
    return <Star fill={colors.lightGray} stroke={colors.lightGray} strokeWidth={1.5} size={size} />;
  }

  return (
    <div css={css({ position: 'relative' })}>
      <Star
        css={{ ...StarsStyles }}
        fill={colors.lightGray}
        stroke={colors.lightGray}
        size={size}
      />
      <StarHalf
        css={{ ...StarsStyles, ...RatingStyles }}
        fill={colors.yellow[300]}
        stroke={colors.yellow[500]}
        size={size}
      />
    </div>
  );
};

export default StarIcon;
