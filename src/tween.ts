import * as easing from './easing';
import { Easing } from './types';

const tween = (
  progressTime: number,// 已运行时间
  startPos: number,// 起始位置
  changePos: number,// 变更距离
  duration: number,// 动画持续时间
  type: Easing,
) => {
  const progressTimePercent = progressTime / duration;
  const posPercent = easing[type](progressTimePercent);

  return startPos + posPercent * changePos;
}


// 1. 线性函数
export const linear = (   
  progressTime: number,// 已运行时间   
  startPos: number,// 起始位置   
  changePos: number,// 变更距离   
  duration: number,// 动画持续时间   
) => {
  return tween(progressTime, startPos, changePos, duration, 'linear');
};

// 2. 线性函数
export const swing = (   
  progressTime: number,// 已运行时间   
  startPos: number,// 起始位置   
  changePos: number,// 变更距离   
  duration: number,// 动画持续时间   
) => {
  return tween(progressTime, startPos, changePos, duration, 'swing');
};

// 3. easeIn 加速类
export const easeInSine = (   
  progressTime: number,// 已运行时间   
  startPos: number,// 起始位置   
  changePos: number,// 变更距离   
  duration: number,// 动画持续时间   
) => {
  return tween(progressTime, startPos, changePos, duration, 'easeInSine');
};

export const easeInQuad = (   
  progressTime: number,// 已运行时间   
  startPos: number,// 起始位置   
  changePos: number,// 变更距离   
  duration: number,// 动画持续时间   
) => {
  return tween(progressTime, startPos, changePos, duration, 'easeInQuad');
};

export const easeInCubic = (   
  progressTime: number,// 已运行时间   
  startPos: number,// 起始位置   
  changePos: number,// 变更距离   
  duration: number,// 动画持续时间   
) => {
  return tween(progressTime, startPos, changePos, duration, 'easeInCubic');
};

export const easeInQuart = (   
  progressTime: number,// 已运行时间   
  startPos: number,// 起始位置   
  changePos: number,// 变更距离   
  duration: number,// 动画持续时间   
) => {
  return tween(progressTime, startPos, changePos, duration, 'easeInQuart');
};

export const easeInQuint = (   
  progressTime: number,// 已运行时间   
  startPos: number,// 起始位置   
  changePos: number,// 变更距离   
  duration: number,// 动画持续时间   
) => {
  return tween(progressTime, startPos, changePos, duration, 'easeInQuint');
};

export const easeInCirc = (   
  progressTime: number,// 已运行时间   
  startPos: number,// 起始位置   
  changePos: number,// 变更距离   
  duration: number,// 动画持续时间   
) => {
  return tween(progressTime, startPos, changePos, duration, 'easeInCirc');
};

export const easeInEppo = (   
  progressTime: number,// 已运行时间   
  startPos: number,// 起始位置   
  changePos: number,// 变更距离   
  duration: number,// 动画持续时间   
) => {
  return tween(progressTime, startPos, changePos, duration, 'easeInEppo');
};

export const easeInElastic = (   
  progressTime: number,// 已运行时间   
  startPos: number,// 起始位置   
  changePos: number,// 变更距离   
  duration: number,// 动画持续时间   
) => {
  return tween(progressTime, startPos, changePos, duration, 'easeInElastic');
};

export const easeInBack = (   
  progressTime: number,// 已运行时间   
  startPos: number,// 起始位置   
  changePos: number,// 变更距离   
  duration: number,// 动画持续时间   
) => {
  return tween(progressTime, startPos, changePos, duration, 'easeInBack');
};

export const easeInBounce = (   
  progressTime: number,// 已运行时间   
  startPos: number,// 起始位置   
  changePos: number,// 变更距离   
  duration: number,// 动画持续时间   
) => {
  return tween(progressTime, startPos, changePos, duration, 'easeInBounce');
};

// 4. easeOut 减速类
export const easeOutQuad = (   
  progressTime: number,// 已运行时间   
  startPos: number,// 起始位置   
  changePos: number,// 变更距离   
  duration: number,// 动画持续时间   
) => {
  return tween(progressTime, startPos, changePos, duration, 'easeOutQuad');
};

export const easeOutCubic = (   
  progressTime: number,// 已运行时间   
  startPos: number,// 起始位置   
  changePos: number,// 变更距离   
  duration: number,// 动画持续时间   
) => {
  return tween(progressTime, startPos, changePos, duration, 'easeOutCubic');
};

export const easeOutQuart = (   
  progressTime: number,// 已运行时间   
  startPos: number,// 起始位置   
  changePos: number,// 变更距离   
  duration: number,// 动画持续时间   
) => {
  return tween(progressTime, startPos, changePos, duration, 'easeOutQuart');
};

