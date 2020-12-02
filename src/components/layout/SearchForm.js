import React from 'react';
import { Formik, Form, Field } from 'formik';
import { Button } from '../inputComponents';
import theme from '../theme';
import * as Yup from 'yup';

//

export default function SearchForm() {
  return (
    <Formik
      initialValues={{ email: '' }}
      onSubmit={(values) => {}}
      validationSchema={Yup.object({
        search: Yup.string().required(),
      })}
    >
      {({ errors, touched, handleSubmit }) => {
        return (
          <Form className='text-right search-form' onSubmit={handleSubmit}>
            <div className='search-group d-flex'>
              <Field
                as='input'
                name='searchBrands'
                className='subscribe'
                type='email'
                placeholder='Search brands'
              />
              <Button className='subscribe search' rippleClass={'height'}>
                Search
              </Button>
              <style jsx>
                {`
                  .search-group {
                    height: 45px;
                    margin-top: 25px;
                  }
                  :global(.search-group input) {
                    background: ${theme.colors.subscribeInput};
                    font-size: 16px;
                    line-height: 36px;
                    font-family: Nunito;
                    font-weight: 600;
                    padding: 2px 0 2px 15px;
                    border-radius: ${theme.radius.button};
                    width: 100%;
                    max-width: 260px;
                    height: 100%;
                    border: 0;
                    margin-right: 10px;
                  }
                  :global(.search-group input::placeholder) {
                    color: ${theme.colors.searchPlaceHolder};
                    font-family: Nunito;
                    font-size: 14px;
                    opacity: 1;
                    transition: ${theme.effects.allIn(300)};
                  }
                  :global(.search-group input:focus::placeholder) {
                    transition: ${theme.effects.allOut(300)};
                    opacity: 0;
                  }
                  :global(.search-group .height) {
                    height: 100%;
                  }
                  .search-group .errors {
                    color: #ff5252;
                    height: 24px;
                    text-align: left;
                  }
                `}
              </style>
            </div>
          </Form>
        );
      }}
    </Formik>
  );
}
