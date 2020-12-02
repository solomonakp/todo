import React from 'react';
import { Helmet } from 'react-helmet';
import withLayout from '../components/layout/MainLayout';
import { withLoader } from '../components/layout/Loader';
// components
import Subscribe from '../components/layout/Subscribe';
import ImageBanner from '../components/layout/ImageBanner';
import BannerContent from '../components/layout/BannerContent';
import SearchForm from '../components/layout/SearchForm';
import Paragraph from '../components/category/Paragraph';
import CategoryBrands from '../components/layout/CategoryBrands';
import withPaginate from '../components/paginate';

// helperLogic
import brandLogic from '../utils/brandLogic';
// assets
import CarImage from '../assets/img/carbanner.jpg';
import brands from '../components/category/brands';
import theme from '../components/theme';

const Brands = withPaginate(CategoryBrands, 36, brandLogic);

const Category = (props) => {
  return (
    <div className='page'>
      {/* seo goes here */}
      <Helmet>
        <title>Category</title>
      </Helmet>
      {/* image banner */}
      <ImageBanner
        image={CarImage}
        content={
          <BannerContent
            heading={<h1>Budget Tyres</h1>}
            paragraph={
              <p>
                Tyreman.ng carries all your favourite brands just for your
                convienience.
              </p>
            }
            cta={<SearchForm />}
          />
        }
      />
      {/* Paragraph section */}
      <Paragraph />
      {/* category section */}
      <Brands items={brands} pageNeighbours={2} />
      <Subscribe />

      {/* about page end */}
      <style jsx>{``}</style>
    </div>
  );
};

const withLoaderCategory = withLoader(Category);
console.log(theme.colors.primary);

export default withLayout(withLoaderCategory, theme.colors.primary);
