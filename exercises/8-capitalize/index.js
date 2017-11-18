// --- Directions
// Write a function that accepts a string.  The function should
// capitalize the first letter of each word in the string then
// return the capitalized string.
// --- Examples
//   capitalize('a short sentence') --> 'A Short Sentence'
//   capitalize('a lazy fox') --> 'A Lazy Fox'
//   capitalize('look, it is working!') --> 'Look, It Is Working!'

// My refactor of instructor's solution #2
// Eliminates accessing string like array 
// Warned against by WC3
function capitalize(str) {
  let result = str.charAt(0).toUpperCase();

  for (let i = 1; i < str.length; i++) {
    if (str.charAt(i - 1) === ' ') {
      result += str.charAt(i).toUpperCase();
    } else {
      result += str.charAt(i);
    }
  }
  
  return result;
}
 
// Instructor's solution #2
// function capitalize(str) {
//   let result = str.charAt(0).toUpperCase();
// 
//   for (let i = 1; i < str.length; i++) {
//     if (str[i - 1] === ' ') {
//       result += str[i].toUpperCase();
//     } else {
//       result += str[i];
//     }
//   }
// 
//   return result;
// }
 
// Instructor's solution #1 **RECOMMENDED
// function capitalize(str) {
//   const words = [];
// 
//   for (let word of str.split(' ')) {
//     words.push(word[0].toUpperCase() + word.slice(1));
//   }
// 
//   return words.join(' ');
// }
 
// My solution
// function capitalize(str) {
//   const words = [];  
//   const array = str.split(' ');
// 
//   for (let index in array) {
//     let capitalized = array[index].slice(0, 1)
//       .toUpperCase()
//       .concat(array[index].slice(1));
// 
//     words.push(capitalized);
//   }
// 
//   return words.join(' ');
// }

module.exports = capitalize;