export const easeOutQuint = (   
  progressTime: number,// 已运行时间   
  startPos: number,// 起始位置   
  changePos: number,// 变更距离   
  duration: number,// 动画持续时间   
) => {
  return tween(progressTime, startPos, changePos, duration, 'easeOutQuint');
};

export const easeOutSine = (   
  progressTime: number,// 已运行时间   
  startPos: number,// 起始位置   
  changePos: number,// 变更距离   
  duration: number,// 动画持续时间   
) => {
  return tween(progressTime, startPos, changePos, duration, 'easeOutSine');
};

export const easeOutEppo = (   
  progressTime: number,// 已运行时间   
  startPos: number,// 起始位置   
  changePos: number,// 变更距离   
  duration: number,// 动画持续时间   
) => {
  return tween(progressTime, startPos, changePos, duration, 'easeOutEppo');
};

export const easeOutCirc = (   
  progressTime: number,// 已运行时间   
  startPos: number,// 起始位置   
  changePos: number,// 变更距离   
  duration: number,// 动画持续时间   
) => {
  return tween(progressTime, startPos, changePos, duration, 'easeOutCirc');
};

export const easeOutElastic = (   
  progressTime: number,// 已运行时间   
  startPos: number,// 起始位置   
  changePos: number,// 变更距离   
  duration: number,// 动画持续时间   
) => {
  return tween(progressTime, startPos, changePos, duration, 'easeOutElastic');
};

export const easeOutBack = (   
  progressTime: number,// 已运行时间   
  startPos: number,// 起始位置   
  changePos: number,// 变更距离   
  duration: number,// 动画持续时间   
) => {
  return tween(progressTime, startPos, changePos, duration, 'easeOutBack');
};

export const easeOutBounce = (   
  progressTime: number,// 已运行时间   
  startPos: number,// 起始位置   
  changePos: number,// 变更距离   
  duration: number,// 动画持续时间   
) => {
  return tween(progressTime, startPos, changePos, duration, 'easeOutBounce');
};

// 5. easeInOut 先加速后减速
export const easeInOutQuad = (   
  progressTime: number,// 已运行时间   
  startPos: number,// 起始位置   
  changePos: number,// 变更距离   
  duration: number,// 动画持续时间   
) => {
  return tween(progressTime, startPos, changePos, duration, 'easeInOutQuad');
};

export const easeInOutCubic = (   
  progressTime: number,// 已运行时间   
  startPos: number,// 起始位置   
  changePos: number,// 变更距离   
  duration: number,// 动画持续时间   
) => {
  return tween(progressTime, startPos, changePos, duration, 'easeInOutCubic');
};

export const easeInOutQuart = (   
  progressTime: number,// 已运行时间   
  startPos: number,// 起始位置   
  changePos: number,// 变更距离   
  duration: number,// 动画持续时间   
) => {
  return tween(progressTime, startPos, changePos, duration, 'easeInOutQuart');
};

export const easeInOutQuint = (   
  progressTime: number,// 已运行时间   
  startPos: number,// 起始位置   
  changePos: number,// 变更距离   
  duration: number,// 动画持续时间   
) => {
  return tween(progressTime, startPos, changePos, duration, 'easeInOutQuint');
};

export const easeInOutSine = (   
  progressTime: number,// 已运行时间   
  startPos: number,// 起始位置   
  changePos: number,// 变更距离   
  duration: number,// 动画持续时间   
) => {
  return tween(progressTime, startPos, changePos, duration, 'easeInOutSine');
};

export const easeInOutEppo = (   
  progressTime: number,// 已运行时间   
  startPos: number,// 起始位置   
  changePos: number,// 变更距离   
  duration: number,// 动画持续时间   
) => {
  return tween(progressTime, startPos, changePos, duration, 'easeInOutEppo');
};

export const easeInOutCirc = (   
  progressTime: number,// 已运行时间   
  startPos: number,// 起始位置   
  changePos: number,// 变更距离   
  duration: number,// 动画持续时间   
) => {
  return tween(progressTime, startPos, changePos, duration, 'easeInOutCirc');
};

export const easeInOutElastic = (   
  progressTime: number,// 已运行时间   
  startPos: number,// 起始位置   
  changePos: number,// 变更距离   
  duration: number,// 动画持续时间   
) => {
  return tween(progressTime, startPos, changePos, duration, 'easeInOutElastic');
};

export const easeInOutBack = (   
  progressTime: number,// 已运行时间   
  startPos: number,// 起始位置   
  changePos: number,// 变更距离   
  duration: number,// 动画持续时间   
) => {
  return tween(progressTime, startPos, changePos, duration, 'easeInOutBack');
};

export const easeInOutBounce = (   
  progressTime: number,// 已运行时间   
  startPos: number,// 起始位置   
  changePos: number,// 变更距离   
  duration: number,// 动画持续时间   
) => {
  return tween(progressTime, startPos, changePos, duration, 'easeInOutBounce');
};