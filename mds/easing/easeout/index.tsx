import React, { useRef, useEffect, useCallback } from 'react';
import functionPlot from "function-plot";
import { easing } from "react-animate";

export default function Easin(){
  const targetRef = useRef(null);

  const getRect = useCallback((node: Element) => {
    const contentsBounds = node.getBoundingClientRect();
    let width = 800;
    let height = 500;
    const ratio = contentsBounds.width / width;
    width *= ratio;
    height *= ratio;

    return {
      width,
      height,
    };
  }, []);

  const renderFn = useCallback((node: any) => {
    functionPlot({
      target: node,
      ...getRect(node),
      xAxis: { 
        label: '过渡时间百分比',
        domain: [0, 1] 
      },
      yAxis: { 
        label: '位移百分比',
        domain: [0, 1.4] 
      },
      grid: true,
      disableZoom: true,
      data: [
        {
          graphType: 'polyline', 
          color: '#9e45d4',
          fn: function (scope) {
            return easing.easeOutSine(scope.x);
          }
        },
        {
          graphType: 'polyline',
          color: '#4569d4',
          fn: function (scope) {
            return easing.easeOutQuad(scope.x);
          }
        },
        {
          graphType: 'polyline',
          color: '#4569d4',
          fn: function (scope) {
            return easing.easeOutCubic(scope.x);
          }
        },
        {
          graphType: 'polyline',
          color: '#4569d4',
          fn: function (scope) {
            return easing.easeOutQuart(scope.x);
          }
        },
        {
          graphType: 'polyline',
          color: '#4569d4',
          fn: function (scope) {
            return easing.easeOutQuint(scope.x);
          }
        },
        {
          graphType: 'polyline',
          color: '#45d457',
          fn: function (scope) {
            return easing.easeOutCirc(scope.x);
          }
        },
        {
          graphType: 'polyline',
          color: '#45d457',
          fn: function (scope) {
            return easing.easeOutEppo(scope.x);
          }
        },
        {
          graphType: 'polyline',
          color: '#d46d45',
          fn: function (scope) {
            return easing.easeOutElastic(scope.x);
          }
        },
        {
          graphType: 'polyline',
          color: '#45d3d4',
          fn: function (scope) {
            return easing.easeOutBack(scope.x);
          }
        },
        {
          graphType: 'polyline',
          color: '#d46d45',
          fn: function (scope) {
            return easing.easeOutBounce(scope.x);
          }
        },
      ]
    });
  }, [getRect]);

  useEffect(() => {
    setTimeout(() => {
      renderFn(targetRef.current!);
    }, 0);
  }, [renderFn, targetRef]);

  return (
    <div ref={targetRef} />
  );
};