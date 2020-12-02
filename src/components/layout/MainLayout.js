import React, { useState } from 'react';
import Header from './Header';
import Sidebar from './Sidebar';
import Footer from './Footer';
import theme from '../theme';

import { getDisplayName } from '../../utils/helpers';

const withLayout = (Component, navColor = 'transparent') => {
  const WrappedComponent = (props) => {
    const [isOpen, setOpen] = useState(false);
    return (
      <div className='layout'>
        {/* Head */}
        {/* nav */}
        <Header isOpen={isOpen} setOpen={setOpen} color={navColor} />
        <Sidebar isOpen={isOpen} {...props} />
        <main className='content-area w-100'>
          <Component {...props} />
        </main>

        {/* sidenav */}
        {/* main content */}
        {/* footer */}
        <Footer />
        <style jsx>{``}</style>
      </div>
    );
  };

  // setting name for debugging
  WrappedComponent.displayName = `withLayout(${getDisplayName(Component)})`;
  return WrappedComponent;
};

export default withLayout;
