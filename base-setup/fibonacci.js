/**
 * @FIBONACCI [1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89]
 */

function fib(x) {
  const suite = [1, 1];

  for (let i = 2; i < x + 1; i++) {
    suite.push(suite[i - 2] + suite[i - 1]);
  }

  console.log(suite);
  return suite[x];
}

console.log(fib(4));
console.log(fib(10));
