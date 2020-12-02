import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { OverlayScrollbarsComponent } from 'overlayscrollbars-react';
import { ListItem, ListGroup } from './ExpandableMenu';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { logoutUser } from '../../redux/actions/authActions';
import { toggleLogin, toggleRegister } from '../../redux/actions/uiActions';
import {
  Login,
  Register,
  BuyTyres,
  BuyAccessories,
  BuyBatteries,
  LogoLight,
  User,
  Logout,
} from '../svgs';
import theme from '../theme';

class Sidebar extends Component {
  constructor(props) {
    super(props);
    this.aside = React.createRef();
    this.state = {
      scrollBarOptions: {
        className: 'nav-content',
        scrollbars: {
          autoHide: 'leave',
        },
      },
    };
  }
  static propTypes = {
    isAuthenticated: PropTypes.bool,
    logoutUser: PropTypes.func.isRequired,
    name: PropTypes.string,
  };

  componentDidUpdate(prevProps) {
    const aside = this.aside.current;
    const { isOpen } = prevProps;
    if (isOpen !== this.props.isOpen) {
      aside.classList.toggle('open');
    }
  }

  render() {
    const { scrollBarOptions } = this.state;
    const {
      isAuthenticated,
      name,
      logoutUser,
      toggleLogin,
      toggleRegister,
      history,
    } = this.props;
    return (
      <aside ref={this.aside} className=' d-block d-lg-none py-3'>
        <nav className='sidebar'>
          <div className='nav-header'>
            <Link
              to='/'
              className='navbar-brand  d-flex w-100 justify-content-center pb-3'
            >
              <i className='logo d-inline-block'>
                <LogoLight width='100%' height='63' />
              </i>
            </Link>
            {isAuthenticated && (
              <div className='profile my-2'>
                {name && <span className='name'>{`Hi ${name}`}</span>}
              </div>
            )}
          </div>
          <OverlayScrollbarsComponent
            options={scrollBarOptions}
            style={{
              minHeight: '60vh',
              maxHeight: '100%',
              paddingBottom: '30px',
              position: 'relative',
            }}
          >
            <ListGroup>
              {isAuthenticated ? null : (
                <ListItem
                  name='Login'
                  icon={<Login height='24px' width='24px' />}
                  type='button'
                  onClick={() => {
                    toggleLogin();
                    history.push('/auth');
                  }}
                />
              )}
              {isAuthenticated ? null : (
                <ListItem
                  href='/'
                  name='Register'
                  icon={<Register height='24px' width='24px' />}
                  type='button'
                  onClick={() => {
                    toggleRegister();
                    history.push('/auth');
                  }}
                />
              )}
              {isAuthenticated ? (
                <ListItem
                  href='/'
                  name='My Account'
                  icon={
                    <User
                      height='24px'
                      width='24px'
                      fill={theme.colors.primary}
                    />
                  }
                />
              ) : null}

              <ListItem
                href='/'
                name='Buy Tyres'
                icon={<BuyTyres width='24px' height='24px' />}
              />
              <ListItem
                href='/'
                name='Buy Accessories'
                icon={<BuyAccessories height='24px' width='24px' />}
              />
              <ListItem
                href='/'
                name='Buy Batteries'
                icon={<BuyBatteries width='24px' height='24px' />}
              />
              {isAuthenticated && (
                <ListItem
                  href='/'
                  name='Logout'
                  type='button'
                  onClick={logoutUser}
                  icon={
                    <Logout
                      width='24px'
                      height='24px'
                      fill={theme.colors.primary}
                    />
                  }
                />
              )}
            </ListGroup>
            <div className='qa text-center pt-3'>
              Any questions? Call
              <br />
              <a href='tel:+2348188888654' className='call-link'>
                0818-888-8654
              </a>
            </div>
          </OverlayScrollbarsComponent>
        </nav>
        <div className='footing'></div>
        <style jsx>
          {`
            aside {
              position: fixed;
              left: 0;
              top: 0;
              z-index: 2001;
              height: 100vh;
              overflow-x: hidden;
              transition: transform ease-in-out 300ms;
              width: 250px;
              transform: translateX(-250px);
              background-color: ${theme.colors.tertiary};
              box-shadow: 0px 0px 10px 5px rgba(0, 0, 0, 0.2);
            }

            aside.open {
              transition: transform ease-in-out 300ms;
              transform: translateX(0);
            }

            aside .sidebar {
              display: flex;
              flex-direction: column;
              width: 100%;
              height: 100%;
              overflow-y: visible;
            }

            .profile {
              color: #4b4b5a;
              padding: 10px 10px 10px 51px;
            }
            .profile .name {
              font-weight: 600;
              font-size: 20px;
            }

            .profile .details {
              display: flex;
              color: ${theme.colors.textSecondary};
              align-items: baseline;
            }

            .nav-content {
              min-height: 60vh;
            }

            .qa {
              color: ${theme.colors.textSecondary};
              font-size: 16px;
              font-weight: 500;
              a {
                transition: color 150ms ease-out;
                &:active,
                &:focus,
                &:hover {
                  color: ${theme.colors.confirm};

                  transition: color 150ms ease-in;
                }
              }
            }
            .footing {
              position: absolute;
              left: 0;
              right: 0;
              bottom: 0;
              background-color: ${theme.colors.primary};
              height: 40px;
              z-index: 100;
            }
          `}
        </style>
      </aside>
    );
  }
}

const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated,
  name: state.auth.user?.fname,
});

export default connect(mapStateToProps, {
  logoutUser,
  toggleLogin,
  toggleRegister,
})(Sidebar);
