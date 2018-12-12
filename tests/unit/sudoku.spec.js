import Sudoku from "@/models/grid.js";
import testGrid from "../fixtures/grid";

const testRow = [2, 3, 4, 5, 6, 7, 8, 9, 0, 1, 5, 5, 5];
// prettier-ignore-end

describe("Class sudoku", () => {
  let sudoku = new Sudoku(testGrid);
  it("is an object", () => {
    expect(sudoku).toBeInstanceOf(Object);
  });

  describe(".grid", () => {
    it("is an array", () => {
      expect(sudoku.grid).toBeInstanceOf(Array);
    });

    it("has 81 elements", () => {
      expect(sudoku.grid.length).toEqual(81);
    });

    describe("with invalid grid size", () => {
      it("throw an error", () => {
        let invalidGrid = [1, 2, 3];
        expect(() => {
          new Sudoku(invalidGrid);
        }).toThrowError(/size/);
      });
    });

    describe(".getRow", () => {
      let sudokuFixture = new Sudoku(testGrid);
      it("is a function", () => {
        expect(sudokuFixture.getRow).toBeInstanceOf(Function);
      });

      it("returns an array of length 9", () => {
        expect(sudokuFixture.getRow(0)).toBeInstanceOf(Array);
        expect(sudokuFixture.getRow(0).length).toEqual(9);
      });
      //1,5,9,8,7,4,6,2,3
      it("returns the correct elements", () => {
        expect(sudokuFixture.getRow(6)).toEqual([1, 5, 9, 8, 7, 4, 6, 2, 3]);
      });
    });

    describe(".getColumn", () => {
      let sudokuFixture = new Sudoku(testGrid);
      it("is a function", () => {
        expect(sudokuFixture.getColumn).toBeInstanceOf(Function);
      });

      it("returns an array of length 9", () => {
        expect(sudokuFixture.getColumn(0)).toBeInstanceOf(Array);
        expect(sudokuFixture.getColumn(0).length).toEqual(9);
      });

      it("returns the correct elements", () => {
        expect(sudokuFixture.getColumn(1)).toEqual([9, 7, 6, 3, 1, 8, 5, 4, 2]);
      });
    });

    describe(".getSection", () => {
      let sudokuFixture = new Sudoku(testGrid);
      it("is a function", () => {
        expect(sudokuFixture.getSection).toBeInstanceOf(Function);
      });

      it("returns an array of length 9", () => {
        expect(sudokuFixture.getSection(0)).toBeInstanceOf(Array);
        expect(sudokuFixture.getSection(0).length).toEqual(9);
      });

      it("returns the correct elements", () => {
        const correctSection1 = [7, 4, 2, 9, 6, 3, 5, 8, 1];
        const correctSection8 = [6, 2, 3, 8, 1, 9, 5, 4, 7];
        expect(sudokuFixture.getSection(1)).toEqual(correctSection1);
        expect(sudokuFixture.getSection(8)).toEqual(correctSection8);
      });
    });
  });
});

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
