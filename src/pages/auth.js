import Login from '../components/Login';
import Register from '../components/Register';
import { Helmet } from 'react-helmet';
import React, { Component } from 'react';
import theme from '../components/theme';
import auth from '../assets/img/auth.png';
import authAlt from '../assets/img/auth-alt.png';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { registerUser } from '../redux/actions/authActions';
import { clearErrors } from '../redux/actions/errorActions';
import { toggleAuth } from '../redux/actions/uiActions';
import { loginUser } from '../redux/actions/authActions';
import { notificationSettings } from '../utils/helpers';
import { store } from 'react-notifications-component';

class Auth extends Component {
  componentDidUpdate(prevProps) {
    const { error, isAuthenticated, isRegister, name, history } = this.props;
    // check if error props is !=== to PrevProps
    if (error !== prevProps.error) {
      // call notification component
      // register error
      if (error.id === 'REGISTER_FAIL') {
        store.addNotification(
          notificationSettings({
            title: 'Sorry',
            message: error.msg.message,
            type: 'danger',
          })
        );
      }
      // login error
      if (error.id === 'LOGIN_FAIL') {
        const settings = notificationSettings({
          title: 'Sorry',
          message: error.msg.message,
          type: 'danger',
        });
        // console.log(settings);
        store.addNotification({ ...settings });
      }
    }
    // success errors
    if (
      isAuthenticated !== prevProps.isAuthenticated &&
      prevProps.isAuthenticated !== null
    ) {
      // register component
      if (isRegister && isAuthenticated) {
        store.addNotification(
          notificationSettings({
            title: `Welcome ${name} `,
            message: 'Registration Successful',
            type: 'success',
            duration: 3000,
            onRemoval: () => {
              // clear errors from in store
              this.props.clearErrors();
              history.goBack();
            },
          })
        );
      } else if (isAuthenticated) {
        // login component
        store.addNotification(
          notificationSettings({
            title: `Welcome Back ${name} `,
            message: 'Login Successful',
            type: 'success',
            duration: 3000,
            onRemoval: () => {
              // clear errors from in store
              this.props.clearErrors();
              history.goBack();
            },
          })
        );
      }
    }
  }
  static propTypes = {
    isRegister: PropTypes.bool.isRequired,
    isAuthenticated: PropTypes.bool,
    isSubmitting: PropTypes.bool.isRequired,
    error: PropTypes.object.isRequired,
    registerUser: PropTypes.func.isRequired,
    clearErrors: PropTypes.func.isRequired,
    toggleAuth: PropTypes.func.isRequired,
    loginUser: PropTypes.func.isRequired,
    name: PropTypes.string,
  };

