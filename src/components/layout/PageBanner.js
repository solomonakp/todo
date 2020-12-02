import React from 'react';
import { PageArc } from '../svgs';
import theme from '../theme';
import PropTypes from 'prop-types';

export default function PageBanner({
  bannerText,
  bottomIcon,
  backgroundColor = theme.colors.primary,
  textColor = theme.colors.tertiary,
  bannerHeight = '400px',
}) {
  return (
    <section className='page-banner'>
      <PageArc fill={backgroundColor} />
      <div className='container-xl position-relative h-100'>
        <div className='text-box'>{bannerText}</div>
        {bottomIcon}
      </div>

      <style jsx>{`
        .page-banner {
          position: relative;
          height: ${bannerHeight};
          padding-top: 105px;
        }
        :global(.heading) {
          padding-top: 50px;
          margin-left: 17%;
          @media (max-width: 575.98px) {
            margin-left: 7%;
          }
        }
        :global(.page-banner h1, .page-banner p) {
          color: ${textColor};
        }
        :global(.page-banner h1) {
          line-height: 50px;
          font-weight: 500;
          margin-bottom: 20px;
          @media (max-width: 575.98px) {
            font-size: 36px;
          }
        }
        :global(.yellow-heading) {
          color: ${theme.colors.secondary};
          line-height: 30px;
          margin-bottom: 10px;
        }
        :global(.page-banner p) {
          line-height: 32px;
          font-size: 16px;
        }
      `}</style>
    </section>
  );
}
PageBanner.propTypes = {
  bannerText: PropTypes.element.isRequired,
  bottomIcon: PropTypes.element,
  backgroundColor: PropTypes.string.isRequired,
  textColor: PropTypes.string,
};
