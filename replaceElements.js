const replaceElements = (arr) => {
  let newArr = [];
  newArr[arr.length - 1] = -1;
  // loop over arry from the right side copare 2 itmes at a time and put biggest one in newArr
  for (let i = arr.length - 2; i >= 0; i--) {
    newArr[i] = Math.max(newArr[i + 1], arr[i + 1]);
  }
  return newArr;
};

console.log(replaceElements([17, 18, 5, 4, 6, 1])); // [18,6,6,6,1,-1]
