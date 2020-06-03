/*
 * SUM THE VALUES OF AN ARRAY
 * */

// Solution 1 -> (Using built in function not improve time complexity)
function sumNumbers(arrayOfNumbers) {
  return arrayOfNumbers.reduce((a, b) => a + b, 0);
}

// Solution 2 -> (Best way is to built our algorithms)
function sumNumbers2(arrayOfNumbers) {
  let result = 0;

  for (let i = 0; i < arrayOfNumbers.length; i++) {
    result += arrayOfNumbers[i];
  }
  return result;
}

const array = [2, 11, 4, 2, 3, 4, 5, 87, 5];

/*
let start = performance.now();
sumNumbers([1, 10, 4]);
let stop = performance.now();
console.log(stop - start);*/

console.log(sumNumbers(array));
