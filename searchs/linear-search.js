function findElement(arr, seekElement) {
  let index = 0;

  for (const element of arr) {
    // noinspection EqualityComparisonWithCoercionJS
    if (element == seekElement) {
      return index;
    }
    index++;
  }
}

const array = [2, 14, 5, 66, 47, 88, 32, 9];
console.log(findElement(array, 66)); // should return 3
