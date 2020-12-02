import React from 'react';

export default function Button({ children, width, onClick }) {
  return (
    <button onClick={onClick}>
      {children}
      <style jsx>{`
        button {
          display: inline-block;
          width: ${width};
          white-space: nowrap;
        }
      `}</style>
    </button>
  );
}
