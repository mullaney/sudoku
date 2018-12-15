import Sudoku from "@/models/Sudoku.js";
import testGrid from "../fixtures/grid";

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

  describe(".includes1to9", () => {
    it("is a function", () => {
      expect(Sudoku.includes1to9).toBeInstanceOf(Function);
    });

    describe("with invalid input", () => {
      it("throws an error with invalid type", () => {
        expect(() => {
          Sudoku.includes1to9(null);
        }).toThrowError(/Type/);
      });

      it("throws an error with array of wrong length", () => {
        expect(() => {
          Sudoku.includes1to9([]);
        }).toThrowError(/size/);
        expect(() => {
          Sudoku.includes1to9([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]);
        }).toThrowError(/size/);
      });

      it("throws an error if any of the values are not 1 to 9 or null", () => {
        expect(() => {
          Sudoku.includes1to9([1, 2, 3, 4, 5, 6, 7, 8, 0]);
        }).toThrowError(/values/);
      });

      it("throws an error if there are duplicate numbers in the section", () => {
        expect(() => {
          Sudoku.includes1to9([1, 2, 3, 4, 5, 6, 7, 8, 5]);
        }).toThrowError(/duplicate/);
      });
    });

    describe("with valid input", () => {
      it("returns false if all numbers 1 - 9 are not included", () => {
        expect(Sudoku.includes1to9([1, 2, 3, 4, 5, 6, 7, 8, null])).toEqual(
          false
        );
        expect(Sudoku.includes1to9([2, 3, 4, null, 6, 7, 8, 9, 1])).toEqual(
          false
        );
        expect(Sudoku.includes1to9([5, 4, 3, 9, 8, 7, null, null, 1])).toEqual(
          false
        );
      });

      it("returns true if all numbers 1 - 9 are included", () => {
        expect(Sudoku.includes1to9([1, 2, 3, 4, 5, 6, 7, 8, 9])).toEqual(true);
        expect(Sudoku.includes1to9([9, 8, 7, 6, 5, 4, 3, 2, 1])).toEqual(true);
        expect(Sudoku.includes1to9([3, 2, 1, 6, 5, 4, 9, 8, 7])).toEqual(true);
        expect(Sudoku.includes1to9([6, 4, 2, 8, 9, 7, 5, 3, 1])).toEqual(true);
      });
    });
  });

  describe(".isValidValue", () => {
    it("is a function", () => {
      expect(Sudoku.isValidValue).toBeInstanceOf(Function);
    });

    it("should return true if value is an integer between 1 and 9", () => {
      expect(Sudoku.isValidValue(1)).toEqual(true);
      expect(Sudoku.isValidValue(5)).toEqual(true);
      expect(Sudoku.isValidValue(9)).toEqual(true);
    });

    it("should return false if value is an greater than 9 or less than 1", () => {
      expect(Sudoku.isValidValue(10)).toEqual(false);
      expect(Sudoku.isValidValue(0)).toEqual(false);
    });

    it("should return false if the number is not an integer", () => {
      expect(Sudoku.isValidValue(2.4)).toEqual(false);
    });

    it("should return false if the argument is not a number", () => {
      expect(Sudoku.isValidValue(NaN)).toEqual(false);
      expect(Sudoku.isValidValue(null)).toEqual(false);
      expect(Sudoku.isValidValue(undefined)).toEqual(false);
      expect(Sudoku.isValidValue({})).toEqual(false);
    });
  });

  describe(".isSolved", () => {
    it("is a function", () => {
      expect(sudoku.isSolved).toBeInstanceOf(Function);
    });

    describe("when sudoku grid is complete", () => {
      it("should return true", () => {
        expect(sudoku.isSolved()).toEqual(true);
      });
    });

    describe("sudoku grid is incomplete", () => {
      it("should return false", () => {
        let incompleteGrid = [...testGrid];
        incompleteGrid[0] = null;
        let incompleteSudoku = new Sudoku(incompleteGrid);
        expect(incompleteSudoku.isSolved()).toEqual(false);
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
