const maxSubarry = (nums = []) => {
  let results = nums[0];
  let cache = [...nums]
  // console.log('cache: ', cache)
  for (let i = 1; i < cache.length; i++) {
    cache[i] = Math.max(cache[i], cache[i] + cache[i-1]);
    // console.log(nums[i]);
    results = Math.max(results, cache[i])
  }

  return results;
};

// tests
console.log(maxSubarry([-2,1,-3,4,-1,2,1,-5,4])) // 6
console.log(maxSubarry([1])) // 1
console.log(maxSubarry([5,4,-1,7,8])) // 23