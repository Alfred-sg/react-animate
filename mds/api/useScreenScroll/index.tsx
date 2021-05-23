import React, { useCallback } from 'react';
import { useScreenScroll } from "react-animate";
import styles from './index.less';

export default () => {
  const { currentScreen } = useScreenScroll({});
  const getClassName = useCallback((page) => {
    return currentScreen === page ? `${styles.page} ${styles.active}` : styles.page;
  }, [currentScreen])

  return (
    <div className={styles.wrapper}>
      <div className={getClassName(1)} style={{backgroundColor: '#4569d4'}} />
      <div className={getClassName(2)} style={{backgroundColor: '#d46d45'}} />
      <div className={getClassName(3)} style={{backgroundColor: '#4569d4'}} />
      <div className={getClassName(4)} style={{backgroundColor: '#d46d45'}} />
      <div className={getClassName(5)} style={{backgroundColor: '#4569d4'}} />
      <div className={getClassName(6)} style={{backgroundColor: '#d46d45'}} />
      <div className={getClassName(7)} style={{backgroundColor: '#4569d4'}} />
    </div>
  )
}