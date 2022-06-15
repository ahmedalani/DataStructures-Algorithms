// given an integer x return true if int is palindrome 
// palindrome int reads the same backwards ex: 121 = true ; 123 = false

const isPalindrome = function(x) {
  if (isNaN(x)) {
    return false;
  }
  const reverseX = x.toString().split('').reverse().join('');
  return x === Number(reverseX);
};


// console.log(isPalindrome('a')) // enter valid num
console.log(isPalindrome(121)) // true
console.log(isPalindrome(123)) // false
console.log(isPalindrome(-121)) // false