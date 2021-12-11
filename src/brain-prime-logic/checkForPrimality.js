const primality = (number) => {
  for (let j = 2; j < number; j += 1) {
    if (number % j === 0) return false;
  }
  return number > 1;
};

export default primality;
