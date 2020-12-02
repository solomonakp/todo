import { Link } from 'react-router-dom';
import React, { Component } from 'react';
import { LogoDark, LogoLightTwo, Cart, User } from '../svgs';
import theme from '../theme';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { logoutUser } from '../../redux/actions/authActions';
import { DropDown, UserMenu } from './ExpandableMenu';
let prevPos;
if (process.browser) {
  prevPos = window.pageYOffset;
}

class Header extends Component {
  constructor(props) {
    super(props);
    this.dropDown = React.createRef();
    this.hamburger = React.createRef();
    this.nav = React.createRef();
  }

  static propTypes = {
    isAuthenticated: PropTypes.bool,
    logoutUser: PropTypes.func.isRequired,
    name: PropTypes.string,
    bannerIsLight: PropTypes.bool,
  };

  state = {
    user: false,
    cart: false,
    userRef: null,
  };

  componentDidMount() {
    // scroll event
    window.addEventListener('scroll', this.animate);
  }
  toggle = (state, value, ref) => {
    // setting state
    this.setState(
      (states) => ({ ...states, [state]: value }),
      function () {
        if (this.state[state]) {
          // adding event listener to dom if dropdown open
          document.addEventListener(
            'click',
            this.closeDropDown.bind(this, ref, state)
          );
        } else {
          // removing event listener to dom if dropdown closed
          document.removeEventListener('click', this.closeDropDown);
        }
      }
    );
  };
  closeDropDown = (ref, value, e) => {
    // check if dropdown doesn't contains the current clicked element
    if (!ref.contains(e.target)) {
      // setting state
      this.setState(
        (state) => ({ ...state, [value]: false }),
        () => {
          // cleaning up document
          document.removeEventListener('click', this.closeDropDown);
        }
      );
    }
  };

  animate = (e) => {
    const navBar = this.nav.current;
    let currentPos = window.pageYOffset;
    if (prevPos > currentPos) {
      navBar.style.transform = 'translateY(0)';
      // when scroll position is greater than 1000
      if (prevPos > 100) {
        // if navbar is light
        if (this.props.bannerIsLight) {
          // navbar is tertiary color
          navBar.style.backgroundColor = theme.colors.tertiary;
        } else {
          // else navbar is set to primary color
          navBar.style.backgroundColor = theme.colors.primary;
        }
      } else {
        // if navbar color is blue by default
        if (this.props.color === 'transparent') {
          navBar.style.backgroundColor = 'transparent';
        }
      }
    } else {
      navBar.style.transform = 'translateY(-118px)';
    }
    prevPos = currentPos;
  };

