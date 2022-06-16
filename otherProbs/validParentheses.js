// valid input string is:
// 1- open brackets must be closed by the same type of brackets
// 2- open brackets must be closed in the correct order

const isValid = (s) => {
  const openPar = [];

  for (let i = 0; i < s.length; i++) {
    const e = s[i];
    // if it's open parentheses push to array and skip to next element
    if (e === "(" || e === "{" || e === "[") {
      openPar.push(e);
      continue;
    }
    // if it's closed parentheses check if there is an open match in correct order if so
    // delete the open from the array otherwise exit loop and return false
    switch (e) {
      case ')':
        if (openPar[openPar.length - 1] === "(") {
          openPar.pop();
        } else return false;        
        break;
      case '}':
        if (openPar[openPar.length - 1] === "{") {
          openPar.pop();
        } else return false;
        break;
      case ']':
        if (openPar[openPar.length - 1] === "[") {
          openPar.pop();
        } else return false;
        break;

    }
  }

  return openPar.length === 0;
};

// tests:
console.log(isValid("()")); // true
console.log(isValid("()[]{}")); // true
console.log(isValid("{[]}")); // true
console.log(isValid("(]")); // false
console.log(isValid(")(){}")); // false
console.log(isValid("(])")); // false
