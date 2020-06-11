/**
 * @PROGRAM : Factorial
 * @Author: Arsene Kevin
 *
 */

function factorial(nbr) {
  let res = 1;

  for (let i = 2; i <= nbr; i++) {
    res *= i;
  }

  return res;
}

console.log("Final result", factorial(5));
