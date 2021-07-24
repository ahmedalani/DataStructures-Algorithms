const heightChecker = (heights) => {
  let output = 0;
  const expected = [...heights].sort((a, b) => a - b);
  heights.forEach((e, i) => {
    if (e !== expected[i]) {
      output++;
    }
  });
  return output;
};

//Test
const arr1 = [1, 1, 4, 2, 1, 3];
const arr2 = [5, 1, 2, 3, 4];
const arr3 = [1, 2, 3, 4, 5];
const arr4 = [
  10, 6, 6, 10, 10, 9, 8, 8, 3, 3, 8, 2, 1, 5, 1, 9, 5, 2, 7, 4, 7, 7,
];

console.log(heightChecker(arr1)); //3
console.log(heightChecker(arr2)); //5
console.log(heightChecker(arr3)); //0
console.log(heightChecker(arr4)); //22
