import { useEffect, useState } from 'react';

interface UseScreenSizeProps {
  width?: number;
  height?: number;
}

/**
 * 화면 크기를 체크하는 커스텀 훅
 * @param width 최소 너비
 * @param height 최소 높이
 * @returns 데스크탑 여부
 */
const useScreenSize = ({ width, height }: UseScreenSizeProps) => {
  const [screenWidth, setScreenWidth] = useState(0);
  const [screenHeight, setScreenHeight] = useState(0);

  const widthFlag = width ? screenWidth >= width : true;
  const heightFlag = height ? screenHeight >= height : true;

  // isDesktop을 useMemo로 하더라도, 재계산되는 경우 = 창 크기가 바뀌는 경우이므로 빈번하지 않다.
  const isDesktop = widthFlag && heightFlag;

  useEffect(() => {
    const handleResize = () => {
      setScreenWidth(window.innerWidth);
      setScreenHeight(window.innerHeight);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return { screenWidth, screenHeight, isDesktop };
};

export default useScreenSize;
