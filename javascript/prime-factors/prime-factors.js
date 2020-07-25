const isPrime = potentialPrime => {
  let isPrime = true;
  let i = 2;
  while (isPrime && i < potentialPrime) {
    if (potentialPrime % i === 0) {
      isPrime = false;
    }
    i++;
  }
  return isPrime;
}

export const primeFactors = number => {
  const primeFactorsList = [];
  let potentialPrime = 2;
  while (number > 1) {
    if (isPrime(potentialPrime)) {
      while (number % potentialPrime === 0) {
        number /= potentialPrime;
        primeFactorsList.push(potentialPrime);
      }
    }
    potentialPrime++;
  };
  return primeFactorsList;
};

