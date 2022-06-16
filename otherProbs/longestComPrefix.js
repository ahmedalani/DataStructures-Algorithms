// find longest commont prefix in array of string words

const longestCommonPrefix = (strs = []) => {
  let prefix = "";

  if (!strs.length) return prefix;

  for (let i = 0; i < strs[0].length; i++) {
    const ltr = strs[0][i];

    for (let k = 1; k < strs.length; k++) {
      const word = strs[k];

      if (ltr !== word[i]) return prefix;
    }

    prefix = prefix + ltr;
  }
  return prefix;
};

// Tests
const test1 = ["flower", "flow", "floight"];
const test2 = ["dog", "racecar", "car"];
const test3 = [""];
console.log(longestCommonPrefix(test1)); // flo
console.log(longestCommonPrefix(test2)); // ''
console.log(longestCommonPrefix(test3)); // ''
