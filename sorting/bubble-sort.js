/**
 * @Bubble-Sort
 *
 */

function sort(arr) {
  const resultArray = [...arr];

  for (let outer = 0; outer < resultArray.length; outer++) {
    let outerEl = resultArray[outer];
    console.log("OUTER LOOP");
    console.log(outerEl);

    for (let inner = outer + 1; inner < resultArray.length; inner++) {
      let innerEl = resultArray[inner];
      console.log("INNER LOOP");
      console.log("outerEL :" + outerEl);
      console.log("innerEL :" + innerEl);

      if (outerEl > innerEl) {
        console.log("Inside IF");
        //swap values
        resultArray[outer] = innerEl;
        resultArray[inner] = outerEl;
        // replace values
        outerEl = resultArray[outer];
        innerEl = resultArray[inner];
      }
      console.log("END OF INNER LOOP");
      console.log(resultArray);
    }
  }

  return resultArray;
}

//const sortedArray = sort([5, 4, 6, 3, 11, 2, -21, 17, 36]);
const sortedArray = sort([5, 4, 6, 3]);
console.log(sortedArray);
