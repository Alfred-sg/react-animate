import React, { useRef } from 'react';
import { Button } from 'antd';
import { useAnimate } from "react-animation";
import styles from './index.less';

export default () => {
  const boxRef = useRef(null);

  const { start } = useAnimate({
    startPos: 0,
    endPos: 368,
    manual: true,
    excute: (pos: number) => {
      if (!boxRef.current) return;

      boxRef.current.style.top = `${pos}px`;
    },
  });

  return (
    <div className={styles.wrapper}>
      <div>
        <Button type="primary" onClick={start} style={{marginLeft: 10}}>play</Button>
      </div>
      <div className={styles.bg}>
        <div className={styles.box} ref={boxRef}></div>
      </div>
    </div>
  )
}