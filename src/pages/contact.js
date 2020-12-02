import React from 'react';
import { Helmet } from 'react-helmet';
import withLayout from '../components/layout/MainLayout';
import { withLoader } from '../components/layout/Loader';
import theme from '../components/theme';
import ContactBanner from '../components/contact/ContactBanner';
import ContactMap from '../components/contact/ContactMap';
import Subscribe from '../components/layout/Subscribe';
import ContactArea from '../components/contact/ContactArea';
import ContactForm from '../components/contact/ContactForm';
import ContactAddress from '../components/contact/ContactAddress';

const Contact = (props) => {
  return (
    <div className='page'>
      {/* seo goes here */}
      <Helmet>
        <title>Contact</title>
      </Helmet>
      {/* Page banner Section */}
      <ContactBanner />
      {/* contact map section */}
      <ContactMap />
      {/* contact form section */}
      <ContactArea form={<ContactForm />} address={<ContactAddress />} />

      {/*subscribe section  */}
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
      `}</style>
    </div>
  );
};

const withLoaderContact = withLoader(Contact);

export default withLayout(withLoaderContact);
