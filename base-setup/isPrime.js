/**
 * @ISPRIME Check if number entered is prime number
 */

// TIME COMPLEXITY VALUES

/**
 *  @CONSTANT  O(1).                 ----  Best
 *
 *  @LINEAR     O(n)                 ----  Average
 *
 *  @QUADRATIC  Θ(nk), where k ≥ 2   ----  Worst
 *
 * */

// First solution
function isPrime(number) {
  let result = false;
  const arrayOfResult = [];

  for (let i = 1; i <= number; i++) {
    let divider = number / i;
    if (Number.isInteger(divider)) {
      arrayOfResult.push("int");
    } else {
      arrayOfResult.push("notInt");
    }
  }

  const filterResult = arrayOfResult.filter((word) => word === "int");
  if (filterResult.length === 2) {
    result = true;
  }

  return result;
}

// Second Solution
function isPrime2(number) {
  for (let i = 2; i < Math.sqrt(number); i++) {
    if (number % i === 0) {
      return false;
    }
  }
  return true;
}

// Best case: number = 1 OR number = 2 => O(1)
// Average Case: O(n)
// Worst Case: number = 27,77 => 0(n) (Improved: 0(sqrt(n)))

let start = performance.now();
isPrime2(37); // Take lower time
let end = performance.now();
console.log(end - start);

start = performance.now();
isPrime(37); // Take more time, because of more loop and built in function
end = performance.now();
console.log(end - start);

console.log(isPrime(13)); // true
console.log(isPrime(22)); // false

/*
Complexity
**********
_____________________________
Θ(1)	            Good news
Θ(log n)
Θ(n)
Θ(n log n)

_____________________________
Θ(nk), where k ≥ 2	Bad news
Θ(kn), where k ≥ 2
Θ(n!)*/
