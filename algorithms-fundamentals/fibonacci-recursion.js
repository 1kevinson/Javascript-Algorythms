/**
 * @FIBONACCI_Recursion [1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89]
 */

function fib(n) {
  // Worst solution take FAR LONG time
  if (n === 0 || n === 1) {
    return 1;
  }
  return fib(n - 1) + fib(n - 2);
}

console.log(fib(5));
console.log(fib(4));
