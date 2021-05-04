const sortedSquares = function (nums) {
  let result = [];
  for (let i = 0; i < nums.length; i++) {
    const num = nums[i];
    const numSquared = num * num;
    result.push(numSquared);
  }
  return result.sort((a, b) => a - b);
};
// tests
console.log(sortedSquares([-4, -1, 0, 3, 10])); //[0,1,9,16,100]
console.log(sortedSquares([-7, -3, 2, 3, 11])); //[4,9,9,49,121]
