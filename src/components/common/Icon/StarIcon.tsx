import { css } from '@emotion/react';
import { colors } from '@/styles/colors';

import { Star, StarHalf } from 'lucide-react';

interface StarIconProps {
  rating: 0 | 0.5 | 1;
}

const StarsStyles = css({
  display: 'flex',
  gap: '4px',
});

const RatingStyles = css({
  position: 'absolute',
  top: 0,
});

const StarIcon = ({ rating }: StarIconProps) => {
  if (rating === 1) {
    return (
      <Star fill={colors.yellow[300]} stroke={colors.yellow[500]} strokeWidth={1.5} size={32} />
    );
  }

  if (rating === 0) {
    return <Star fill={colors.lightGray} stroke={colors.lightGray} strokeWidth={1.5} size={32} />;
  }

  return (
    <div css={css({ position: 'relative' })}>
      <Star css={{ ...StarsStyles }} fill={colors.lightGray} stroke={colors.lightGray} size={32} />
      <StarHalf
        css={{ ...StarsStyles, ...RatingStyles }}
        fill={colors.yellow[300]}
        stroke={colors.yellow[500]}
        size={32}
      />
    </div>
  );
};

export default StarIcon;
