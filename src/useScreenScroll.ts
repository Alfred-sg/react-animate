import { useState, useMemo, useRef, useCallback, useEffect } from 'react';
import useAnimatePercent from './useAnimatePercent';
import { Easing } from './types';

// 获取屏幕高度，不受 resize 影响
const getWindowHeight = () => {
  return window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;
};

// 获取滚动偏移量
const getScrollTop = () => {
  return window.pageYOffset || document.body.scrollTop || document.documentElement.scrollTop;
};

// 获取当前位于第几屏，从 1 开始计数
export const getCurrentScreen = (currentScrollTop?: number) => {
  const scrollTop = currentScrollTop ? currentScrollTop : getScrollTop();
  const windowHeight = getWindowHeight();
  const currentScreen = Math.ceil(scrollTop / windowHeight);

  return scrollTop % windowHeight === 0 ? currentScreen + 1 : currentScreen;
};

export default ({
  duration = 1000,
  onFinish,
  easing = 'swing',
}: {
  duration?: number;
  onFinish?: () => void;
  easing?: Easing;
}) => {
  const currentScreenRef = useRef<number>(-1);
  const [currentScrollTop, setCurrentScrollTop] = useState<number>(0);

  useEffect(() => {
    setCurrentScrollTop(getScrollTop());
  }, []);

  const scrollTo = useCallback((to: number, percent: number) => {
    if (currentScreenRef.current === -1){
      currentScreenRef.current = getCurrentScreen();
    };
    const currentScreenTemp = currentScreenRef.current;
    const windowHeight = getWindowHeight();
    const nextScrollTopTemp = (currentScreenTemp - 1 + to * percent) * windowHeight;
    const currentScrollTop = getScrollTop();

    if (
      (to > 0 && currentScrollTop >= nextScrollTopTemp) || 
      (to < 0 && currentScrollTop <= nextScrollTopTemp)
    ){
      setCurrentScrollTop(currentScrollTop);
      return;
    };

    window.scrollTo({
      top: nextScrollTopTemp,
    });
    setCurrentScrollTop(nextScrollTopTemp);
  }, [currentScreenRef, ]);

  const handleFinish = useCallback(() => {
    currentScreenRef.current = -1;
    if (onFinish) onFinish();
  }, [currentScreenRef]);

  const { start: goNextScreen } = useAnimatePercent({
    duration,
    excute: (percent: number) => {
      scrollTo(1, percent);
    },
    onFinish: handleFinish,
    easing,
    manual: true,
  });

  const { start: goPrevScreen } = useAnimatePercent({
    duration,
    excute: (percent: number) => {
      scrollTo(-1, percent);
    },
    onFinish: handleFinish,
    easing,
    manual: true,
  });

  const handleWheel = useCallback((event) => {
    event.preventDefault();
    const { deltaY } = event;
    
    if (deltaY > 0){
      goNextScreen();
    } else if (deltaY < 0){
      goPrevScreen();
    };
  }, [goNextScreen, goPrevScreen]);

  useEffect(() => {
    window.addEventListener('wheel', handleWheel, { passive: false });

    return () => {
      window.removeEventListener('wheel', handleWheel)
    };
  }, []);

  const handleMouseUp = useCallback((event: any) => {
    const left = document.documentElement.clientWidth;
    // @FIXME，超过半屏跳到下一屏，半屏之内在当前屏
    if(event.clientX > left){
      goPrevScreen();
    };
  }, [goPrevScreen]);

  useEffect(() => {
    window.addEventListener('mouseup', handleMouseUp);

    return () => {
      window.removeEventListener('mouseup', handleMouseUp);
    };
  }, [handleMouseUp]);

  const currentScreen = useMemo(() => {
    return getCurrentScreen(currentScrollTop);
  }, [currentScrollTop]);

  return {
    goPrevScreen,
    goNextScreen,

    currentScrollTop,
    currentScreen,
  };
};