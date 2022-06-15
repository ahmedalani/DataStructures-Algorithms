// given an integer convert it to roman

const romanToInt = (s) => {
  // loop over given string and get the numaric value for each char
  let result = 0;
  for (let i = 0; i < s.length; i++) {
    const char = s[i];
    const nextChar = s[i + 1];

    switch (char) {
      case "I":
        // I can be placed before V (5) and X (10) to make 4 and 9.
        if (nextChar === "V") {
          i++;
          result += 4;
          break;
        }
        if (nextChar === "X") {
          i++;
          result += 9;
          break;
        }

        result += 1;
        break;

      case "V":
        result += 5;
        break;

      case "X":
        // X can be placed before L (50) and C (100) to make 40 and 90.
        if (nextChar === "L") {
          i++;
          result += 40;
          break;
        }
        if (nextChar === "C") {
          i++;
          result += 90;
          break;
        }

        result += 10;
        break;

      case "L":
        result += 50;
        break;

      case "C":
        // C can be placed before D (500) and M (1000) to make 400 and 900
        if (nextChar === "D") {
          i++;
          result += 400;
          break;
        }
        if (nextChar === "M") {
          i++;
          result += 900;
          break;
        }

        result += 100;
        break;

      case "D":
        result += 500;
        break;

      case "M":
        result += 1000;
        break;

      default:
        console.log("not fount");
        break;
    }
  }

  return result;
};
// tests
console.log(romanToInt("I") === 1 ? "✅" : "❌"); // 1
console.log(romanToInt("II") === 2 ? "✅" : "❌"); // 2
console.log(romanToInt("III") === 3 ? "✅" : "❌"); // 3
console.log(romanToInt("IV") === 4 ? "✅" : "❌"); // 4
console.log(romanToInt("IX") === 9 ? "✅" : "❌"); // 9
console.log(romanToInt("XII") === 12 ? "✅" : "❌"); // 12
console.log(romanToInt("XXVII") === 27 ? "✅" : "❌"); // 27
console.log(romanToInt("XL") === 40 ? "✅" : "❌"); // 40
console.log(romanToInt("LVIII") === 58 ? "✅" : "❌"); // 58
console.log(romanToInt("XC") === 90 ? "✅" : "❌"); // 90
console.log(romanToInt("CD") === 400 ? "✅" : "❌"); // 400
console.log(romanToInt("CM") === 900 ? "✅" : "❌"); // 900
console.log(romanToInt("MCMXCIV") === 1994 ? "✅" : "❌"); // 1994

// another solution found online: slower than my solution above but looks cleaner
var romanToInt2 = function (s) {
  const sym = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
  };

  let result = 0;

  for (i = 0; i < s.length; i++) {
    const cur = sym[s[i]];
    const next = sym[s[i + 1]];

    if (cur < next) {
      result += next - cur; // IV -> 5 - 1 = 4
      i++;
    } else {
      result += cur;
    }
  }

  return result;
};
