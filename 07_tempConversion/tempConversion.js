const convertToCelsius = function (x) {
  const celsius = (x - 32) * (5 / 9);
  const roundedCelsius = Math.round(celsius * 10) / 10;
  return roundedCelsius

};

const convertToFahrenheit = function (x) {
  const fahrenheit = (x * (9 / 5) + 32);
  const roundedFahrenheit = Math.round(fahrenheit * 10) / 10;
  return roundedFahrenheit;

};

console.log(convertToCelsius(32));
console.log(convertToFahrenheit(0));

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
