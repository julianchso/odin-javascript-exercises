const sumAll = function (firstNum, lastNum) {
  if (typeof firstNum != "number" || typeof lastNum != "number") return "ERROR";
  if (firstNum < 0 || lastNum < 0) return "ERROR";
  
  let sum = 0;

  if (firstNum > lastNum) {
    let temp = firstNum;
    firstNum = lastNum;
    lastNum = temp;
  }

  for (let i = firstNum; i <= lastNum; i++) {
    sum += i;
  }
  return sum;
};

sumAll(4, 1);

// Do not edit below this line
module.exports = sumAll;
