const getRandomNumber = (minimum, maximum) => {
  const min = Math.ceil(minimum);
  const max = Math.floor(maximum);
  return Math.floor(Math.random() * (max - min + 1)) + min;
};
  // get random number from min to max (includes)

export default getRandomNumber;
