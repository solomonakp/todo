// importing react
import React from 'react';
import PropTypes from 'prop-types';
import styles from '../styles/tables.module.css';
// creating functional component

console.log('styles', styles);
function Table({ fellowData }) {
  // array of fellowData => Array of fellow component
  console.log('fellow data', fellowData);

  // creating an array of fellow components with map
  const fellowComoponent = fellowData.map((fellow, index) => {
    //    destructing name , sex and track from each fellow
    const { name, sex, track } = fellow;

    return (
      <tr key={index} className={styles.tr}>
        <td>{name}</td>
        <td>{sex}</td>
        <td>{track}</td>
      </tr>
    );
  });
  console.log('fellowData', fellowData);
  console.log('fellowComponent', fellowComoponent);

  return (
    <table>
      <tbody>{fellowComoponent}</tbody>
    </table>
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

Table.defaultProps = {
  fellowData: [
    {
      name: 'samuel yusuf',
      sex: 'male',
      track: 'front-end',
    },
    {
      name: 'ekso longe',
      sex: 'male',
      track: 'backend',
    },
    {
      name: 'uncle bay',
      sex: 'male',
      track: 'front-end',
    },
  ],
};

export default Table;

// const map = function name(arr, callBack) {
//   const newArray = [];

//   if (Array.isArray(arr)) {
//     for (let index = 0; index < arr.length; index++) {
//       const ele = arr[index];
//       const result = callBack(ele, index, arr);
//       newArray.push(result);
//     }
//     return newArray;
//   }
//   return ' this is not an array';
// };
//

// declare an array of numbers
const numbers = [1, 2, 3, 4, 5, 6];

// create a function for mulplying each index of the array
function multiplyByTwo(number) {
  return number * 2;
}

//  getting the values of my new array that has been multiplied by 2
const newNumbers = numbers.map(multiplyByTwo);

console.log('new numbers ', newNumbers);
