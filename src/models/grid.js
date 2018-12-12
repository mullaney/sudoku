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
}

export default Sudoku;
