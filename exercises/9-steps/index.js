// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a step shape
// with N levels using the # character.  Make sure the
// step has spaces on the right hand side!
// --- Examples
//   steps(2)
//       '# '
//       '##'
//   steps(3)
//       '#  '
//       '## '
//       '###'
//   steps(4)
//       '#   '
//       '##  '
//       '### '
//       '####'

// Recursive solution 
// Add needed info and default values for recursive call 
function steps(n, row = 0, stair = '') {
  // base case - end function
  if (n === row) { return; }
  
  // if reached end of stair, print it
  if (n === stair.length) {
    console.log(stair);
    // call stair with incremented row
    // starting new stair so default value for stair
    steps(n, row + 1);
    return;
  }
  
  if (stair.length <= row) {
    stair += '#';
  } else {
    stair += ' ';
  }
  // Continue row, pass in current stair
  steps(n, row, stair);
}

// RECOMMENDED
// function steps(n) {
// 
//   for (let row = 0; row < n; row++) {
//     let stair = '';
// 
//     for (let col = 0; col < n; col++) {
//       if (col <= row) {
//         stair += '#';
//       } else {
//         stair += ' ';
//       }
//     }
// 
//     console.log(stair);
//   }
// }

module.exports = steps;
