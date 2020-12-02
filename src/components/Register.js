import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Button, Input } from './inputComponents';
import { Formik, Form } from 'formik';
import { Mail, Password, LogoLight } from './svgs';
import * as Yup from 'yup';
import capitalize from 'lodash/capitalize';

import { Redirect } from 'react-router-dom';
class Register extends Component {
  constructor(props) {
    super(props);
    this.state = { message: null };
  }

  render() {
    const {
      toggleAuth,
      registerUser,
      isSubmitting,
      isAuthenticated,
    } = this.props;
    return isAuthenticated ? (
      <Redirect to='./' />
    ) : (
      <div className='form-container register-container'>
        <Formik
          initialValues={{
            fname: '',
            lname: '',
            email: '',
            phone: '',
            password: '',
            confirmPassword: '',
          }}
          validationSchema={Yup.object({
            fname: Yup.string()
              .min(2, 'First name is too short')
              .required('First name is required'),
            lname: Yup.string()
              .min(2, 'Last name is too short')
              .required('Last name is required'),
            email: Yup.string()
              .email('email is invalid')
              .required('Email is required'),
            phone: Yup.string()
              .min(10, 'Phone number is invalid')
              .required('Phone number is required'),
            password: Yup.string().min(8).required('password is required'),
            confirmPassword: Yup.string()
              .required('Password confirmation is required')
              .when('password', {
                is: (password) =>
                  password && password.length > 0 ? true : false,
                then: Yup.string().oneOf(
                  [Yup.ref('password')],
                  "Password doesn't match"
                ),
              }),
          })}
          onSubmit={(values) => {
            return new Promise((resolve) => {
              const details = {
                ...values,
                fname: capitalize(values.fname),
                lname: capitalize(values.lname),
              };
              resolve(registerUser(details));
            });
          }}
        >
          {(props) => (
            <Form onSubmit={props.handleSubmit}>
              <div className='logo pb-4'>
                <Link to='/'>
                  <LogoLight />
                </Link>
              </div>
              <h3>Welcome !</h3>
              <p>Complete the fields below to create an account.</p>
              {/* inputs  */}
              <div className='row w-100'>
                <Input
                  placeholder='sarah'
                  label={'First Name'}
                  name='fname'
                  className='col-12 col-lg-6'
                  id='firstName'
                />
                <Input
                  placeholder='sarah'
                  label={'Last Name'}
                  name='lname'
                  className='col-12 col-lg-6'
                  id='lastName'
                />
              </div>
              <div className='row w-100'>
                <Input
                  placeholder='example@gmail.com'
                  label={'Email'}
                  name='email'
                  icon={<Mail width='20px' height='20px' />}
                  type='email'
                  className='col-12 col-lg-6'
                  id='regEmail'
                />

                <Input
                  className='col-12 col-lg-6'
                  name='phone'
                  label={'Phone Number'}
                  placeholder='080XXXXXXX'
                  type={'number'}
                  id='phoneNumber'
                  onchange={(e) => {
                    const string = e.target.value.toString();
                    props.setValues(string, 'phone');
                  }}
                />
              </div>

              <div className='row w-100'>
                <Input
                  placeholder='&#9679; &#9679; &#9679; &#9679; &#9679; &#9679; &#9679; &#9679;'
                  label='Password'
                  name='password'
                  icon={<Password width='20px' height='20px' />}
                  type='password'
                  className='col-12 col-lg-6'
                  id='regPassword'
                />
                <Input
                  placeholder='&#9679; &#9679; &#9679; &#9679; &#9679; &#9679; &#9679; &#9679;'
                  label='Confirm Password'
                  name='confirmPassword'
                  icon={<Password width='20px' height='20px' />}
                  type='password'
                  className='col-12 col-lg-6'
                  id='confirmPassword'
                />
              </div>
              {/* button */}
              <div className='row w-100 text-left my-3 mx-0'>
                <Button
                  className='standard'
                  type='submit'
                  disabled={isSubmitting || props.isValidating}
                >
                  REGISTER
                </Button>
              </div>
              <span className='account'>
                Already have an account?{' '}
                <Button
                  className='text-button'
                  ref={this.loginBtn}
                  onClick={() => {
                    toggleAuth();
                  }}
                >
                  Sign in
                </Button>
              </span>
            </Form>
          )}
        </Formik>
        <style jsx>{``}</style>
      </div>
    );
  }
}

export default Register;
