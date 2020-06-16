export const convert = (num) => {
  let output = ''
  if (num % 3 === 0) {
    output += 'Pling'
  }
  if (num % 5 === 0) {
    output += 'Plang'
  }
  if (num % 7 === 0) {
    output += 'Plong'
  }
  if (num % 3 !== 0 && num % 5 !== 0 && num % 7 !== 0) {
    output = num.toString()
  }
  return output
}
