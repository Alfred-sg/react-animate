import React, { useRef } from 'react';
import { Button } from 'antd';
import { useAnimatePercent } from "react-animate";
import styles from './index.less';

export default () => {
  const boxRef = useRef(null);

  const { start } = useAnimatePercent({
    manual: true,
    excute: (percent: number) => {
      if (!boxRef.current) return;

      boxRef.current.style.top = `${368 * percent}px`;
      boxRef.current.style.left = `${368 * percent}px`;
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