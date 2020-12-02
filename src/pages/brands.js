import React from 'react';
import { Helmet } from 'react-helmet';
import withLayout from '../components/layout/MainLayout';
import { withLoader } from '../components/layout/Loader';
import Subscribe from '../components/layout/Subscribe';
import theme from '../components/theme';

const Brands = (props) => {
  return (
    <div className='page'>
      {/* seo goes here */}
      <Helmet>
        <title>Brands</title>
      </Helmet>

      {/*subscribe section  */}
      <Subscribe />

      {/* about page end */}
      <style jsx>{``}</style>
    </div>
  );
};

const withLoaderBrands = withLoader(Brands);

export default withLayout(withLoaderBrands, theme.colors.primary);
