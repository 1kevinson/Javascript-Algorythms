// FIRST SOLUTION
function factorial(number) {
  if (number < 0) {
    throw new Error("Cannot proceed the factorial");
  }

  let fctNumber = number;
  let arrayOfFactorial = [];
  let result = 1;
  while (fctNumber > 0) {
    arrayOfFactorial.push(fctNumber);
    fctNumber--;
  }

  for (let i = 0; i < arrayOfFactorial.length; i++) {
    result *= arrayOfFactorial[i];
  }

  return result;
}

//SECOND SOLUTION
function factorial2(number) {
  if (number < 0) {
    throw new Error("Cannot proceed the factorial");
  }

  let res = 1;
  for (let i = 2; i <= number; i++) {
    res *= i;
  }
  return res;
}

console.log(factorial(5));
console.log(factorial2(4));
console.log(factorial2(3));
