export class Matrix {
  constructor(str = '') {
    this.matrix = str.split('\n').map(row => row.split(' ').map(Number))
  }

  get rows() {
    return this.matrix.map(row => [...row])
  }

  get columns() {
    let columnMatrix = []
    for (let i = 0; i < this.matrix[0].length; i++) {
      let column = this.matrix.map(row => row[i])
      columnMatrix.push(column)
    }
    return columnMatrix
  }
}