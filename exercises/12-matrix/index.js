// --- Directions
// Write a function that accepts an integer N
// and returns a NxN spiral matrix.
// --- Examples
//   matrix(2)
//     [[1, 2],
//     [4, 3]]
//   matrix(3)
//     [[1, 2, 3],
//     [8, 9, 4],
//     [7, 6, 5]]
//  matrix(4)
//     [[1,   2,  3, 4],
//     [12, 13, 14, 5],
//     [11, 16, 15, 6],
//     [10,  9,  8, 7]]

function matrix(n) {
  let results = [];
  
  for (let i = 0; i < n; i++) {
    results.push([]);
  }
  
  let counter = 1;
  let start_column = 0;
  let end_column = n - 1; 
  let start_row = 0;
  let end_row = n - 1;
    
  while (start_column <= end_column && start_row <= end_row) {
    // top row
    for (let col = start_column; col <= end_column; col++) {
      results[start_row][col] = counter;
      counter++;
    }
    start_row++;
    // right column
    for (let row = start_row; row <= end_row; row++) {
      results[row][end_column] = counter;
      counter++;
    }
    end_column--;
    // bottom row
    for (let col = end_column; col >= start_column; col--) {
      results[end_row][col] = counter;
      counter++;
    }
    end_row--;
    // left column
    for (let row = end_row; row >= start_row; row--) {
      results[row][start_column] = counter;
      counter++;
    }
    start_column++;
  }
  
  return results;
}

module.exports = matrix;
