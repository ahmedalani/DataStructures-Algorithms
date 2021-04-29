const findNumbers = (nums) => {
  let result = 0;
  for (let i = 0; i < nums.length; i++) {
    const num = nums[i];
    if (num.toString().length % 2 === 0) {
      result++;
    }
  }
  return result;
};

// Test
const arr1 = [12, 345, 2, 6, 7896]; // expected output 2

console.log(findNumbers(arr1));
