const arrayOfNumbers = [14, 5, 88, 9, 66, 35, 12, 26, 4, 7, 74];

function smallest(array) {
  let currentMin = array[0];

  for (const number of array) {
    if (currentMin > number) {
      currentMin = number;
    }
  }

  return currentMin; // 4
}

function isEven(number) {
  return number % 2 === 0;
}

console.log(smallest(arrayOfNumbers));
console.log(isEven(13));
console.log(isEven(2));
console.log(isEven(25));
