var findMaxConsecutiveOnes = function (nums) {
  let result = 0;
  let counter = 0;
  for (let i = 0; i < nums.length; i++) {
    const num = nums[i];
    if (num === 1) {
      counter++;
    }
    if (num === 0 || i === nums.length - 1) {
      if (counter > result) {
        result = counter;
      }
      counter = 0;
    }
  }
  return result;
};
// tests
let arr1 = [1, 0, 1, 1, 0, 1]; //2
let arr2 = [1, 1, 0, 1, 1, 1]; //3
let arr3 = [0]; //0
let arr4 = [1]; //1

console.log(findMaxConsecutiveOnes(arr1));
console.log(findMaxConsecutiveOnes(arr2));
console.log(findMaxConsecutiveOnes(arr3));
console.log(findMaxConsecutiveOnes(arr4));
