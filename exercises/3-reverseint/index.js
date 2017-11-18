// --- Directions
// Given an integer, return an integer that is the reverse
// ordering of numbers.
// --- Examples
//   reverseInt(15) === 51
//   reverseInt(981) === 189
//   reverseInt(500) === 5
//   reverseInt(-15) === -51
//   reverseInt(-90) === -9

function reverseInt(n) {
  // long version
  // const sign = Math.sign(n);
  // const integerStr = n.toString();
  // const reversedIntStr = integerStr.split('').reverse().join('');
  // const integer = parseInt(reversedIntStr);
  // 
  // return integer * sign;
  
  // **RECOMMENDED
  return parseInt(n.toString().split('').reverse().join('')) * Math.sign(n);
}

module.exports = reverseInt;
