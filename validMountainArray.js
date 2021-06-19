const validMountainArray = (arr) => {
  let maxIndex = null;
  for (let i = 1; i <= arr.length - 1; i++) {
    if (maxIndex === null) {
      if (arr[i] < arr[i - 1]) {
        maxIndex = i - 1;
      } else if (arr[i] === arr[i - 1]) {
        return false;
      }
    } else if (arr[i] >= arr[i - 1]) {
      return false;
    }
  }
  return maxIndex > 0 && maxIndex < arr.length - 1;
};

// Tests
const arr1 = [0, 3, 2, 1];
const arr2 = [3, 5, 5];
const arr3 = [2, 1];
const arr4 = [1, 1, 1, 1, 1, 1, 1, 2, 1];
const arr5 = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
const arr6 = [9, 8, 7, 6, 5, 4, 3, 2, 1, 0];
const arr7 = [0, 3, 2, 1];

console.log(validMountainArray(arr1)); //true
console.log(validMountainArray(arr2)); //false
console.log(validMountainArray(arr3)); //false
console.log(validMountainArray(arr4)); //false
console.log(validMountainArray(arr5)); //false
console.log(validMountainArray(arr6)); //false
console.log(validMountainArray(arr7)); //true

// if (arr.length < 3) {
//   return false;
// }
// let indexFromLeft = 0;
// for (let i = 0; i < arr.length; i++) {
//   const num = arr[i];
//   if (num === arr[i + 1]) {
//     return false;
//   }
//   if (num < arr[i + 1]) {
//     indexFromLeft = i + 1;
//   }
// }
// let indexFromRight = null;
// for (let i = arr.length - 1; i > 0; i--) {
//   const num = arr[i];
//   if (num === arr[i - 1]) {
//     return false;
//   }
//   if (num < arr[i - 1]) {
//     indexFromRight = i - 1;
//   }
//   if (i - 1 === 0 && num < arr[i - 1]) {
//     indexFromRight++;
//   }
// }
// return indexFromLeft === indexFromRight;
