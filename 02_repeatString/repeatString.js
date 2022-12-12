const repeatString = function (string, num) {
  if (num < 0) return 'ERROR';
  let word = '';
  for (let i = 0; i < num; i++) {
     word += string

  }
  return word;

};

console.log(repeatString('hey', 3));


// Do not edit below this line
module.exports = repeatString;
