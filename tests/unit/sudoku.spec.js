import Sudoku from '@/sudoku/index.js';

describe("Class sudoku", () => {
  let sudoku = new Sudoku;
  it('is an object', () => {
    expect(typeof sudoku).toEqual('object');
  })
})