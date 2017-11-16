// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

function reverse(str) {
  // initial verbose version
  // const splitString = str.split('');
  // const reversedSplitString = splitString.reverse();
  // const reversedString = reversedSplitString.join('');
  // return reversedString;
  
  return str.split('').reverse().join('');
}

function esrever(str) {
  let reversed = '';
  
  for (let character of str) {
    reversed = character + reversed;
  }
  
  return reversed;
}

module.exports = { reverse, esrever };
