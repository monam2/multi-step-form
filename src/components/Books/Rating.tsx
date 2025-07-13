import { useState } from 'react';

import { css } from '@emotion/react';
import { StarIcon } from '@/components/common';

const RatingWrapperStyles = css({
  position: 'relative',
  cursor: 'pointer',
});

const RatingEachWrapperStyles = css({
  position: 'absolute',
  top: 0,
  width: '50%',
  height: '100%',
  zIndex: 1,
});

interface RatingProps {
  size?: number;
  value: number;
  onChange: (value: number) => void;
}

const Rating = ({ size = 32, value, onChange }: RatingProps) => {
  const [hoverRating, setHoverRating] = useState(value);

  /** 마우스 올렸을 때의 별점을 설정 */
  const handleHover = (index: number, dist: 'left' | 'right') => {
    if (dist === 'left') {
      setHoverRating(index + 0.5);
    } else {
      setHoverRating(index + 1);
    }
  };

  /** 클릭했을 때의 별점을 설정 */
  const handleClick = (index: number, dist: 'left' | 'right') => {
    if (index === 0 && dist === 'left' && value === 0.5) {
      onChange(0);
      return;
    }

    if (dist === 'left') {
      onChange(index + 0.5);
    } else {
      onChange(index + 1);
    }
  };

  /** 별점 계산 로직 */
  const getStarRating = (index: number) => {
    // 별점에서 마우스를 내리면 realRating으로 계산
    const currentRating = hoverRating || value;

    if (currentRating >= index + 1) return 1;
    if (currentRating >= index + 0.5) return 0.5;
    return 0;
  };

  return (
    <div
      css={css({ display: 'flex', flexDirection: 'row', padding: '10px', gap: '1px' })}
      onMouseLeave={() => setHoverRating(0)}
    >
      {Array.from({ length: 5 }).map((_, index) => (
        <div key={index} css={RatingWrapperStyles}>
          <div
            css={css([
              RatingEachWrapperStyles,
              {
                left: 0,
              },
            ])}
            onMouseEnter={() => handleHover(index, 'left')}
            onClick={() => handleClick(index, 'left')}
          />
          <div
            css={css([
              RatingEachWrapperStyles,
              {
                right: 0,
              },
            ])}
            onMouseEnter={() => handleHover(index, 'right')}
            onClick={() => handleClick(index, 'right')}
          />
          <StarIcon rating={getStarRating(index)} size={size} />
        </div>
      ))}
    </div>
  );
};

export default Rating;
