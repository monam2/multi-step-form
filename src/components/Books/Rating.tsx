import { useCallback, useState } from 'react';

import { css } from '@emotion/react';
import StarIcon from '../common/Icon/StarIcon';

/*
1차 구현
- 1점 단위의 별점 5개
- hover시 이벤트 스타일링 & click시 별점 체크
- 현재 별점을 클릭하면 0점으로 초기화

2차 구현
- 1점 단위의 별점 10개
- Array.from의 length를 10으로 설정

3차 구현
- 1점 단위의 별점 10개. 이때 각 별을 half별로 구성하고, 스타일 조정
- index % 2 값에 따라 half 방향 결정(왼/오)
- index / 2 + index % 2의 값에 따라 결정
*/

const RatingWrapperStyles = (index: number, hoverRating: number) =>
  css({
    cursor: 'pointer',
    '&:hover': {
      transform: index <= hoverRating ? 'scale(1.2)' : 'scale(1)',
    },
  });

const Rating = () => {
  const [hoverRating, setHoverRating] = useState(0);
  const [realRating, setRealRating] = useState(0);

  const handleHover = (index: number) => {
    setHoverRating(index + 1);
  };

  const handleClick = (index: number) => {
    if (index === realRating - 1) {
      setHoverRating(0);
      setRealRating(0);
      return;
    }

    setHoverRating(index + 1);
    setRealRating(index + 1);
  };

  const rateValue = useCallback(
    (index: number) =>
      realRating ? (index <= realRating - 1 ? 1 : 0) : index <= hoverRating - 1 ? 1 : 0,
    [realRating, hoverRating],
  );

  return (
    <div
      css={css({ display: 'flex', flexDirection: 'row', gap: '4px' })}
      onMouseLeave={() => setHoverRating(0)}
    >
      {Array.from({ length: 5 }).map((_, index) => (
        <div
          key={index}
          css={RatingWrapperStyles(index, hoverRating)}
          onMouseEnter={() => handleHover(index)}
          onClick={() => handleClick(index)}
        >
          <StarIcon rating={rateValue(index)} />
        </div>
      ))}
      <span>별점은 {realRating}점 입니다.</span>
    </div>
  );
};

export default Rating;
