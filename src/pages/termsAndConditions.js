import React, { Component } from 'react';
import { Helmet } from 'react-helmet';
import withLayout from '../components/layout/MainLayout';
import { withLoader } from '../components/layout/Loader';
import theme from '../components/theme';
import PageBanner from '../components/layout/PageBanner';
import Terms from '../components/termsAndConditions/Terms';
import Subscribe from '../components/layout/Subscribe';

class TermsAndConditions extends Component {
  componentDidMount() {
    this.props.lightNav();
  }

  componentWillUnmount() {
    this.props.darkNav();
  }
  render() {
    return (
      <div className='page'>
        {/* seo goes here */}
        <Helmet>
          <title>Terms and Conditions</title>
        </Helmet>
        {/* Page banner Section */}
        <PageBanner
          bannerText={
            <div className='heading'>
              <h1 className='terms-h1'>Terms and Conditions</h1>
              <p>Updated August 2014</p>
            </div>
          }
          backgroundColor={theme.colors.bannerBg}
          textColor={theme.colors.primary}
        />
        {/* Terms section */}
        <Terms />
        {/* subscribe section */}
        <Subscribe />

        {/* about page end */}
        <style jsx>{`
          .terms-h1 {
            margin-bottom: 0;
          }
        `}</style>
      </div>
    );
  }
}

const withLoaderTerms = withLoader(TermsAndConditions);

export default withLayout(withLoaderTerms);
