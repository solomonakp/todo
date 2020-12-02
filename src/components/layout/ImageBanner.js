import React from 'react';

export default function ImageBanner({ image, content }) {
  return (
    <div className='container-fluid'>
      {content}
      <style jsx>{`
        div {
          background-image: url(${image});
          height: 550px;
          background-position: center;
          background-repeat: no-repeat;
          background-size: cover;
          margin-bottom: 80px;
        }
      `}</style>
    </div>
  );
}
