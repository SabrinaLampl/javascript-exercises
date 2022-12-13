const sumAll = function (firstNumber, secondNumber) {
  if (firstNumber < 0 || secondNumber < 0 || isNaN(firstNumber) || isNaN(secondNumber) || Number(firstNumber) !== firstNumber || Number(secondNumber) !== secondNumber) return 'ERROR';
  if (secondNumber < 0) return 'ERROR';


  const start = firstNumber < secondNumber ? firstNumber : secondNumber;
  const end = firstNumber < secondNumber ? secondNumber : firstNumber;
  let sumFromAll = start;
  for (let i = start; i < end; i++) {

    sum = i + 1;
    sumFromAll += sum

  }
  return sumFromAll;
};

console.log(sumAll(1, 4));

// Do not edit below this line
module.exports = sumAll;
