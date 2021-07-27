const findDisappearedNumbers = (nums) => {
  let result = [];
  const sortedNums = [...nums].sort((a, b) => a - b);
  const sortedNumsNoDuplicates = [...new Set(sortedNums)];
  let counter = 1;
  for (let i = 0; i < nums.length; i++) {
    const element = sortedNumsNoDuplicates[i];

    if (element !== counter && counter <= nums.length) {
      result.push(counter);
      i--;
    }
    counter++;
  }
  return result;
};

// Tests
let arr1 = [4, 3, 2, 7, 8, 2, 3, 1];
let arr2 = [1, 1];
console.log(findDisappearedNumbers(arr1)); // [5,6]
console.log(findDisappearedNumbers(arr2)); // [2]
