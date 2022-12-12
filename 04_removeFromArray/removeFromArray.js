const removeOneFromArray = function (arr, value) {
  let array = arr;
  for (let i = 0; i < array.length; i++) {
    if (array[i] === value) {
      array.splice(i, 1);
    }
  }

  return array;
};



const removeFromArray = function (arr, value, ...manyMoreArgs) {
  let array = removeOneFromArray(arr, value);
  for (const item of manyMoreArgs) {
    array = removeOneFromArray(array, item);
  }

  return array;
};
console.log(removeFromArray([1, 2, 3, 4], 3, 2))
// Do not edit below this line
module.exports = removeFromArray;
