const removeElement = (nums, val) => {
  for (let i = 0; i < nums.length; i++) {
    const e = nums[i];
    if (e === val) {
      nums.splice(i, 1);
      i--;
    }
  }
  return nums.length;
};

// tests
let arr1 = [3, 2, 2, 3];
let value1 = 3;
console.log(removeElement(arr1, value1));

const arr2 = [0, 1, 2, 2, 3, 0, 4, 2];
const value2 = 2;
console.log(removeElement(arr2, value2), arr2);

// nums.filter((element, i) => {
//   return element > val || element < val;
// });
