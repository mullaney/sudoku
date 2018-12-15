const GRID_SIZE = 81;
const DEFAULT_GRID = new Array(GRID_SIZE).fill(null);

class Sudoku {
  constructor(grid) {
    if (grid === undefined) {
      grid = DEFAULT_GRID;
    }
    this.validate(grid);
    this.grid = grid;
  }

  getRow(row) {
    return this.grid.slice(row * 9, row * 9 + 9);
  }

  getColumn(col) {
    return this.grid.reduce((acc, element, index) => {
      if (index % 9 === col) {
        acc.push(element);
      }
      return acc;
    }, []);
  }

  getSection(sectionNumber) {
    const indexShift = [0, 1, 2, 9, 10, 11, 18, 19, 20];
    let sectionStart =
      (sectionNumber % 3) * 3 + Math.floor(sectionNumber / 3) * 27;
    let section = [];

    for (let i = 0; i < indexShift.length; i++) {
      let currentIndex = sectionStart + indexShift[i];
      section.push(this.grid[currentIndex]);
    }

    return section;
  }

  validate(grid) {
    if (grid.length !== GRID_SIZE) {
      throw "Invalid grid size";
    }
  }

  static includes1to9(section) {
    if (!Array.isArray(section)) {
      throw "Type error: you must pass an array";
    }
    if (section.length !== 9) {
      throw "Error: you must pass an array of size 9";
    }

    const uniqueValues = new Set();

    for (let i = 0; i < 9; i++) {
      if (!Sudoku.isValidValue(section[i]) && section[i] !== null) {
        throw `Error: invalid number in this section: ${
          section[i]
        } is not valid. Only values 1 to 9 or null are valid`;
      } else if (section[i] === null) {
        return false;
      } else if (uniqueValues.has(section[i])) {
        throw "Error: duplicate value in section";
      } else {
        uniqueValues.add(section[i]);
      }
    }

    return true;
  }

  static isValidValue(num) {
    if (num < 1 || num > 9) {
      return false;
    }
    if (!Number.isInteger(num)) {
      return false;
    }
    return true;
  }
}

export default Sudoku;
