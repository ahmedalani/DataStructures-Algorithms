const checkIfExist = (arr) => {
  for (let i = 0; i < arr.length; i++) {
    const num1 = arr[i];
    for (let j = 0; j < arr.length; j++) {
      const num2 = arr[j];
      if (i !== j && num1 === 2 * num2) {
        return true;
      }
    }
  }
  return false;
};

// Tests
let arr1 = [10, 2, 5, 3];
let arr2 = [7, 1, 14, 11];
let arr3 = [3, 1, 7, 11];
let arr4 = [-2, 0, 10, -19, 4, 6, -8];
let arr5 = [0, 0];

console.log(checkIfExist(arr1)); // true
console.log(checkIfExist(arr2)); // true
console.log(checkIfExist(arr3)); // False
console.log(checkIfExist(arr4)); // False
