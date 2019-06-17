import Cell from './cell'

test('addBombCount', () => {
  const cell = new Cell(0, 0, false)

  cell.addBombCount()
  cell.addBombCount()
  cell.addBombCount()

  expect(cell.surroundingBombs).toEqual(3)
})

test('cell display', () => {
  const blankCell = new Cell(0, 0, false)
  const mineCell = new Cell(0, 0, true)
  const surroundedCell = new Cell(0, 0, false)
  surroundedCell.addBombCount()
  surroundedCell.addBombCount()

  expect(blankCell.displayChar()).toEqual('.')
  expect(mineCell.displayChar()).toEqual('*')
  expect(surroundedCell.displayChar()).toEqual('2')
})