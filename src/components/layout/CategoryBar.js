import React from 'react';
import theme from '../theme';

export default function CategoryBar({ categoryName }) {
  return (
    <div className='category-bar'>
      {categoryName}
      <style jsx>{`
        .category-bar {
          color: ${theme.colors.searchPlaceHolder};
          font-weight: bold;
          font-size: 20px;
          line-height: 25px;
          background-color: ${theme.colors.pageColor};
          padding: 15px 0 15px 35px;
          margin-bottom: 50px;
          @media (max-width: 349px) {
            text-align: center;
          }
        }
      `}</style>
    </div>
  );
}
