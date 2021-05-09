import React, { useState, useRef, useCallback, useMemo } from 'react';
import { Dropdown, Menu, Button } from 'antd';
import { animate } from "react-animation";
import styles from './index.less';

const easings = [
  'linear', 'swing', 
];

const easein = [
  'easeInSine', 'easeInQuad', 'easeInCubic', 'easeInQuart', 
  'easeInQuint', 'easeInCirc', 'easeInEppo', 'easeInElastic', 
  'easeInBack', 'easeInBounce'
];

const easeout = [
  'easeOutSine', 'easeOutQuad', 'easeOutCubic', 'easeOutQuart', 
  'easeOutQuint', 'easeOutCirc', 'easeOutEppo', 'easeOutElastic', 
  'easeOutBack', 'easeOutBounce', 
];

const easeinout = [
  'easeInOutSine', 'easeInOutQuad', 'easeInOutCubic', 'easeInOutQuart', 
  'easeInOutQuint', 'easeInOutCirc', 'easeInOutEppo', 'easeInOutElastic', 
  'easeInOutBack', 'easeInOutBounce'
];

export default () => {
  const [easing, setEasing] = useState('swing');
  const boxRef = useRef(null);

  const { start } = useMemo(() => {
    return animate({
      startPos: 0,
      endPos: 368,
      manual: true,
      easing,
      excute: (pos: number) => {
        if (!boxRef.current) return;

        boxRef.current.style.top = `${pos}px`;
      },
    });
  }, [boxRef, easing])

  const menu = (
    <Menu>
      {easings.map(it => {
        return (
          <Menu.Item key={it}>
            <span 
              onClick={() => {
                setEasing(it);
              }}
            >
              {it}
            </span>
          </Menu.Item>
        );
      })}
      <Menu.SubMenu title="easein">
        {easein.map(it => {
          return (
            <Menu.Item key={it}>
              <span 
                onClick={() => {
                  setEasing(it);
                }}
              >
                {it}
              </span>
            </Menu.Item>
          );
        })}
      </Menu.SubMenu>
      <Menu.SubMenu title="easeout">
        {easeout.map(it => {
          return (
            <Menu.Item key={it}>
              <span 
                onClick={() => {
                  setEasing(it);
                }}
              >
                {it}
              </span>
            </Menu.Item>
          );
        })}
      </Menu.SubMenu>
      <Menu.SubMenu title="easeinout">
        {easeinout.map(it => {
          return (
            <Menu.Item key={it}>
              <span 
                onClick={() => {
                  setEasing(it);
                }}
              >
                {it}
              </span>
            </Menu.Item>
          );
        })}
      </Menu.SubMenu>
    </Menu>
  );

  return (
    <div className={styles.wrapper}>
      <div>
        <Dropdown overlay={menu}>
          <Button>{easing}</Button>
        </Dropdown>

        <Button type="primary" onClick={start} style={{marginLeft: 10}}>play</Button>
      </div>
      <div className={styles.bg}>
        <div className={styles.box} ref={boxRef}></div>
      </div>
    </div>
  )
}