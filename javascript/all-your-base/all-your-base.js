const getDecimal = (numberArr, fromBase) => {
  let position = 1
  let decimalNumber = 0
  numberArr.reverse().forEach(digit => {
    digit *= position
    decimalNumber += digit
    position *= fromBase
  })
  return decimalNumber
}

const getNewBase = (decimalNumber, base) => {
  let count = 0
  let outputArray = []
  while (decimalNumber > 0) {
    // console.log("dec", decimalNumber, "count", count, 'base', base)
    if (decimalNumber === Math.pow(base, count)) {
      outputArray.unshift(1)
      decimalNumber -= Math.pow(base, count)
    } else {
      outputArray.unshift(decimalNumber % Math.pow(base, count + 1))
      // outputArray.unshift(decimalNumber % Math.pow(base, count + 1))
      decimalNumber -= Math.pow(base, count) * outputArray[0]
    }
    count++
  }
  return outputArray
}

export const convert = (numberArr, fromBase, toBase) => {
  let decimal = getDecimal(numberArr, fromBase)
  console.log(decimal)
  let x = getNewBase(decimal, toBase)
  console.log(x)
  return x
}