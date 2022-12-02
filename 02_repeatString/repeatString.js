const repeatString = function (str, n) {
  let repeatStr = "";
  if (n < 0) {
    return "ERROR"
  }

  for (let i = 0; i < n; i++) {
    repeatStr += str;
  }
  return repeatStr;
};

console.log(repeatString("testing", 0))
console.log(repeatString("hey", 10))
console.log(repeatString("hey", 1))
console.log(repeatString("hey", 3))

// Do not edit below this line
module.exports = repeatString;
