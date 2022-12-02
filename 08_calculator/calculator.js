const add = function (firstNum, secondNum) {
  return firstNum + secondNum;
};

const subtract = function (firstNum, secondNum) {
  return firstNum - secondNum;
};

const sum = function (array) {
  let total = 0;

  array.forEach((num) => {
    total += num;
  });
  return total;
};

const multiply = function (array) {
  let total = 1;

  array.forEach((num) => {
    total *= num;
  });
  return total;
};

const power = function (firstNum, secondNum) {
  return firstNum ** secondNum;
};

const factorial = function (num) {
  if (num == 0) {
    return 1;
  }
  let total = 1;

  for (let i = num; i > 0; i--) {
    console.log(i);
    total *= i;
  }
  console.log(total);
  return total;
};

factorial(2);
factorial(5);
factorial(10);

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial,
};
