import Cell from './cell'

export default class Minesweeper {
  constructor(cols, rows) {
    this.cols = cols
    this.rows = rows
  }

  buildBoard() {
    let board = this.emptyBoardOf(this.cols, this.rows)

    this.mines.forEach(([col, row])=> {
      col--
      row--

      if (!this.isCellInBound(board, col, row)) {
        return
      }

      board[row][col].setMineStatus(true)

      let neighbours = [
        [col-1, row-1], [col, row-1], [col+1, row-1],
        [col-1, row],                 [col+1, row],
        [col-1, row+1], [col, row+1], [col+1, row+1]
      ]

      neighbours.map(([col, row]) => {
        if (this.isCellInBound(board, col, row)) {
          board[row][col].addBombCount()
        }
      })
    })

    return board
  }

  showBoard() {
    if(this.rows === 0 || this.cols === 0){
      return null
    }

    const board = this.buildBoard()

    let boardStr = ''
    board.forEach((row, index) => {
      row.forEach((cell) => {
        boardStr += cell.displayChar()
      })
      boardStr += "\n"
    })

    return boardStr.trim()
  }

  isCellInBound(board, col, row) {
    return board[row] && board[row][col]
  }

  emptyBoardOf(cols, rows) {
    let board = []

    for(let i=1; i<=rows; i++){
      let newRow = []
      for(let j=1; j<=cols; j++){
        const newCell = new Cell(j, i)
        newRow.push(newCell)
      }
      board.push(newRow)
    }

    return board
  }

  setMines(mines) {
    this.mines = mines
  }
}
