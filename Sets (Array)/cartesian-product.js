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

const colors = ["blue", "red", "black"];
const sizes = ["s", "m", "l"];
console.log(cartProduct(colors, sizes));
