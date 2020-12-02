// importing react
import React from 'react';
// proptyes for type checking
import PropTypes from 'prop-types';
// imported our table body
import TableBody from './TableBody';
// imported our consumer
import { Consumer } from './context';

function Table({ fellowData, tr, tHead }) {
  return (
    <Consumer>
      {(context) => {
        return (
          <table>
            {tHead}
            <TableBody />
            <style jsx>
              {`
                table {
                  background-color: ${'#000000'};
                  color: ${'#ffffff'};
                  width: 100%;
                }
              `}
            </style>
          </table>
        );
      }}
    </Consumer>
  );
}

Table.propTypes = {
  fellowData: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      sex: PropTypes.oneOf(['male', 'female']),
      track: PropTypes.oneOf(['backend', 'front-end']),
    })
  ),
};

export default Table;
