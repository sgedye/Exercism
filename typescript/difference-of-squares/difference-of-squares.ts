export default class Squares {
  private n: number;

  public constructor(n: number) {
    this.n = n;
  }

  get squareOfSum(): number {
    const sum = this.n * (this.n + 1) / 2;
    return Math.pow(sum, 2);
  }

  get sumOfSquares(): number {
    return this.n * (this.n + 1) * (2 * this.n + 1) / 6;
  }

  get difference(): number {
    return this.squareOfSum - this.sumOfSquares;
  }
}