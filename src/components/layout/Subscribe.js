import React from 'react';
import { Button } from '../inputComponents';
import theme from '../theme';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import logoDark from '../../assets/img/logo-light.png';

export default function Subscribe(props) {
  return (
    <section className='subscribe-section'>
      <div className='container-xl'>
        <div className='row'>
          <div className='d-none d-lg-block col-lg-1'></div>
          <div className='col-12 col-md-4 col-lg-2 order-3 order-md-0 mt-5 mt-md-0 justify-content-center justify-content-md-start  d-flex align-items-center logo-holder'>
            <img src={logoDark} alt='tyreman logo' />
          </div>
          <div className='col-12 col-lg-4 order-4 order-lg-0   mt-5 mt-lg-0  d-flex justify-content-center justify-content-lg-start align-items-center'>
            <p className='mb-0'>Copyright 2019. Tyreman. All Rights Reserved</p>
          </div>
          <div className='col-12 col-md-8 col-lg-5 d-flex align-items-center justify-content-center justify-content-md-end justify-content-lg-start'>
            <Formik
              initialValues={{ email: '' }}
              onSubmit={(values) => {}}
              validationSchema={Yup.object({
                email: Yup.string().email().required('Invalid Email'),
              })}
            >
              {({ errors, touched, handleSubmit }) => {
                return (
                  <Form className='text-right' onSubmit={handleSubmit}>
                    <div className='subscribe-group d-flex'>
                      <Field
                        as='input'
                        name='email'
                        className='subscribe'
                        type='email'
                        placeholder='Your Email'
                      />
                      <Button className='subscribe' rippleClass={'height'}>
                        Subscribe
                      </Button>
                      {/* <div className='errors w-100'>
                          {errors?.email && errors.email}
                        </div> */}
                    </div>
                  </Form>
                );
              }}
            </Formik>
          </div>
        </div>
      </div>
      <style jsx>
        {`
          .subscribe-section {
            padding: 60px 0;
            margin-bottom: 40px;
          }
          p {
            line-height: 36px;
            color: ${theme.colors.paragraphColor};
            text-align: left;
            white-space: nowrap;
            font-size: 14px;
          }
          .subscribe-group {
            height: 45px;
          }
          :global(.subscribe-group input) {
            background: ${theme.colors.subscribeInput};
            font-size: 16px;
            line-height: 36px;
            font-family: ${theme.fontFamily.circularBook};
            padding: 2px 0 2px 15px;
            border-radius: ${theme.radius.button};
            width: 100%;
            max-width: 180px;
            height: 100%;
            border: 0;
          }
          :global(.subscribe-group .height) {
            height: 100%;
          }
          .subscribe-group .errors {
            color: #ff5252;
            height: 24px;
            text-align: left;
          }

          img {
            width: 161px;
            height: 61px;
            display: inline-block;
          }
        `}
      </style>
    </section>
  );
}
