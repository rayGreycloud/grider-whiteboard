// --- Directions
// Print out the n-th entry in the fibonacci series.
// The fibonacci series is an ordering of numbers where
// each number is the sum of the preceeding two.
// For example, the sequence
//  [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]
// forms the first ten entries of the fibonacci series.
// Example:
//   fib(4) === 3

// Memoizer function
function memoize(fn) {
  // initialize cache
  const cache = {};
  // spread arguments 
  return function(...args) {
    // check cache for prior call with same arguments
    if (cache[args]) {
      // if found, return prior result
      return cache[args];
    }
    // otherwise call fn with context and args
    const result = fn.apply(this, args);
    // store the result in cache object
    cache[args] = result;
    // return result
    return result;
  };
}

function fib(n) {
  if (n < 2) { return n; }

  let currentEntry = n - 1;
  let preceedingEntry = n - 2;

  return fib(currentEntry) + fib(preceedingEntry);
}

fib = memoize(fib);

module.exports = fib;

// Iterative solution
// function fib(n) {
//   const result = [0, 1];
// 
//   for (i = 2; i <= n; i++) {
//     const a = result[i - 1];
//     const b = result[i - 2];
// 
//     result.push(a + b);
//   }
// 
//   return result[n];
// }

