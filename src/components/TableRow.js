import React from 'react';
import Button from './Button';
import { Consumer } from './context';

export default function TableRow({ name, sex, track }) {
  return (
    <Consumer>
      {(context) => {
        const { dispatch } = context;
        return (
          <tr>
            <td>{name}</td>
            <td>{sex}</td>
            <td>{track}</td>
            <td>
              <Button
                onClick={() => {
                  dispatch({ type: 'deleteFellow', payload: name });
                }}
              >
                Delete
              </Button>
            </td>
          </tr>
        );
      }}
    </Consumer>
  );
}
