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

  setMineStatus(newStatus) {
    this.hasBomb = newStatus
  }

  displayChar() {
    if (this.hasBomb) {
      return '*'
    } else if (this.surroundingBombs > 0) {
      return `${this.surroundingBombs}`
    } else {
      return '.'
    }
  }
}