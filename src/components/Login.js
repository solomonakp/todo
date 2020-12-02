import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Formik, Form } from 'formik';
import { Button, Input } from './inputComponents';
import { Mail, Password, LogoLight } from './svgs';
import * as Yup from 'yup';
import { Redirect } from 'react-router-dom';
class Login extends Component {
  render() {
    const { toggleAuth, loginUser, isSubmitting, isAuthenticated } = this.props;
    console.log(this.props);
    return isAuthenticated ? (
      <Redirect to='./' />
    ) : (
      <div className='form-container login-container'>
        <Formik
          initialValues={{ email: '', password: '' }}
          onSubmit={(values) => {
            return new Promise((resolve) => {
              resolve(loginUser(values));
            });
          }}
          validationSchema={Yup.object({
            email: Yup.string().email().required(),
            password: Yup.string().required(),
          })}
        >
          {(props) => (
            <Form onSubmit={props.handleSubmit}>
              <div className='logo pb-5'>
                <Link to='/'>
                  <LogoLight />
                </Link>
              </div>
              <h3>Welcome back!</h3>
              <p>Login to your account with your username and password</p>
              <div className='row w-100'>
                <Input
                  placeholder='example@gmail.com'
                  label={'Email'}
                  name={'email'}
                  icon={<Mail width='16px' height='16px' />}
                  type='email'
                  className={'col-12'}
                  id='email'
                />
              </div>
              <div className='row w-100'>
                <Input
                  placeholder='&#9679; &#9679; &#9679; &#9679; &#9679; &#9679; &#9679; &#9679;'
                  label='Password'
                  name='password'
                  icon={<Password width='20px' height='20px' />}
                  type='password'
                  className={'col-12'}
                  id='password'
                />
              </div>

              <div className='row w-100 text-right justify-content-end'>
                <Link to='/' className='fgt text-right col-auto'>
                  Forgot Password?
                </Link>
              </div>
              <div className='row w-100 text-left my-3 mx-0'>
                <Button
                  className='standard'
                  type='submit'
                  disabled={isSubmitting || props.isValidating}
                >
                  LOGIN
                </Button>
              </div>
              <div>
                {/* button */}
                <span className='account'>
                  Don’t have an account?{' '}
                  <Button className='text-button' onClick={toggleAuth}>
                    Register
                  </Button>
                </span>
              </div>
            </Form>
          )}
        </Formik>

        <style jsx>{``}</style>
      </div>
    );
  }
}

export default Login;
