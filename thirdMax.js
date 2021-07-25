const thirdMax = (nums) => {
  let counter = 0;
  const sortedNums = [...nums].sort((a, b) => a - b);

  for (let i = sortedNums.length - 1; i >= 0; i--) {
    counter++;
    const element = sortedNums[i];
    if (element === sortedNums[i - 1]) {
      counter--;
    }
    if (counter === 3) {
      return element;
    }
  }
  return sortedNums[sortedNums.length - 1];
};

//Test
const arr1 = [3, 2, 1];
const arr2 = [1, 2];
const arr3 = [2, 2, 3, 1];
const arr4 = [5, 2, 2];

console.log(thirdMax(arr1)); //1
console.log(thirdMax(arr2)); //2
console.log(thirdMax(arr3)); //1
console.log(thirdMax(arr4)); //5
