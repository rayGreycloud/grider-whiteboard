// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a pyramid shape
// with N levels using the # character.  Make sure the
// pyramid has spaces on both the left *and* right hand sides
// --- Examples
//   pyramid(1)
//       '#'
//   pyramid(2)
//       ' # '
//       '###'
//   pyramid(3)
//       '  #  '
//       ' ### '
//       '#####'

function pyramid(n) {
  // calculate number of columns for N levels
  const totalColumns = 2 * n - 1;
  // calculate index of midpoint of level 
  const midpoint = Math.floor(totalColumns / 2);
      
  // iterate thru rows
  for (let row = 0; row < n; row++) {
    // initialize level string
    let level = '';
    // determine start/end indexes for pyramid on this level 
    let leftmost = midpoint - row;
    let rightmost = midpoint + row;
    
    // iterate thru columns of level
    for (let column = 0; column < totalColumns ; column++) {
      // determine if column is within pyramid indexes
      if (leftmost <= column && rightmost >= column) {
        // add '#' to level string
        level += '#';
      } else {
        // add ' ' to level string 
        level += ' ';
      }
    }
    // level complete - print it
    console.log(level);
  }  
}

module.exports = pyramid;
