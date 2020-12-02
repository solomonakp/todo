import React from 'react';
import { Helmet } from 'react-helmet';
import withLayout from '../components/layout/MainLayout';
import { withLoader } from '../components/layout/Loader';
import theme from '../components/theme';
import PageBanner from '../components/layout/PageBanner';
import TyreDelivery from '../components/deliveryInformation/TyreDelivery';
import Perks from '../components/deliveryInformation/Perks';
import Subscribe from '../components/layout/Subscribe';
import { BannerRacing } from '../components/svgs';
const DeliveryInformation = (props) => {
  return (
    <div className='page'>
      {/* seo goes here */}
      <Helmet>
        <title>Delivery Information</title>
      </Helmet>
      {/* Page banner Section */}
      <PageBanner
        bannerText={
          <div className='heading'>
            <h1 className='di-h1'>Delivery Information</h1>
            <p>We’re there as fast as possible</p>
          </div>
        }
        bottomIcon={<BannerRacing />}
        backgroundColor={theme.colors.primary}
      />
      {/* tyre delivery section */}
      <TyreDelivery />
      {/* Perks section */}
      <Perks />
      {/* subscribe section */}
      <Subscribe />

      {/* about page end */}
      <style jsx>{`
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

const withLoaderDelivery = withLoader(DeliveryInformation);

export default withLayout(withLoaderDelivery);
