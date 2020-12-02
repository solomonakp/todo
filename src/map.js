const map = function name(arr, callBack) {
  const newArray = [];

  if (Array.isArray(arr)) {
    for (let index = 0; index < arr.length; index++) {
      const ele = arr[index];
      const result = callBack(ele, index, arr);
      newArray.push(result);
    }
    return newArray;
  }
  return ' this is not an array';
};

// declare an array of numbers
const numbers = [1, 2, 3, 4, 5, 6];

// create a function for mulplying each index of the array
function multiplyByTwo(number) {
  return number * 2;
}

//  getting the values of my new array that has been multiplied by 2
const newNumbers = numbers.map(multiplyByTwo);

console.log('new numbers ', newNumbers);
