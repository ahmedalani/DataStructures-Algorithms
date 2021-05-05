const duplicateZeros = (arr) => {
  for (let i = 0; i < arr.length; i++) {
    const num = arr[i];
    if (num === 0) {
      // 0 in the middle is indicated how many items we want removed,
      // 0 at the end is the item we want to be inserted into the array
      arr.splice(i, 0, 0);
      arr.pop();
      i++;
    }
  }
};

// tests
let arr1 = [1, 0, 2, 3, 0, 4, 5, 0];
console.log("first: ", arr1);
duplicateZeros(arr1);
console.log("second: ", arr1);
