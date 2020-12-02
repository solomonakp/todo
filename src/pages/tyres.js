import React from 'react';
import { Helmet } from 'react-helmet';
import withLayout from '../components/layout/MainLayout';
import { withLoader } from '../components/layout/Loader';
import theme from '../components/theme';
import PageBanner from '../components/layout/PageBanner';
import DunlopTyres from '../components/tyres/DunlopTyres';
import Perks from '../components/tyres/Perks';
import Subscribe from '../components/layout/Subscribe';
import { BuyDunlop } from '../components/svgs';
const Tyres = (props) => {
  return (
    <div className='page'>
      {/* seo goes here */}
      <Helmet>
        <title>Tyres</title>
      </Helmet>
      {/* Page banner Section */}
      <PageBanner
        bannerText={<div className='heading'></div>}
        bottomIcon={<BuyDunlop />}
        backgroundColor={theme.colors.primary}
      />
      {/* Dunlop tyres section */}
      <DunlopTyres />
      {/* Perks section */}
      <Perks />
      {/* subscribe section */}
      <Subscribe />

      {/* about page end */}
      <style jsx>{`
        .di-heading {
          padding-top: 50px;
          margin-left: 17%;
          @media (max-width: 575.98px) {
            margin-left: 7%;
          }
          h1,
          p {
            color: ${theme.colors.tertiary};
          }
          h1 {
            line-height: 61px;
            font-weight: 500;

            @media (max-width: 575.98px) {
              font-size: 36px;
            }
          }
          h3 {
            color: ${theme.colors.secondary};
            line-height: 30px;
            margin-bottom: 10px;
          }
          p {
            line-height: 32px;
            font-size: 16px;
          }
        }
        .di-h1 {
          margin-bottom: 0;
        }
        :global(p.blue-paragraph) {
          color: ${theme.colors.primary};
          margin-bottom: 30px;
        }
        :global(p.bold-paragraph) {
          font-weight: 500;
          font-family: ${theme.fontFamily.circular};
        }
      `}</style>
    </div>
  );
};

const withLoaderTyres = withLoader(Tyres);

export default withLayout(withLoaderTyres);
