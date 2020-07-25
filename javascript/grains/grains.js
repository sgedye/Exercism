const numSquares = 64;

export const square = n => {
  if (n > 0 && n <= numSquares) {
    return BigInt(Math.pow(2,[n-1])).toString();
  } else {
    throw new Error(`square must be between 1 and ${numSquares}`);
  }
};

export const total = () => {
  return BigInt(Math.pow(2, numSquares)) - 1n;
};
