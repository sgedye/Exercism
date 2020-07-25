export const classify = number => {
  if (number < 1) {
    throw new Error("Classification is only possible for natural numbers.");
  }
  let aliquotSum = 0;
  for (let i=1; i<number; i++) {
    if (number % i === 0) {
      aliquotSum += i;
    }
  }
  return aliquotSum === number
    ? 'perfect'
    : aliquotSum > number ? 'abundant' : 'deficient'
};