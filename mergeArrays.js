// takes 2 intiger arrays and returns the first array merged with second and sorted
const mergeArrays = (arr1, n1, arr2, n2) => {
  // index for locating items from second array
  let i2 = 0;
  // loop over first array starting at n1 (last intiger)
  for (let i = n1; i < arr1.length; i++) {
    // identifing the zero to be replaced with array 2 intigers
    const e1 = arr1[i];
    // making sure it's a zero
    if (e1 === 0) {
      // change the zero to array 2 intiger
      arr1[i] = arr2[i2];
      // increment index 2 to locate the next intiger in array 2 on the next loop
      i2++;
    }
  }
  // sort the first array after the merger and returns it
  return arr1.sort((a, b) => a - b);
};

// tests
let nums1 = [1, 2, 3, 0, 0, 0];
let m = 3;
let nums2 = [2, 5, 6];
let n = 3;

console.log(mergeArrays(nums1, m, nums2, n)); // [1,2,2,3,5,6]
