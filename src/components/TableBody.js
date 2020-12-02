import React from 'react';
import { Consumer } from './context';
import TableRow from './TableRow';
function TableBody() {
  return (
    <tbody>
      <Consumer>
        {(context) => {
          const { fellows } = context;

          return fellows.map((fellow, index) => {
            return <TableRow key={index} {...fellow} />;
          });
        }}
      </Consumer>
    </tbody>
  );
}

export default TableBody;
