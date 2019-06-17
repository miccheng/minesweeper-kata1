import Minesweeper from './minesweeper'

test('Empty response for 0, 0', () => {
  const cols = 0
  const rows = 0
  const game = new Minesweeper(cols, rows)

  expect(game.showBoard()).toBe(null)
})

test('Blank response for 4, 3', () => {
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

test('return board with mines for grid of 5*3', ()=>{
  const cols = 5
  const rows = 3
  const game = new Minesweeper(cols, rows)

  const mineCoordinates = [
    [1, 1], [2, 1], [2, 3]
  ]
  game.setMines(mineCoordinates)

  expect(game.showBoard()).toBe("**1..\n332..\n1*1..")
})

test('return board with mines for grid of 12*6', ()=>{
  const cols = 12
  const rows = 6
  const game = new Minesweeper(cols, rows)

  const mineCoordinates = [
    [5, 4]
  ]
  game.setMines(mineCoordinates)

  expect(game.showBoard()).toBe("............\n............\n...111......\n...1*1......\n...111......\n............")
})