export const compute = (left, right) => {
  if (left.length === 0 && right.length !== 0) {
    throw new Error("left strand must not be empty")
  } else if (right.length === 0 && left.length !== 0) {
    throw new Error("right strand must not be empty")
  } else if (left.length !== right.length) {
    throw new Error("left and right strands must be of equal length")
  }
  let count = 0
  for (let i=0; i<left.length; i++) {
    if (left[i] !== right[i]) {
      count++
    }
  }
  return count
}