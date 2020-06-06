/**
 * @FIBONACCI-Recursion [1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89]
 * @Dynamic-programming
 */

let counter = 0;
const memo = {};

function fib(n, memo) {
  let result;
  counter++;

  if (memo[n]) {
    return memo[n];
  }

  if (n === 0 || n === 1) {
    result = 1;
  } else {
    result = fib(n - 1, memo) + fib(n - 2, memo);
  }

  memo[n] = result;
  return result;
}

console.log(fib(5, memo));
console.log("counter => ", counter);
console.log(memo);
counter = 0;

console.log(fib(20, memo));
console.log("counter => ", counter);
console.log(memo);
counter = 0;

console.log(fib(6, memo));
console.log("counter => ", counter);
console.log(memo);
counter = 0;
