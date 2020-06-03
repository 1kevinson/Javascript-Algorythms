function isPowerOfTwo(nbr) {
  if (nbr <= 1) {
    return false;
  }

  let divider = nbr;
  while (divider !== 1) {
    if (divider % 2 !== 0) {
      return false;
    }
    divider /= 2;
  }
  return true;
}

console.log(isPowerOfTwo(5));
console.log(isPowerOfTwo(14));
console.log(isPowerOfTwo(32));
