import Sudoku from '@/sudoku/index.js';

describe("Class sudoku", () => {
  let sudoku = new Sudoku;
  it('is an object', () => {
    expect(typeof sudoku).toEqual('object');
  })
})

// let puzzle = [[ 8,9,5,   7,4,2,   1,3,6 ],
//               [ 2,7,1,   9,6,3,   4,8,5 ],
//               [ 4,6,3,   5,8,1,   7,9,2 ],

//               [ 9,3,4,   6,1,7,   2,5,8 ],
//               [ 5,1,7,   2,3,8,   9,6,4 ],
//               [ 6,8,2,   4,5,9,   3,7,1 ],

//               [ 1,5,9,   8,7,4,   6,2,3 ],
//               [ 7,4,6,   3,2,5,   8,1,9 ],
//               [ 3,2,8,   1,9,6,   5,4,7 ]];


// getRow(puzzle, 8);
// // -> [ 3,2,8,1,9,6,5,4,7 ]

// getRow(puzzle, 0);
// // -> [ 8,9,5,7,4,2,1,3,6 ]

// getColumn(puzzle, 0);
// // -> [ 8,2,4,9,5,6,1,7,3 ]

// getRow(puzzle, 8);
// // -> [ 6,5,2,8,4,1,3,9,7 ]

// getSection(puzzle, 0, 0);
// // -> [ 8,9,5,2,7,1,4,6,3 ]

// getSection(puzzle, 1,0);
// // -> [ 7,4,2,9,6,3,5,8,1 ]