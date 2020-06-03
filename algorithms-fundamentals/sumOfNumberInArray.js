// Solution  -> (Best way is to built our algorithms-fundamentals instead of use built in function)
function sumNumbers2(arrayOfNumbers) {
  let result = 0;

  for (let i = 0; i < arrayOfNumbers.length; i++) {
    result += arrayOfNumbers[i];
  }
  return result;
}
