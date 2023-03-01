/**
 * Javascript Functions
 * Visualized
 */
function calculateBill (meal, taxRate = 0.05) {
  let total;
  total = meal * (1 + taxRate);
  return total;
}

const myTotal = calculateBill(100, 0.13);