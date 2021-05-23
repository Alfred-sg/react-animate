---
title: requestAnimationFrame 
order: 3
---

[requestAnimationFrame](https://developer.mozilla.org/zh-CN/docs/Web/API/Window/requestAnimationFrame) 可以设置回调函数。这个回调函数会在下次重绘前执行。

requestAnimationFrame 通常用来制作动画，这样就需要递归调用 requestAnimationFrame 以执行同一个回调函数。回调函数的执行周期通常是每秒 60 次（帧率，实际与浏览器的屏幕刷新次数相匹配），且可以通过参数访问动画执行期的时间戳。

```js
let start;
let rafId;

function step(timestamp) {
  if (start === undefined)
    start = timestamp;
  const elapsed = timestamp - start;

  //Math.min 确保元素刚好停在200px的位置，js 计算有精度问题
  document.querySelector('box').style.transform = 
    'translateX(' + Math.min(0.1 * elapsed, 200) + 'px)';

  if (elapsed < 2000) { // 在两秒后停止动画
    rafId = requestAnimationFrame(step);
  } else {
    // 取消
    cancelAnimationFrame(rafId);
  };
};

rafId = requestAnimationFrame(step);
```

## 兼容性问题

从 [caniuse](https://www.caniuse.com/?search=requestAnimationFrame) 中可以看到，部分机型并不支持 requestAnimationFrame，或者带有特殊的平台前缀。通过 [raf](https://github.com/chrisdickinson/raf) 垫片可以抹平兼容性问题。

```bash
cnpm install raf --save
```

```js
import raf from 'raf';

const rafId = raf(function tick() {
  // Animation logic
  raf(tick);
});

// raf.cancel(rafId)
```

raf 模块会检测平台对 requestAnimationFrame 的支持程度，如不支持，就使用 setTimeout 模拟（按每秒 60 次的规则）或使用带特定前缀的平台接口。

## 与 setTimeout 等

requestAnimationFrame 的帧率由平台决定，不能修改，因此不适用于帧率要求较高的游戏动画。这时候，就不如 setTimeout、setInterval 等可以制作可控的帧率。
