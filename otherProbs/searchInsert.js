const searchInsert = (nums, target) => {
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] >= target) return i;
  }
  return nums.length;
};

// tests
const nums1 = [1, 3, 5, 6];
console.log(searchInsert(nums1, 5)); // 2
console.log(searchInsert(nums1, 2)); // 1
console.log(searchInsert(nums1, 7)); // 4
console.log(searchInsert(nums1, 0)); // 0


// binary Search
/**

 let left = 0, right = nums.length
 while(left < right) {
   const mid = left + Math.floor((right - left) / 2)
   if(nums[mid]===target) {
     return mid
    } else if(nums[mid] > target){
      right = mid
    } else {
      left = mid + 1
    }
  }
  return left
*/