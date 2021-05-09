import useAnimate from './useAnimate';
import { Easing } from './types';

export default ({
  duration = 450,
  excute,
  onFinish,
  easing = 'swing',
  manual = false,
}: {
  duration?: number;
  excute: (percent: number) => void;
  onFinish?: () => void;
  easing?: Easing;
  manual?: boolean;
}) => {
  const { pos: percent, ...rest } = useAnimate({
    startPos: 0,
    endPos: 1,
    duration,
    excute,
    onFinish,
    easing,
    manual
  });

  return {
    percent,
    ...rest,
  };
};