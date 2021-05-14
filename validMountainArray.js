const validMountainArray = (arr) => {
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
  //     // console.log("yo from the sis");
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
  //   if (i - 1 === 0) {
  //     return false;
  //   }
  // }
  // // console.log("check: ", indexFromLeft, indexFromRight);
  // return indexFromLeft === indexFromRight;
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
