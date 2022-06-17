
const strStr = (haystack, needle) => {
  // return haystack.indexOf(needle) // lol
  
  if (!needle) return 0;

  for (let i = 0; i <= haystack.length - needle.length; i++) {
    if (needle === haystack.substring(i, i + needle.length)) {
      return i;
    }
  }

  return -1;
};

console.log(strStr('hello', 'll'))
console.log(strStr('aaaaaa', 'bba'))