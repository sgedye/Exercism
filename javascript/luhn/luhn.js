export const valid = creditString => {
  let creditArray = creditString.replace(/\s/g, '').split('')
  if (creditArray.length <= 1) return false
  for (let i=creditArray.length-2; i>=0; i=i-2) {
    creditArray[i] = Number(creditArray[i]) * 2
    if (creditArray[i] > 9) {
      creditArray[i] -= 9
    }
  }
  let checkSum = creditArray.reduce((acc, value) => acc + Number(value), 0)
  return (checkSum % 10 === 0)
}
