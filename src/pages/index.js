import React, { Component } from 'react';
import { Helmet } from 'react-helmet';
import withLayout from '../components/layout/MainLayout';
import { withLoader } from '../components/layout/Loader';
import Banner from '../components/landing/Banner';
import TyreCategory from '../components/landing/TyreCategory';
import How from '../components/landing/How';
import Why from '../components/landing/Why';
import Testimonial from '../components/landing/Testimonial';
import Range from '../components/landing/Range';
import Brands from '../components/landing/Brands';
import Subscribe from '../components/layout/Subscribe';

class Home extends Component {
  componentDidMount() {
    // spinner code
    // const { init, hideSpinner, initialLoad } = this.props;
    // console.log(this.props);
    // setTimeout(() => {
    //   hideSpinner();
    //   if (init) {
    //     initialLoad();
    //   } else {
    //     return;
    //   }
    // }, 5000);
  }

  componentWillUnmount() {
    // this.props.showSpinner();
  }

  render() {
    return (
      <div className='page'>
        {/* seo goes here */}
        <Helmet>
          <title>Home</title>
        </Helmet>
        {/*Top banner  */}
        <Banner />
        {/* tyre categories */}
        <TyreCategory />
        {/* how to buy online section */}
        <How />
        {/* why buy from us section */}
        <Why />
        {/* Testimonial section */}
        <Testimonial />
        {/* tyre range section */}
        <Range />
        {/* brands section */}
        <Brands />
        {/* Subscribe Section */}
        <Subscribe />
      </div>
    );
  }
}

const withLoaderHome = withLoader(Home);

export default withLayout(withLoaderHome);
