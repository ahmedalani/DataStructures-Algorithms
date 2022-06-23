const lengthOfLastWrod = (str) => {
  let results = 0;
  let cacheStr = str.trim();

  for (let i = cacheStr.length - 1; i >= 0; i--) {
    const char = cacheStr[i];
    if (char === " ") {
      return results;
    }
    results++;
  }

  return results;
};

// tests
console.log(lengthOfLastWrod('Hello World')) // 5
console.log(lengthOfLastWrod("   fly me   to   the moon  ")); // 4
console.log(lengthOfLastWrod('luffy is still joyboy')) // 6
