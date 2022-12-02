const reverseString = function (string) {
  let letters = string.split("");

  let stringReversed = "";

  for (i = letters.length - 1; i >= 0; i--) {
    stringReversed += letters[i];
  }
  console.log(stringReversed);
  return stringReversed;
};

reverseString("hello");

// Do not edit below this line
module.exports = reverseString;
