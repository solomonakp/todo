import React from 'react';

export default function BrandImage({ image, brandName }) {
  return (
    <div className='brand-image'>
      <img src={image} alt={brandName} />
      <style jsx>{`
        .brand-image {
          white-space: nowrap;
          height: 150px;
          flex-basis: 160px;
          width: 160px;
          display: flex;
          align-items: center;
          justify-content: center;
          margin: 0 auto;
        }
        .brand-image img {
          width: 100%;
          height: auto;
        }
      `}</style>
    </div>
  );
}
