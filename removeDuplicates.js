// removes duplicates itmes in given array, returns arr.length
const removeDuplicates = (nums) => {
  // first loop over array takes each item then second loop to delete duplicates
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

// tests
const arr1 = [1, 1, 2];
removeDuplicates(arr1);
console.log("arr1: ", arr1); //arr1 = [1,2]

const arr2 = [0, 0, 1, 1, 1, 2, 2, 3, 3, 4];
removeDuplicates(arr2);
console.log("arr2: ", arr2); //arr2 = [0,1,2,3,4]

const arr3 = [0, 0, 0, 0, 0];
removeDuplicates(arr3);
console.log("arr3: ", arr3); //arr3 = [0]
