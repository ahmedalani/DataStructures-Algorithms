const sortArrayByParity = (nums) => {
  nums.sort((a, b) => {
    return (a % 2) - (b % 2) || a - b;
  });
  return nums;
};

//Tests
let arr1 = [3, 1, 2, 4];

console.log(sortArrayByParity(arr1)); // [2,4,3,1]
