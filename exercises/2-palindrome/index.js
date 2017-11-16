// --- Directions
// Given a string, return true if the string is a palindrome
// or false if it is not.  Palindromes are strings that
// form the same word if it is reversed. *Do* include spaces
// and punctuation in determining if the string is a palindrome.
// --- Examples:
//   palindrome("abba") === true
//   palindrome("abcdefg") === false

// initial solution
// function palindrome(str) {
//   return str === str.split('').reverse().join('');  
// }

// Refactored solution
const palindrome = str => str === str.split('').reverse().join('');

// grider's alternate but not best solution
// function palindrome(str) {
//   return str.split('').every((char, i) => {
//     return char === str[str.length - 1 - i];
//   });
// }

module.exports = palindrome;
