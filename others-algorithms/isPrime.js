/**
 * @PROGRAM : Primary test
 * @Author: Arsene Kevin
 *
 */

function isPrime(number) {
  for (let i = 2; i < number; i++) {
    if (number % i === 0) {
      return "composite";
    }
  }

  return "prime";
}

console.log(isPrime(5));
console.log(isPrime(6));
