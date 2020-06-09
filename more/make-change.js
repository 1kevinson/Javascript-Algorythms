/**
 * @MAKE-CHANGE
 */

function computeChange(coins, amount) {
  let remainingAmount = amount;

  const calculatedChange = {
    selectedCoins: {},
    numberOfCoins: 0,
  };

  for (const coin of coins) {
    // Count each coin related to to the amount
    const count = Math.floor(remainingAmount / coin);
    // Nested with 'selectedCoins'
    calculatedChange[coin] = count;
    // Increment number of coins
    calculatedChange.numberOfCoins += count;
    // Get the remaining amount
    remainingAmount = remainingAmount - coin * count;
  }

  return calculatedChange;
}

// Number of coins depends of order of array
const availableCoins = [100, 50, 20, 10, 5, 2, 1];
const targetAmount = 129;

const change = computeChange(availableCoins, targetAmount);

// Result depends on order of array
console.log(change);