  componentDidUpdate(prevProps) {
    const hamburger = this.hamburger.current;
    const { isOpen } = prevProps;
    if (isOpen !== this.props.isOpen) {
      hamburger.classList.toggle('is-active');
    }
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.animate);
    window.removeEventListener('click', this.closeDropDown);
  }

  render() {
    const {
      isOpen,
      setOpen,
      isAuthenticated,
      name,
      logoutUser,
      bannerIsLight,
      color,
    } = this.props;
    const { user } = this.state;
    return (
      <nav ref={this.nav} className='navbar navbar-expand-lg py-3 fixed-top'>
        <div className='container-xl'>
          <div className='row align-items-center w-100 flex-nowrap'>
            {/* first */}
            <div className='col-lg-3  col-auto d-flex justify-content-center logo-grid'>
              <Link to='/' className='navbar-brand  '>
                <i className='logo d-inline-block'>
                  {bannerIsLight ? (
                    <LogoLightTwo />
                  ) : (
                    <LogoDark width='100%' height='60' />
                  )}
                </i>
              </Link>
            </div>
            {/* second */}
            {bannerIsLight || (
              <div className='col-4 d-none d-lg-block mr-auto px-0'>
                <ul className='navbar-nav  flex-row justify-content-start align-items-center '>
                  <li className='nav-item'>
                    <Link to='/' className='nav-link'>
                      Buy Tyres
                    </Link>
                  </li>
                  <li className='nav-item  mx-auto'>
                    <Link to='/' className='nav-link'>
                      Buy Accessories
                    </Link>
                  </li>
                  <li className='nav-item mx-auto'>
                    <Link to='/' className='nav-link'>
                      Buy Batteries
                    </Link>
                  </li>
                </ul>
              </div>
            )}

            {/* third */}
            {bannerIsLight || (
              <div className='col-3 d-none d-lg-block'>
                <ul className='navbar-nav  flex-row justify-content-center align-items-center'>
                  <li className='nav-item '>
                    <a className='nav-link ' href='tel:+2348188888654'>
                      Any questions? Call 0818-888-8654
                    </a>
                  </li>
                </ul>
              </div>
            )}

            {/* forth */}
            {bannerIsLight || (
              <div className='col-lg-2 col-auto ml-auto ml-lg-0 last'>
                <ul className='navbar-nav  flex-row justify-content-left justify-content-lg-center align-items-center'>
                  <li className='nav-item d-none d-lg-inline-block'>
                    {isAuthenticated ? (
                      <DropDown
                        ref={this.dropDown}
                        className='user-dropdown mr-3'
                        title={
                          <User
                            width='20'
                            height='20'
                            fill={theme.colors.tertiary}
                          />
                        }
                        onClick={(e) => {
                          this.toggle('user', !user, e.target);
                        }}
                        toggle={user}
                      >
                        <UserMenu name={name} logoutUser={logoutUser} />
                      </DropDown>
                    ) : (
                      <Link to='/auth' className='nav-link mr-3'>
                        Login
                      </Link>
                    )}
                  </li>
                  <li className='nav-item ml-auto mr-4 mr-lg-0 ml-lg-0'>
                    <Link to='/' className='nav-link cart '>
                      <i className='cart-details position-relative d-block'>
                        <span className='product-count badge position-absolute'>
                          20
                        </span>
                        <Cart width='20' height='20' />
                      </i>
                    </Link>
                  </li>
                  <li className='nav-item d-lg-none'>
                    <button
                      className='hamburger hamburger--arrow'
                      type='button'
                      onClick={() => setOpen(!isOpen)}
                      ref={this.hamburger}
                    >
                      <span className='hamburger-box'>
                        <span className='hamburger-inner'></span>
                      </span>
                    </button>
                  </li>
                </ul>
              </div>
            )}
            {bannerIsLight && (
              <div className='col-lg-8 col-auto ml-auto last'>
                <ul className='navbar-nav  flex-row justify-content-end  align-items-center'>
                  <li className='nav-item ml-auto mr-4 mr-lg-0 ml-lg-0'>
                    <Link to='/' className='nav-link back-to-home'>
                      Back to Homepage
                    </Link>
                  </li>
                </ul>
              </div>
            )}
            {bannerIsLight && <div className='d-none d-lg-block col-1'></div>}
          </div>
          {/* fifth */}
        </div>
        <style jsx>
          {`
            nav.navbar {
              background-color: ${color};
              z-index: 2000;
              transition: transform 500ms ease-in,
                background-color 500ms ease-in;
              transform: translateY(0);
              flex-wrap: nowrap;
              @media (max-width: 991px) {
                padding-right: 4px;
              }
            }
            .navbar-brand {
              font-weight: 700;
            }
            button.navbar-toggler {
              border: 0;
            }

            :global(a.nav-link) {
              font-family: 'Circular Std Book';
              color: ${bannerIsLight
                ? theme.colors.primary
                : theme.colors.tertiary};
              font-size: 14px;
              white-space: nowrap;
              position: relative;
              transition: color 250ms ease-out;
              padding: 0 0 8px 0;
            }
            :global(a.nav-link.back-to-home) {
              padding: 0;
            }
            :global(a.nav-link:hover::before) {
              content: '';
              transform: translateX(-50%);
              left: 50%;
              opacity: 1;
              transition: left 150ms linear 100ms, transform 150ms linear 100ms,
                opacity 100ms ease-out;
            }
            :global(a.nav-link:focus),
            :global(a.nav-link:active) {
              color: ${theme.colors.secondary};
              transition: color 250ms ease-in;
            }
            :global(a.nav-link:focus::before),
            :global(a.nav-link:active::before) {
              content: '';
              transform: translateX(-50%);
              transform-origin: left;
              left: 50%;
              opacity: 1;
              background: ${theme.colors.secondary};
              transition: left 150ms linear 100ms, transform 150ms linear 100ms,
                opacity 100ms ease-out, color 250ms ease-out;
            }
            :global(.nav-link:not(.cart)::before) {
              content: '';
              position: absolute;
              width: 8px;
              height: 8px;
              background: ${theme.colors.tertiary};
              border-radius: 50%;
              bottom: 0;
              left: 0;
              opacity: 0;
              transform-origin: right;
              transform: translateX(0);
              transition: left 150ms linear, transform 150ms linear,
                opacity 100ms ease-out 150ms;
            }

            .logo {
              max-width: 160px;
              display: block;
              min-width: 130px;
            }
            .logo-grid {
              @media (max-width: 300px) {
                display: none !important;
              }
            }
            div.last {
              @media (max-width: 991px) {
                padding: 0;
              }
            }
            .product-count {
              top: -11px;
              right: -12px;
              background-color: green;
              border-radius: 50%;
              display: flex;
              justify-content: center;
              align-items: center;
              padding: 0;
              width: 20px;
              height: 20px;
              color: ${theme.colors.tertiary};
              font-family: ${theme.fontFamily.circularBook};
            }
            .hamburger {
              color: ${theme.colors.tertiary};
              padding: 0;
              background-color: transparent;
              white-space: nowrap;
              outline: none;
              transition-timing-function: ease-in-out !important;
              transition-duration: 0.3s !important;
              &:hover {
                background-color: transparent;
                outline: none;
              }
              .hamburger-box {
                transition-timing-function: ease-in-out !important;
                transition-duration: 0.3s !important;
              }
              .hamburger-inner {
                background-color: ${theme.colors.tertiary};
                border-radius: 3px;
                height: 2px;
                margin-top: 0;
                transition-timing-function: ease-in-out !important;
                transition-duration: 0.3s !important;
                &::after,
                &::before {
                  background-color: ${theme.colors.tertiary};
                  width: 30px;
                  border-radius: 3px;
                  height: 2px;
                  transition-timing-function: ease-in-out !important;
                  transition-duration: 0.3s !important;
                }
                &::after {
                  bottom: -8px;
                  z-index: -1;
                }
                &::before {
                  top: -8px;
                  z-index: -1;
                }
              }
            }
            .hamburger--arrow.is-active .hamburger-inner:before {
              transform: translate3d(-4px, 0, 0) rotate(-37deg) scaleX(0.9);
            }
            .hamburger--arrow.is-active .hamburger-inner:after {
              transform: translate3d(-4px, 0, 0) rotate(37deg) scaleX(0.9);
            }
            .hamburger--arrow.is-active {
              transition-timing-function: ease-in-out !important;
              transition-duration: 0.3s !important;
            }

            @media (max-width: 991px) {
              nav.navbar {
                justify-content: flex-end;
              }
              .nav-link {
                padding-bottom: 0 !important;
              }
            }
          `}
        </style>
      </nav>
    );
  }
}

const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated,
  name: state.auth.user?.fname,
  bannerIsLight: state.ui.bannerIsLight,
});

export default connect(mapStateToProps, { logoutUser })(Header);
