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
  let rafId: number = -1;
  let now: number = Date.now();
  const startPosTemp = typeof startPos === 'function' ? startPos() : startPos;
  let currentPos: number = startPosTemp;

  const cancel = () => {
    cancelAnimationFrame(rafId);
    rafId = -1;
  };

  const run = () => {
    const progressTime = Date.now() - now;
    const startPosTemp = typeof startPos === 'function' ? startPos() : startPos;
    const changePos = endPos - startPosTemp;
    const pos = progressTime >= duration? changePos: 
      tween[easing](progressTime, startPosTemp, changePos, duration);
    excute(pos);
    currentPos = pos;

    if (progressTime > duration){
      cancel();
      if (onFinish) onFinish();
    } else {
      rafId = requestAnimationFrame(run);
    }
  };

  const start = () => {
    if (rafId !== -1) return;
    now = Date.now();
    rafId = requestAnimationFrame(run)
  };

  const resume = () => {
    if (rafId !== -1) return;
    rafId = requestAnimationFrame(run)
  };

  if (manual !== true){
    start();
  };

  return {
    start,
    cancel,
    play: start,
    stop: cancel,
    resume,
    pos: currentPos,
  };
}