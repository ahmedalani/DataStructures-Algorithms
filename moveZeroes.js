const moveZeroes = (nums) => {
  let count = 0;
  for (let i = 0; i < nums.length; i++) {
    const element = nums[i];
    count++;
    if (element === 0) {
      nums.splice(i, 1);
      nums.push(0);
      i--;
    }
    if (count >= nums.length) return nums;
  }
  return nums;
};

//tests:
let arr1 = [0, 1, 0, 3, 12];
let arr2 = [0];
let arr3 = [0, 0, 1];
console.log(moveZeroes(arr1)); //[1,3,12,0,0]
console.log(moveZeroes(arr2)); //[0]
console.log(moveZeroes(arr3)); //[1,0,0]