  render() {
    const { isRegister } = this.props;
    return (
      <div className='auth-body'>
        <Helmet>
          <title>Sign In/Sign up </title>
        </Helmet>

        <div className='auth container-lg'>
          <Login {...this.props} />
          <Register {...this.props} />
          <div className='overlay-container'>
            <div className='overlay'>
              <div className='overlay-left overlay-panel'></div>
              <div className='overlay-right overlay-panel'></div>
            </div>
          </div>
        </div>
        <style jsx>{``}</style>
        <style jsx global>
          {`
            body {
              @media (max-width: 991.98px) {
                overflow: hidden;
                background-color: ${theme.colors.tertiary};
                min-height: 100vh;
              }
            }
            .auth-body {
              width: 100%;
              display: flex;
              justify-content: center;
              align-items: center;
              min-height: 100%;
              background-color: ${theme.colors.input};
              position: absolute;
              @media (max-width: 991.98px) {
                display: block;
                background-color: ${theme.colors.tertiary};
              }
            }
            .auth {
              background-color: ${theme.colors.tertiary};
              border-radius: 10px;
              box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25),
                0 10px 10px rgba(0, 0, 0, 0.22);
              overflow: hidden;
              position: relative;
              min-height: 600px;
              width: 100%;
              @media (max-width: 991.98px) {
                border-radius: 0;
                box-shadow: none;
              }

              .overlay-container {
                position: absolute;
                top: 0;
                width: 50%;
                height: 100%;
                overflow: hidden;
                transition: transform 0.6s ease-in-out;
                bottom: 0;
                left: 50%;
                z-index: 1;
                transform-origin: right ${isRegister ? 'left' : 'right'};
                transform: ${isRegister ? 'translateX(0%)' : 'none'};
                @media (max-width: 991.98px) {
                  display: none;
                }
              }
              .overlay {
                background-color: ${theme.colors.primary};
                position: relative;
                width: 200%;
                left: -100%;
                height: 100%;
                transform: translateX(0);
                transition: transform 0.6s ease-in-out;
                transform-origin: ${isRegister ? 'left' : ' right'};
                transform: ${isRegister ? 'translateX(50%)' : 'none'};
              }
              div.overlay-panel {
                position: absolute;
                top: 0;
                bottom: 0;
                width: 50%;
                height: 100%;
                transform: translateX(0);
                transition: transform 0.6s ease-in-out;
                background-position: center;
                background-origin: border-box;
                background-repeat: no-repeat;
                background-size: cover;
                background-attachment: inherit;
              }
              .overlay-left {
                background: url(${authAlt});
                transform: ${isRegister
                  ? 'translateX(0%)'
                  : 'translateX(-20%)'};
                transform-origin: ${isRegister ? 'left' : 'right'};
              }
              .overlay-right {
                background: url(${auth});
                right: 0;
                transform: ${isRegister ? 'translateX(20%)' : 'translateX(0%)'};
                transform-origin: ${isRegister ? 'right' : 'left'};
              }
            }

            .form-container {
              position: absolute;
              top: 0;
              height: 100%;
              transition: all 600ms ease-in-out;
              font-size: ${theme.size.loginText};
              background-color: ${theme.colors.tertiary};
              z-index: 1;
              @media (max-width: 991.98px) {
                left: 0;
                right: 0;
                bottom: 0;
                position: fixed;
              }
              form {
                background-color: ${theme.colors.tertiary};
                display: flex;
                flex-direction: column;
                padding: 0 30px;
                height: 100%;
                justify-content: center;
                @media (max-width: 991.98px) {
                  justify-content: flex-start;
                  padding: 30px 30px 30px 30px;
                  overflow-y: auto;
                }
              }

              h3 {
                font-size: 24px;
                font-weight: bold;
                color: ${theme.colors.primary};
              }
              p {
                color: ${theme.colors.info};
                margin-bottom: 40px;
              }
              .account {
                font-family: ${theme.fontFamily.circularBook};
                color: ${theme.colors.darkText};
                font-size: 14px;
                @media (max-width: 991.98px) {
                  margin-bottom: 50px;
                }
              }
            }

            .login-container {
              left: 0;
              width: 50%;
              transform-origin: ${isRegister ? 'left' : 'right'};
              transform: ${isRegister ? 'translateX(100%)' : 'none'};
              @media (max-width: 991.98px) {
                width: 100%;
                transform: none;
              }
              .fgt {
                color: ${theme.colors.ftg};
                font-family: ${theme.fontFamily.circularBook};
              }
              p {
                margin-bottom: 30px;
              }
            }
            .register-container {
              right: 0;
              width: 50%;
              z-index: 1;
              transform-origin: ${isRegister ? 'right' : 'left'};
              transform: ${isRegister ? ' translateX(-100%)' : 'none'};
              @media (max-width: 991.98px) {
                width: 100%;
                z-index: 5;
                transform: ${isRegister
                  ? ' translateX(0%)'
                  : ' translateX(100%)'};
              }
              p {
                margin-bottom: 10px;
              }
            }
          `}
        </style>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  isRegister: state.ui.isRegister,
  isAuthenticated: state.auth.isAuthenticated,
  error: state.error,
  name: state.auth.user?.fname,
  isSubmitting: state.auth.isSubmitting,
});

export default connect(mapStateToProps, {
  loginUser,
  clearErrors,
  toggleAuth,
  registerUser,
})(Auth);
