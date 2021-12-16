const greatestCommonDivisor = (num1, num2) => {
  let a = num1;
  let b = num2;
  if (a % b === 0) {
    return b;
  }
  while (b !== 0) {
    if (a > b) {
      a -= b;
    } else {
      b -= a;
    }
  }
  return a;
};

export default greatestCommonDivisor;
