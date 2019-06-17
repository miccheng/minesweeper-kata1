import Cell from './cell'

export default class Minesweeper {
  constructor(cols, rows) {
    this.cols = cols
    this.rows = rows
  }

  buildBoard() {
    let board = []

    for(let i=1; i<=this.rows; i++){
      let newRow = []
      for(let j=1; j<=this.cols; j++){
        const newCell = new Cell(j, i)
        this.setCellBombStatus(newCell)
        newRow.push(newCell)
      }
      board.push(newRow)
    }

    this.mines.forEach(([col, row])=> {
      col--
      row--

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
        if (cell.hasBomb) {
          boardStr += '*'
        } else if (cell.surroundingBombs > 0) {
          boardStr += `${cell.surroundingBombs}`
        } else {
          boardStr += '.'
        }
      })
      if (index < (this.rows-1)) {
        boardStr += "\n"
      }
    })

    return boardStr
  }

  setCellBombStatus(cell) {
    const foundIndex = this.mines.findIndex(mine=>{
      const [col, row] = mine
      return (cell.col === col && cell.row === row)
    })

    if(foundIndex> -1){
      cell.hasBomb = true
    }
  }

  isCellInBound(board, col, row) {
    return board[row] && board[row][col]
  }

  setMines(mines) {
    this.mines = mines
  }
}
