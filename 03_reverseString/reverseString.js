const reverseString = function(string) {
const splitString = string.split('');
const reverseSplitString = splitString.reverse ();
const joinReverseSplitString = reverseSplitString.join('');
return joinReverseSplitString;
};

console.log (reverseString('hello there'))

// Do not edit below this line
module.exports = reverseString;
