// export default function accumulate(numbers: number[]): number[] {
//   return numbers.map(number => number * number)
// }


class accumulate {
  public static accumulator(arr: Array<string|number>):Array<string|number> {
    return arr.map(x => +x + +x)
  }
}

  // constructor(array: string[] | number[]/*, function accumulator(params:type)*/) {
  //   this.arr = [...array]
  // }
// }