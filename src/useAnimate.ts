import { useRef, useState, useCallback, useEffect } from 'react';
import * as tween from './tween';
import { Easing } from './types';

export default ({
  startPos,
  endPos,
  duration = 450,
  excute,
  onFinish,
  easing = 'swing',
  manual = false,
}: {
  startPos: number | (() => number);
  endPos: number;
  duration?: number;
  excute: (pos: number) => void;
  onFinish?: () => void;
  easing?: Easing;
  manual?: boolean;
}) => {
  const rafIdRef = useRef<number>(-1);
  const nowRef = useRef<number>(Date.now());
  const startPosTemp = typeof startPos === 'function' ? startPos() : startPos;
  const [currentPos, setCurrentPos] = useState<number>(startPosTemp);

  const cancel = useCallback(() => {
    cancelAnimationFrame(rafIdRef.current);
    rafIdRef.current = -1;
  }, [rafIdRef]);

  const run = useCallback(() => {
    const progressTime = Date.now() - nowRef.current;
    const startPosTemp = typeof startPos === 'function' ? startPos() : startPos;
    const changePos = endPos - startPosTemp;
    const pos = progressTime >= duration? changePos: 
      tween[easing](progressTime, startPosTemp, changePos, duration);
    excute(pos);
    setCurrentPos(pos);

    if (progressTime > duration){
      cancelAnimationFrame(rafIdRef.current);
      rafIdRef.current = -1;
      if (onFinish) onFinish();
    } else {
      rafIdRef.current = requestAnimationFrame(run);
    }
  }, [rafIdRef, nowRef, cancel]);

  const start = useCallback(() => {
    if (rafIdRef.current !== -1) return;
    nowRef.current = Date.now();
    rafIdRef.current = requestAnimationFrame(run)
  }, [rafIdRef, nowRef]);

  const resume = useCallback(() => {
    if (rafIdRef.current !== -1) return;
    rafIdRef.current = requestAnimationFrame(run)
  }, [rafIdRef]);

  useEffect(() => {
    if (manual !== true){
      start();
    };
  }, [start]);

  return {
    start,
    cancel,
    play: start,
    stop: cancel,
    resume,
    pos: currentPos,
  };
}