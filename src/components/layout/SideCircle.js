import React from 'react';
import { SideCircleSvg } from '../svgs';

export default function SideCircle(props) {
  return (
    <div className='side-circle'>
      <SideCircleSvg />
      {props.children}
      <style jsx>{`
        .side-circle {
          position: relative;
          width: 100%;
          min-height: 400px;
        }
      `}</style>
    </div>
  );
}
