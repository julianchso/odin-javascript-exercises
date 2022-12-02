const removeFromArray = function (arr, val) {
  let index = arr.indexOf(val);

  arr.splice(index, 1);

  console.log(arr);
  return arr;
};

removeFromArray([1, 2, 3, 4], 3);

// Do not edit below this line
module.exports = removeFromArray;
