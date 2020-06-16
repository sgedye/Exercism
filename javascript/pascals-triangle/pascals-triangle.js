export const rows = n => {
  if (n < 1) return []
  const output = [[1]]
  for (let i=1; i<n; i++) {
    const tempArr = []
    tempArr.push(1)
    for (let j=1; j<i; j++) {
      tempArr.push(output[i-1][j-1] + output[i-1][j])
    }
    tempArr.push(1)
    output.push(tempArr)
  }
  return output
}