function factorial(number) {
  if (number === 1) {
    return 1;
  }
  // Time complexity O(n)
  return number * factorial(number - 1);
}

// Logs
console.log(factorial(5));
// 5 * 4 * 3 * 2 * 1

/*
 * Call a function from inside that same function is a recursion
 * */
