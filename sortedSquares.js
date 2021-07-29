const sortedSquares = function (nums) {
  let result = [];
  for (let i = 0; i < nums.length; i++) {
    const num = nums[i];
    const numSquared = num * num;
    result.push(numSquared);
  }
  return result.sort((a, b) => a - b);
};
