import React from 'react';
import { Helmet } from 'react-helmet';
import withLayout from '../components/layout/MainLayout';
import { withLoader } from '../components/layout/Loader';
import theme from '../components/theme';
import PageBanner from '../components/layout/PageBanner';
import Welcome from '../components/about/Welcome';
import Perks from '../components/about/Perks';
import Subscribe from '../components/layout/Subscribe';
import { BannerRacing } from '../components/svgs';

const About = (props) => {
  return (
    <div className='page'>
      {/* seo goes here */}
      <Helmet>
        <title>About</title>
      </Helmet>
      {/* Page banner Section */}
      <PageBanner
        bannerText={
          <div className='heading'>
            <h3 className='yellow-heading'>About Us</h3>
            <h1>Why Tyreman?</h1>
            <p>
              Wanna know more about tyreman ? <br /> You’ve come to the right
              place.
            </p>
          </div>
        }
        bottomIcon={<BannerRacing />}
        backgroundColor={theme.colors.primary}
        bannerHeight={'450px'}
      />
      {/* welcome section */}
      <Welcome />
      {/* Perks section */}
      <Perks />
      {/* subscribe section */}
      <Subscribe />

      {/* about page end */}
      <style jsx>{``}</style>
    </div>
  );
};

const withLoaderAbout = withLoader(About);

export default withLayout(withLoaderAbout);
