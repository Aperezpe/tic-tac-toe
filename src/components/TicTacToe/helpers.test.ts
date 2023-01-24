
export const buildGrid = (boardStr: string) => {
  let grid: string[] = []
  for (let char of boardStr) {
    if (char === '-') grid.push('')
    else if (char === 'x' || char === 'o') grid.push(char);
  }
  return grid;
}

export const inverseGrid = (grid: string[]) => {
  let inversedGrid: string[] = [];
  for (let symbol of grid) {
    if (symbol === 'x') inversedGrid.push('o')
    else if (symbol === 'o') inversedGrid.push('x')
    else inversedGrid.push(symbol);
  }
  return inversedGrid;
}

describe("buildGrid function", () => {
  test("equal to list ['x','x','x','o','o','','','','']", () => {
    const board: string = `
      xxx
      oo-
      ---
      `;

    expect(buildGrid(board)).toEqual(['x', 'x', 'x', 'o', 'o', '', '', '', '']);
  });

  test("equal to list ['x','o','x','x','x','x','o','x','o']", () => {
    const board: string = `
      xox
      xxx
      oxo
      `;

    expect(buildGrid(board)).toEqual(['x', 'o', 'x', 'x', 'x', 'x', 'o', 'x', 'o']);
  });

  test("equal to list ['','','','','','','','','']", () => {
    const board: string = `
      ---
      ---
      ---
      `;

    expect(buildGrid(board)).toEqual(['', '', '', '', '', '', '', '', '']);
  });

  test("equal to list ['x','','o','o','x','','','','x']", () => {
    const board: string = `
      x-o
      ox-
      --x
      `;

    expect(buildGrid(board)).toEqual(['x', '', 'o', 'o', 'x', '', '', '', 'x']);
  });

  test("equal to list ['x','o','x','o','x','o','x','o','x']", () => {
    const board: string = `
      xox
      oxo
      xox
      `;

    expect(buildGrid(board)).toEqual(['x', 'o', 'x', 'o', 'x', 'o', 'x', 'o', 'x']);
  });
});

describe('inverseGrid function', () => {
  test('should inverse grid', () => {

    const board: string = `
      xox
      oxo
      xox
      `;

    const grid = buildGrid(board);
    const inversedGrid = inverseGrid(grid);

    expect(inversedGrid).toEqual(['o', 'x', 'o', 'x', 'o', 'x', 'o', 'x', 'o']);

  });

  test('should inverse grid 2', () => {

    const board: string = `
      -ox
      o--
      -ox
      `;

    const grid = buildGrid(board);
    const inversedGrid = inverseGrid(grid);

    expect(inversedGrid).toEqual(['', 'x', 'o', 'x', '', '', '', 'x', 'o']);

  });

  test('should inverse grid 3', () => {

    const board: string = `
      xxx
      o--
      -o-
      `;

    const grid = buildGrid(board);
    const inversedGrid = inverseGrid(grid);

    expect(inversedGrid).toEqual(['o', 'o', 'o', 'x', '', '', '', 'x', '']);

  });

  test('should inverse grid 4', () => {

    const board: string = `
      xo-
      -xo
      xox
      `;

    const grid = buildGrid(board);
    const inversedGrid = inverseGrid(grid);

    expect(inversedGrid).toEqual(['o', 'x', '', '', 'o', 'x', 'o', 'x', 'o']);

  });
});