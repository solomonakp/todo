import React from 'react';
import { Consumer } from './context';
export default function ButtonContainer() {
  return (
    <Consumer>
      {(context) => {
        const { isDarkMode, dispatch } = context;
        return (
          <div className='container'>
            <button
              className='btn btn-primary'
              onClick={() => {
                dispatch({ type: 'toggleMode' });
              }}
            >
              {isDarkMode ? 'Dark' : 'Light'}
            </button>
            <style jsx>
              {`
                button {
                }
              `}
            </style>
          </div>
        );
      }}
    </Consumer>
  );
}
