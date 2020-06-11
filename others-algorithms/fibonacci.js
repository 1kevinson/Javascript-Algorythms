/**
 * @PROGRAM : Fibonacci
 * @Author: Arsene Kevin
 *
 */

function fibonacci(number) {
  let result = [1, 1];

  for (let i = 2; i < number + 1; i++) {
    result.push(result[i - 2] + result[i - 1]);
  }

  return result;
}

console.log(fibonacci(12));
