export default class ArmstrongNumbers {
  public static isArmstrongNumber (n: number): boolean {
    const length = n.toString().length
    const total = n.toString().split('').reduce((acc, curr) => acc + Math.pow(Number(curr), length), 0)
    return (n === total)
  }
}