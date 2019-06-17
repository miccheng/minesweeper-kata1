import Minesweeper from './minesweeper'

test('Empty response for 0, 0', () => {
  const cols = 0
  const rows = 0
  const game = new Minesweeper(cols, rows)

  expect(game.showBoard()).toBe(null)
})

test('Empty response for 4, 3', () => {
  const cols = 4
  const rows = 3
  const game = new Minesweeper(cols, rows)

  const mineCoordinates = []
  game.setMines(mineCoordinates)

  expect(game.showBoard()).toBe("....\n....\n....")
})

test('return board with mines for grid of 3*2', ()=>{
  const cols = 3
  const rows = 2
  const game = new Minesweeper(cols, rows)

  const mineCoordinates = [[2,1]]
  game.setMines(mineCoordinates)

  expect(game.showBoard()).toBe("1*1\n111")

})