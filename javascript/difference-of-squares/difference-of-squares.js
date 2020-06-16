export class Squares {
  constructor(n = 0) {
    this.numberArray = []
    for (let i=1; i<=n; i++) {
      this.numberArray.push(i)
    }
  }

  get sumOfSquares() {
    return this.numberArray.reduce((accumulator, currentValue) => {
      return accumulator += Math.pow(currentValue, 2)
    })
  }

  get squareOfSum() {
    let sum = this.numberArray.reduce((accumulator, currentValue) => {
      return accumulator += currentValue
    })
    return Math.pow(sum, 2)
  }

  get difference() {
    return this.squareOfSum - this.sumOfSquares
  }
}
