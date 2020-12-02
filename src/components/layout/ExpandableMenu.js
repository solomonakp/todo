import React from 'react';
import { Link } from 'react-router-dom';
import theme from '../theme';

import { Logout, User, Triangle } from '../svgs';

export function ListItem({ name, icon, metaTag, href, type, onClick }) {
  return (
    <li className='list-Item' tabIndex={2}>
      {type === 'button' ? (
        <button className='expandable-btn' onClick={onClick}>
          <i className={`material-icons-outlined mr-2 item-icon`}>{icon}</i>
          {name}
          {metaTag}
        </button>
      ) : (
        <Link className='expandable-btn ' to={href}>
          <i className={`material-icons-outlined mr-2 item-icon`}>{icon}</i>
          {name}
          {metaTag}
        </Link>
      )}

      <style jsx>
        {`
          li {
            border-bottom: 1px solid #eaeaea;
            &:last-of-type {
              border-bottom: 1px solid #eaeaea;
            }
          }
          button.expandable-btn,
          :global(.expandable-btn) {
            outline: none;
            display: flex;
            align-items: baseline;
            width: 100%;
            padding: 15px 20px 15px 30px;
            color: rgba(12, 16, 152, 1);
            font-size: 16px;
            border: 0;
            background-color: transparent;
            position: relative;
            white-space: nowrap;
            z-index: 1;
            font-family: 'Circular Std Book';
          }

          button.expandable-btn::before,
          :global(.expandable-btn::before) {
            display: block;
            content: '';
            background-color: #0c1098;
            position: absolute;
            left: 0;
            width: 5px;
            top: 0;
            bottom: 0;
            transform: translateX(-5px);
            transition: transform ease-in 150ms;
            transform-origin: right;
          }
          button.expandable-btn::after,
          :global(.expandable-btn::after) {
            display: block;
            content: '';
            background-color: rgba(12, 16, 152, 0.2);
            position: absolute;
            left: 0;
            top: 0;
            bottom: 0;
            width: 250px;
            transform: translateX(-250px);
            transform-origin: right;
            transition: transform 150ms ease-in;
            z-index: -1;
          }

          button.expandable-btn:active::before,
          button.expandable-btn:focus::before,
          :global(.expandable-btn:active::before),
          :global(.expandable-btn:focus::before) {
            transform: translateX(0);
            transform-origin: left;
            transition: transform ease-out 150ms;
          }
          button.expandable-btn:hover::after,
          :global(.expandable-btn:hover::after) {
            transform: translateX(0);
            transform-origin: left;
            transition: transform ease-out 150ms;
          }
        `}
      </style>
    </li>
  );
}
export function Grouper({ children }) {
  return (
    <div className='grouper'>
      {children}
      <style jsx>
        {`
          .grouper {
            padding: 0;
            border-bottom: 1px solid #4daaf5;
          }
        `}
      </style>
    </div>
  );
}

export function ListGroup({ children }) {
  return (
    <ul className='list-group'>
      {children}

      <style jsx>
        {`
          ul.list-group {
            display: flex;
            flex-direction: column;
            padding: 0;
            margin: 0;
            list-style-type: none;
          }
        `}
      </style>
    </ul>
  );
}

export const DropDown = React.forwardRef(
  ({ isAuthenticated, children, toggle, className, onClick, title }, ref) => {
    return (
      <div className={`dropdown ${className}`} onClick={onClick} ref={ref}>
        <button>{title}</button>
        {toggle && (
          <div className='dropper'>
            <Triangle width='20' height='20' />
            {children}
          </div>
        )}
        <style jsx>{`
          .drop-down {
            overflow: visible;
            position: relative;
            display: inline-block;

            outline: none;
            &:focus,
            &:active {
              outline: none;
            }
          }
          button,
          a {
            display: inline-block;
            background-color: transparent;
            outline: none;
            padding: 0;
            position: relative;
            z-index: -1;
            padding: 0 1rem 0.5rem 1rem;
            @media (min-width: 992px) {
              padding-right: 0.5rem;
              padding-left: 0.5rem;
            }
            &:focus,
            &:active {
              outline: none;
            }
          }

          .dropper {
            position: absolute;
            right: 8px;
            z-index: 20003;
            bottom: 15px;
            box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
            top: 35px;
            border-radius: 3px;

            :global(#triangle) {
              position: absolute;
              right: 0px;
              top: -6px;
              fill: ${theme.colors.tertiary};
              z-index: -1;
            }
          }
        `}</style>
      </div>
    );
  }
);

// export default connect(mapStateToProps)();

export const UserMenu = ({ name, className, logoutUser }) => {
  return (
    <div className={`user-menu ${className}`}>
      <div className='profile my-2'>
        <span className='name'>{`Hi ${name}`}</span>
      </div>
      <ListGroup>
        <ListItem
          href='/'
          name='My Account'
          icon={<User height='20px' width='20px' fill={theme.colors.primary} />}
        />
        <ListItem
          href='/'
          name='Logout'
          type='button'
          onClick={logoutUser}
          icon={
            <Logout width='20px' height='20px' fill={theme.colors.primary} />
          }
        />
      </ListGroup>
      <div className='footing'></div>

      <style jsx>
        {`
          .user-menu {
            background-color: ${theme.colors.tertiary};
            overflow-x: hidden;
            width: 250px;
            white-space: nowrap;
          }

          .profile {
            color: #4b4b5a;
            padding: 10px 10px 0px 55px;
          }
          .profile .name {
            font-size: 18px;
            font-family: ${theme.fontFamily.circularBook};
          }
          :global(li.list-Item:last-of-type) {
            border-bottom: unset;
          }
          .footing {
            background-color: ${theme.colors.primary};
            height: 20px;
            z-index: 100;
          }
        `}
      </style>
    </div>
  );
};
