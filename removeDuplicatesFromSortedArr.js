const removeDuplicates = (nums) => {
  for (let i = 0; i < nums.length; i++) {
    const e = nums[i];
    for (let k = 0; k < nums.length; k++) {
      const e2 = nums[k];
      if (e2 === e && i !== k) {
        nums.splice(k, 1);
        k--;
      }
    }
  }
};
let arr1 = [1, 1, 2];
let arr2 = [0, 0, 1, 1, 1, 2, 2, 3, 3, 4];
removeDuplicates(arr1);
removeDuplicates(arr2);
console.log(arr1); // [1,2]
console.log(arr2); // [0,1,2,3,4]
