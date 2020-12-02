import React from 'react';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <footer>
      <div className='container-lg'>
        <div className='row '>
          <div className='col-md-3 col-6 d-flex flex-column'>
            <ul className='footer-list mx-md-auto'>
              <li className='list-header'>LINKS</li>
              <li className='footer-item'>
                <Link to='/delivery-information' className='footer-link'>
                  Delivery
                </Link>
              </li>
              <li className='footer-item'>
                <Link to='/' className='footer-link'>
                  FAQ
                </Link>
              </li>
              <li className='footer-item'>
                <Link to='/contact' className='footer-link'>
                  Support
                </Link>
              </li>
            </ul>
          </div>
          <div className='col-md-3 col-6 d-flex flex-column'>
            <ul className='footer-list mx-md-auto'>
              <li className='list-header'>SERVICES</li>
              <li className='footer-item'>
                <Link to='/' className='footer-link'>
                  Returns
                </Link>
              </li>
              <li className='footer-item'>
                <Link to='/' className='footer-link'>
                  Brands
                </Link>
              </li>
              <li className='footer-item'>
                <Link to='/' className='footer-link'>
                  Site Map
                </Link>
              </li>
            </ul>
          </div>
          <div className=' col-md-3 col-6 pt-2 pt-md-0 d-flex flex-column'>
            <ul className='footer-list mx-md-auto'>
              <li className='list-header'>MY ACCOUNT</li>
              <li className='footer-item'>
                <Link to='/' className='footer-link'>
                  Account
                </Link>
              </li>
              <li className='footer-item'>
                <Link to='/' className='footer-link'>
                  Order History
                </Link>
              </li>
              <li className='footer-item'>
                <Link to='/' className='footer-link'>
                  Affiliates
                </Link>
              </li>
            </ul>
          </div>
          <div className='col-md-3 col-6 pt-2 pt-md-0 d-flex flex-column '>
            <ul className='footer-list mx-md-auto'>
              <li className='list-header'>COMPANY</li>
              <li className='footer-item'>
                <Link to='/about' className='footer-link'>
                  About
                </Link>
              </li>
              <li className='footer-item'>
                <Link to='/privacy-policy' className='footer-link'>
                  Privacy Policy
                </Link>
              </li>
              <li className='footer-item'>
                <Link to='/terms-and-conditions' className='footer-link'>
                  Terms of Service
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className='post-footer'></div>
      <style jsx>
        {`
          footer {
            background-color: #0c1098;
            padding: 60px 0 60px 0;
            position: relative;
            margin-top: auto;
          }

          ul {
            list-style-type: none;
            padding: 0;
            display: flex;
            flex-direction: column;
          }
          li {
            font-size: 14px;
            margin-bottom: 15px;
            color: #ffffff;
          }
          li.list-header {
            margin-bottom: 20px;
          }
          :global(.footer-link) {
            font-size: 13px;
            color: #ffffff;
            text-decoration: none;
            transition: color 150ms ease-out;
            &:active,
            &:focus,
            &:hover {
              color: #fed000;
              text-decoration: none;
              transition: color 150ms ease-in;
            }
          }

          .post-footer {
            position: absolute;
            left: 0;
            right: 0;
            bottom: 0;
            background-color: #fed000;
            height: 40px;
          }
        `}
      </style>
    </footer>
  );
}

export default Footer;
