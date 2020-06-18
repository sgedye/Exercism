const chessBoard = [... new Array(64)].map((value, index) => BigInt(Math.pow(2, index)))

export const square = n => {
  if (n > 0 && n <= 64) {
    return chessBoard[n-1].toString()
  } else {
    throw new Error("square must be between 1 and 64")
  }
};

export const total = () => {
  return chessBoard.reduce((acc, curr) => acc + curr)
};
