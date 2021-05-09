/**
 * 关于缓动函数名
 * 
 * 1. linear 为线性函数
 * 2. 
 * 3. ease 类，各后缀的意义如下 
 *    In 加速
 *    Out 减速
 *    InOut 先加速、后减速
 * 
 *    Sine 为三角函数实现
 *    Quad 为二次方
 *    Cubic 为三次方
 *    Quart 为四次方
 *    Quint 为五次方
 *    Circ 为开平方根
 *    Expo 为开立方根
 *    Elastic 为结合三角函数和开立方根的初级弹簧效果
 *    Back 为使用常数 1.70158 计算的回退效果
 *    Bounce 为高级弹簧效果
 */

const c1 = 1.70158;
const c2 = c1 * 1.525;
const c3 = c1 + 1;
const c4 = (2 * Math.PI) / 3;
const c5 = (2 * Math.PI) / 4.5;

function bounceOut(x: number) {
  var n1 = 7.5625,
    d1 = 2.75;
  if (x < 1 / d1) {
    return n1 * x * x;
  } else if (x < 2 / d1) {
    return n1 * (x -= 1.5 / d1) * x + 0.75;
  } else if (x < 2.5 / d1) {
    return n1 * (x -= 2.25 / d1) * x + 0.9375;
  } else {
    return n1 * (x -= 2.625 / d1) * x + 0.984375;
  }
};

// 1. 线性函数
export const linear = (p: number) => {
  return p;
};

// 2. 线性函数
export const swing = (p: number) => {
  return 0.5 - Math.cos(p * Math.PI) / 2;
};

// 3. easeIn 加速类
export const easeInSine = (p: number) => {
  return 1 - Math.cos((p * Math.PI) / 2);
};

export const easeInQuad = (p: number) => {
  return p * p;
};

export const easeInCubic = (p: number) => {
  return p * p * p;
};

export const easeInQuart = (p: number) => {
  return p * p * p * p;
};

export const easeInQuint = (p: number) => {
  return p * p * p * p * p;
};

export const easeInCirc = (p: number) => {
  return 1 - Math.sqrt(1 - Math.pow(p, 2));
};

export const easeInEppo = (p: number) => {
  return p === 0 ? 0 : Math.pow(2, 10 * p - 10);
};

export const easeInElastic = (p: number) => {
  return p === 0 ? 0 : p === 1 ? 1 : -Math.pow(2, 10 * p - 10) * Math.sin((p * 10 - 10.75) * c4);
};

export const easeInBack = (p: number) => {
  return c3 * p * p * p - c1 * p * p;
};

export const easeInBounce = (p: number) => {
  return 1 - bounceOut(1 - p);
};

// 4. easeOut 减速类
export const easeOutQuad = (p: number) => {
  return 1 - (1 - p) * (1 - p);
};

export const easeOutCubic = (p: number) => {
  return 1 - Math.pow(1 - p, 3);
};

export const easeOutQuart = (p: number) => {
  return 1 - Math.pow(1 - p, 4);
};

export const easeOutQuint = (p: number) => {
  return 1 - Math.pow(1 - p, 5);
};

export const easeOutSine = (p: number) => {
  return Math.sin((p * Math.PI) / 2);
};

export const easeOutEppo = (p: number) => {
  return p === 1 ? 1 : 1 - Math.pow(2, -10 * p);
};

export const easeOutCirc = (p: number) => {
  return Math.sqrt(1 - Math.pow(p - 1, 2));
};

export const easeOutElastic = (p: number) => {
  return p === 0 ? 0 : p === 1 ? 1 : Math.pow(2, -10 * p) * Math.sin((p * 10 - 0.75) * c4) + 1;
};

export const easeOutBack = (p: number) => {
  return 1 + c3 * Math.pow(p - 1, 3) + c1 * Math.pow(p - 1, 2);
};

export const easeOutBounce = (p: number) => {
  var n1 = 7.5625,
    d1 = 2.75;
  if (p < 1 / d1) {
    return n1 * p * p;
  } else if (p < 2 / d1) {
    return n1 * (p -= 1.5 / d1) * p + 0.75;
  } else if (p < 2.5 / d1) {
    return n1 * (p -= 2.25 / d1) * p + 0.9375;
  } else {
    return n1 * (p -= 2.625 / d1) * p + 0.984375;
  }
};

// 5. easeInOut 先加速后减速
export const easeInOutQuad = (p: number) => {
  return p < 0.5 ? 2 * p * p : 1 - Math.pow(-2 * p + 2, 2) / 2;
};

export const easeInOutCubic = (p: number) => {
  return p < 0.5 ? 4 * p * p * p : 1 - Math.pow(-2 * p + 2, 3) / 2;
};

export const easeInOutQuart = (p: number) => {
  return p < 0.5 ? 8 * p * p * p * p : 1 - Math.pow(-2 * p + 2, 4) / 2;
};

export const easeInOutQuint = (p: number) => {
  return p < 0.5 ? 16 * p * p * p * p * p : 1 - Math.pow(-2 * p + 2, 5) / 2;
};

export const easeInOutSine = (p: number) => {
  return -(Math.cos(Math.PI * p) - 1) / 2;
};

export const easeInOutEppo = (p: number) => {
  return p === 0
    ? 0
    : p === 1
    ? 1
    : p < 0.5
    ? Math.pow(2, 20 * p - 10) / 2
    : (2 - Math.pow(2, -20 * p + 10)) / 2;
};

export const easeInOutCirc = (p: number) => {
  return p < 0.5
    ? (1 - Math.sqrt(1 - Math.pow(2 * p, 2))) / 2
    : (Math.sqrt(1 - Math.pow(-2 * p + 2, 2)) + 1) / 2;
};

export const easeInOutElastic = (p: number) => {
  return p === 0
    ? 0
    : p === 1
    ? 1
    : p < 0.5
    ? -(Math.pow(2, 20 * p - 10) * Math.sin((20 * p - 11.125) * c5)) / 2
    : (Math.pow(2, -20 * p + 10) * Math.sin((20 * p - 11.125) * c5)) / 2 + 1;
};

export const easeInOutBack = (p: number) => {
  return p < 0.5
    ? (Math.pow(2 * p, 2) * ((c2 + 1) * 2 * p - c2)) / 2
    : (Math.pow(2 * p - 2, 2) * ((c2 + 1) * (p * 2 - 2) + c2) + 2) / 2;
};

export const easeInOutBounce = (p: number) => {
  return p < 0.5 ? (1 - bounceOut(1 - 2 * p)) / 2 : (1 + bounceOut(2 * p - 1)) / 2;
};
