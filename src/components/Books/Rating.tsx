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

const Rating = () => {
  const [hoverRating, setHoverRating] = useState(0);
  const [realRating, setRealRating] = useState(0);

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
    if (index === 0 && dist === 'left' && realRating === 0.5) {
      setRealRating(0);
      return;
    }

    if (dist === 'left') {
      setRealRating(index + 0.5);
    } else {
      setRealRating(index + 1);
    }
  };

  /** 별점 계산 로직 */
  const getStarRating = (index: number) => {
    // 별점에서 마우스를 내리면 realRating으로 계산
    const currentRating = hoverRating || realRating;

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
          <StarIcon rating={getStarRating(index)} />
        </div>
      ))}
    </div>
  );
};

export default Rating;
