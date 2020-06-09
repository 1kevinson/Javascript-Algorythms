/**
 * @Cartesian-Product
 *
 */

function cartProduct(setA, setB) {
  const product = [];

  for (const setAEl of setA) {
    for (const setBEl of setB) {
      product.push([setAEl, setBEl]);
    }
  }

  return product;
}

function cartesian(...sets) {
  let tempProduct = sets[0];

  for (const set of sets) {
  }
}

const colors = ["blue", "red"];
const sizes = ["s", "m", "l", "xl"];
const styles = ["round neck", "v neck"];
console.log(cartProduct(colors, sizes));

console.log(cartesian(colors, sizes, styles));
