// --- Directions
// Write a function that returns the number of vowels
// used in a string.  Vowels are the characters 'a', 'e'
// 'i', 'o', and 'u'.
// --- Examples
//   vowels('Hi There!') --> 3
//   vowels('Why do you ask?') --> 4
//   vowels('Why?') --> 0

// Instructor's solution #1
function vowels(str) {
  let count = 0;
  const vowelsList = ['a', 'e', 'i', 'o', 'u'];
  
  for (let char of str.toLowerCase()) {
    if (vowelsList.includes(char)) {
      count++;
    }
  }
  
  return count;
}

// my solution (and instructor's #2)
// function vowels(str) {
//   const pattern = /[aeiou]/ig;
//   const matches = str.match(pattern);
// 
//   return matches != null ? matches.length : 0;
// }

module.exports = vowels;
