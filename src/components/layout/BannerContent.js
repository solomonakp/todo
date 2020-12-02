import React from 'react';
import theme from '../theme';

export default function BannerContent({ heading, paragraph, cta }) {
  return (
    <div className='container-xl banner-content'>
      {heading}
      {paragraph}
      {cta}
      <style jsx>
        {`
          .banner-content {
            padding-top: 150px;
            padding-left: 3%;
          }
          :global(.banner-content h1) {
            font-size: 48px;
            font-weight: bold;
            margin-bottom: 15px;
            max-width: 345px;
            color: ${theme.colors.tertiary};
          }
          :global(.banner-content yellow) {
            color: ${theme.colors.secondary};
          }

          :global(.banner-content p) {
            line-height: 163.4%;
            font-family: Nunito;
            font-weight: 600;
            max-width: 390px;
            color: ${theme.colors.tertiary};
          }
        `}
      </style>
    </div>
  );
}
