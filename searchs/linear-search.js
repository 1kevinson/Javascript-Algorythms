function findElement(arr, seekElement, comparatorFn) {
  let index = 0;

  for (const element of arr) {
    //Object case
    if (
      typeof seekElement === "object" &&
      seekElement !== null &&
      comparatorFn(seekElement, element)
    ) {
      return index;
    }

    //Array case
    if (element === seekElement) {
      return index;
    }
    index++;
  }
}

const array = [2, 14, 5, 66, 47, 88, 32, 9];
const objects = [
  { name: "Martin", age: 25 },
  { name: "Sabrine", age: 23 },
  { name: "Kevin", age: 26 },
];

console.log(findElement(array, 66)); // should return 3
console.log(findElement(array, 32)); // should return 6

console.log(
  findElement(objects, { name: "Martin", age: 25 }, (x, y) => {
    return x.name === y.name;
  })
);
