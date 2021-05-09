---
title: easing 缓动函数
order: 1
---

以下图示基于 [function-plot](https://mauriciopoppe.github.io/function-plot) 制作。

## linear 线性效果

<code src="./linear/index.tsx" />

## swing 先加速后减速

<code src="./swing/index.tsx" />

## easeIn 加速效果

easeIn 从 0 开始加速效果。

* easeInSine: 使用正弦函数制作的加速缓动函数
* easeInQuad: 使用二次方函数制作的加速缓动函数
* easeInCubic: 使用三次方函数制作的加速缓动函数
* easeInQuart: 使用四次方函数制作的加速缓动函数
* easeInQuint: 使用五次方函数制作的加速缓动函数
* easeInCirc: 使用平方根函数（实际为圆形曲线）制作的加速缓动函数
* easeInEppo: 使用立方根函数制作的加速缓动函数
* easeInElastic: 使用三角函数和立方根函数制作的初级弹簧效果
* easeInBack: 使用常数 1.70158 计算的回退效果
* easeInBounce: 高级弹簧效果

<code src="./easein/index.tsx" />

## easeOut 减速效果

easeOut 减速到 0 效果。

* easeOutSine: 使用正弦函数制作的减速缓动函数
* easeOutQuad: 使用二次方函数制作的减速缓动函数
* easeOutCubic: 使用三次方函数制作的减速缓动函数
* easeOutQuart: 使用四次方函数制作的减速缓动函数
* easeOutQuint: 使用五次方函数制作的减速缓动函数
* easeOutCirc: 使用平方根函数（实际为圆形曲线）制作的减速缓动函数
* easeOutEppo: 使用立方根函数制作的减速缓动函数
* easeOutElastic: 使用三角函数和立方根函数制作的初级弹簧效果
* easeOutBack: 使用常数 1.70158 计算的回退效果
* easeOutBounce: 高级弹簧效果

<code src="./easeout/index.tsx" />

## easeInOut 先加速后减速

easeInOut 前半段从 0 开始加速，后半段减速到 0 效果。

* easeInOutSine: 使用正弦函数制作的先加速后减速缓动函数
* easeInOutQuad: 使用二次方函数制作的先加速后减速缓动函数
* easeInOutCubic: 使用三次方函数制作的先加速后减速缓动函数
* easeInOutQuart: 使用四次方函数制作的先加速后减速缓动函数
* easeInOutQuint: 使用五次方函数制作的先加速后减速缓动函数
* easeInOutCirc: 使用平方根函数（实际为圆形曲线）制作的先加速后减速缓动函数
* easeInOutEppo: 使用立方根函数制作的先加速后减速缓动函数
* easeInOutElastic: 使用三角函数和立方根函数制作的初级弹簧效果
* easeInOutBack: 使用常数 1.70158 计算的回退效果
* easeInOutBounce: 高级弹簧效果

<code src="./easeinout/index.tsx" />