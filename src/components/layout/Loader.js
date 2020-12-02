import React from 'react';

import { getDisplayName } from '../../utils/helpers';

const Loader = ({ fixed, width, height }) => {
  return (
    <div className='loader w-100' role='alert' aria-live='assertive'>
      <div className='tyre'>
        <svg
          height={height ? height.toString() : '60'}
          viewBox='0 0 512 512'
          width={width ? width.toString() : '60'}
          xmlns='http://www.w3.org/2000/svg'
        >
          <path d='m319.003906 256c0 6.09375-1.144531 11.871094-2.765625 17.449219l58.140625 33.566406c6.78125-15.664063 10.617188-32.886719 10.617188-51.015625s-3.835938-35.351562-10.617188-51.015625l-58.140625 33.566406c1.621094 5.578125 2.765625 11.355469 2.765625 17.449219zm0 0' />
          <path d='m192.996094 256c0-6.09375 1.144531-11.871094 2.765625-17.449219l-58.140625-33.566406c-6.777344 15.664063-10.613282 32.886719-10.613282 51.015625s3.835938 35.351562 10.613282 51.015625l58.140625-33.566406c-1.621094-5.578125-2.765625-11.355469-2.765625-17.449219zm0 0' />
          <path d='m359.03125 179.195312c-20.675781-27.660156-52.03125-46.433593-88.03125-50.671874v66.476562c11.769531 2.898438 22.238281 9.007812 30.375 17.488281zm0 0' />
          <path d='m222.996094 256c0 18.191406 14.8125 33.003906 33.003906 33.003906s33.003906-14.8125 33.003906-33.003906-14.8125-33.003906-33.003906-33.003906-33.003906 14.8125-33.003906 33.003906zm0 0' />
          <path d='m271 317v66.476562c36-4.238281 67.355469-23.011718 88.03125-50.671874l-57.65625-33.292969c-8.136719 8.480469-18.605469 14.589843-30.375 17.488281zm0 0' />
          <path d='m256 512c140.609375 0 256-115.390625 256-256s-115.390625-256-256-256-256 115.390625-256 256 115.390625 256 256 256zm0-414.992188c89.507812 0 158.992188 75.019532 158.992188 158.992188 0 84.011719-69.535157 158.992188-158.992188 158.992188-89.609375 0-158.992188-75.214844-158.992188-158.992188 0-85.246094 70.503907-158.992188 158.992188-158.992188zm0 0' />
          <path d='m152.96875 332.804688c20.675781 27.660156 52.03125 46.433593 88.03125 50.671874v-66.476562c-11.769531-2.898438-22.238281-9.007812-30.375-17.488281zm0 0' />
          <path d='m241 195v-66.476562c-36 4.238281-67.355469 23.011718-88.03125 50.671874l57.65625 33.292969c8.136719-8.480469 18.605469-14.589843 30.375-17.488281zm0 0' />
        </svg>
      </div>
      <div className='shade'> </div>
      <style jsx>
        {`
          .loader {
            display: flex;
            flex-direction: column;
            justify-content: center;
            margin: 0 auto;
            height: 100%;
            align-items: center;
            position: ${fixed ? 'fixed' : 'absolute'};
            left: 0;
            right: 0;
            top: 0;
            bottom: 0;
            z-index: ${fixed ? 5000 : 1000};
            background-color: white;
            .tyre {
              position: relative;
              animation: jump 0.8s cubic-bezier(0.7, 0.31, 1, 1.89) infinite
                alternate;
            }
            svg {
              fill: black;
              width: 100px;
              animation: roll 0.8s linear 0.2s infinite;
            }
            .shade {
              height: 3px;
              border-radius: 5px;
              width: 40px;
              margin-top: 33px;
              background: black;
              animation: stretch 0.8s cubic-bezier(1, 0.54, 0.77, 1.38) infinite
                alternate;
            }
          }

          @keyframes roll {
            0% {
              transform: rotateZ(0deg);
            }

            100% {
              transform: rotateZ(180deg);
            }
          }
          @keyframes stretch {
            0% {
              transform: scaleX(1);
            }
            70% {
              transform: scaleX(1);
            }
            100% {
              transform: scaleX(1.3);
            }
          }
          @keyframes jump {
            0% {
              transform: scaleY(1) translateY(0);
            }
            10% {
              transform: scaleY(1.05);
            }
            100% {
              transform: scaleY(0.9) translateY(35px);
            }
          }

          @keyframes grow {
            0% {
              transform: scaleY(0);
            }
            70% {
              transform: scaleX(0);
            }
            100% {
              transform: scaleY(1);
            }
          }
        `}
      </style>
    </div>
  );
};

export default Loader;

export const withLoader = (Component) => {
  const WrappedComponent = (props) => {
    const { userLoading, spinner, init } = props;
    return (
      <div className='page-root'>
        {/* {userLoading || spinner || (userLoading && spinner) ? (
          <Loader fixed={init} />
        ) : null} */}
        <Component {...props} />
        <style jsx>{``}</style>
      </div>
    );
  };
  // setting name for debugging
  WrappedComponent.displayName = `withLoader(${getDisplayName(Component)})`;
  return WrappedComponent;
};
