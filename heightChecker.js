const heightChecker = (heights) => {
  return heights;
};

//Test
const arr1 = [1, 1, 4, 2, 1, 3];
const arr2 = [5, 1, 2, 3, 4];
const arr3 = [1, 2, 3, 4, 5];

console.log(heightChecker(arr1)); //3
console.log(heightChecker(arr2)); //5
console.log(heightChecker(arr3)); //0
