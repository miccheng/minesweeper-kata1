export default class Cell {
  constructor(col, row, hasBomb = false) {
    this.col = col
    this.row = row
    this.hasBomb = hasBomb
    this.surroundingBombs = 0
  }

  addBombCount() {
    this.surroundingBombs++
  }
}