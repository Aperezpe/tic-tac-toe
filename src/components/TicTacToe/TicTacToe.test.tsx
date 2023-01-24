import React from 'react';
import TicTacToe, { checkWinner, isGameOver, PLAYER_1_SYMBOL, PLAYER_2_SYMBOL } from "./TicTacToe";
import { buildGrid, inverseGrid } from './helpers.test';

//test block
describe("isGameOver function", () => {
  // render the component on virtual dom
  describe("when given empty string", () => {
    it('should return false', () => {
      const result = isGameOver("");

      expect(result).toBe(false);
    })
  });

  describe("when given x", () => {
    it('should return true', () => {
      const result = isGameOver("x");

      expect(result).toBe(true);
    })
  });

  describe("when given o", () => {
    it('should return true', () => {
      const result = isGameOver("o");

      expect(result).toBe(true);
    })
  });

});

describe("checkWinner function", () => {

  describe("when first row is X", () => {
    it("winner is X, then O", () => {
      let board: string = `
      xxx
      oo-
      ---
      `
      const grid = buildGrid(board);
      let winner = checkWinner(grid);
      expect(winner).toBe(PLAYER_1_SYMBOL);
      
      const inversedGrid = inverseGrid(grid);
      winner = checkWinner(inversedGrid);
      expect(winner).toBe(PLAYER_2_SYMBOL);
    });
  });

  describe("when second row is X", () => {
    it("winner is X, then O", () => {
      let board: string = `
      --o
      xxx
      -o-
      `
      const grid = buildGrid(board);
      let winner = checkWinner(grid);
      expect(winner).toBe(PLAYER_1_SYMBOL);
      
      const inversedGrid = inverseGrid(grid);
      winner = checkWinner(inversedGrid);
      expect(winner).toBe(PLAYER_2_SYMBOL);
    });
  });

  describe("when third row is X", () => {
    it("winner is X, then O", () => {
      let board: string = `
      --o
      -o-
      xxx
      `
      const grid = buildGrid(board);
      let winner = checkWinner(grid);
      expect(winner).toBe(PLAYER_1_SYMBOL);
      
      const inversedGrid = inverseGrid(grid);
      winner = checkWinner(inversedGrid);
      expect(winner).toBe(PLAYER_2_SYMBOL);
    });
  });

  describe("when first column is X", () => {
    it("winner is X, then O", () => {
      let board: string = `
      xoo
      xoo
      xxx
      `
      const grid = buildGrid(board);
      let winner = checkWinner(grid);
      expect(winner).toBe(PLAYER_1_SYMBOL);
      
      const inversedGrid = inverseGrid(grid);
      winner = checkWinner(inversedGrid);
      expect(winner).toBe(PLAYER_2_SYMBOL);
    });
  });

  describe("when second column is X", () => {
    it("winner is X, then O", () => {
      let board: string = `
      oxo
      oxx
      xxo
      `
      const grid = buildGrid(board);
      let winner = checkWinner(grid);
      expect(winner).toBe(PLAYER_1_SYMBOL);
      
      const inversedGrid = inverseGrid(grid);
      winner = checkWinner(inversedGrid);
      expect(winner).toBe(PLAYER_2_SYMBOL);
    });
  });

  describe("when third column is X", () => {
    it("winner is X, then O", () => {
      let board: string = `
      oox
      xox
      oxx
      `
      const grid = buildGrid(board);
      let winner = checkWinner(grid);
      expect(winner).toBe(PLAYER_1_SYMBOL);
      
      const inversedGrid = inverseGrid(grid);
      winner = checkWinner(inversedGrid);
      expect(winner).toBe(PLAYER_2_SYMBOL);
    });
  });

  describe("when diagonal 1 is X", () => {
    it("winner is X, then O", () => {
      let board: string = `
      xoo
      oxx
      oxx
      `
      const grid = buildGrid(board);
      let winner = checkWinner(grid);
      expect(winner).toBe(PLAYER_1_SYMBOL);
      
      const inversedGrid = inverseGrid(grid);
      winner = checkWinner(inversedGrid);
      expect(winner).toBe(PLAYER_2_SYMBOL);
    });
  });

  describe("when diagonal 2 is X", () => {
    it("winner is X, then O", () => {
      let board: string = `
      xox
      oxo
      xxo
      `
      const grid = buildGrid(board);
      let winner = checkWinner(grid);
      expect(winner).toBe(PLAYER_1_SYMBOL);
      
      const inversedGrid = inverseGrid(grid);
      winner = checkWinner(inversedGrid);
      expect(winner).toBe(PLAYER_2_SYMBOL);
    });
  });

  describe("when board is empty", () => {
    it("No winner", () => {
      let board: string = `
      ---
      ---
      ---
      `
      const grid = buildGrid(board);
      const winner = checkWinner(grid);
      expect(winner).toBe("");
    });
  });

  describe("When there's no winner", () => {
    it("should return empty string", () => {
      let board: string = `
      o-o
      x-x
      oo-
      `
      const grid = buildGrid(board);
      let winner = checkWinner(grid);
      expect(winner).toBe("");
      
      const inversedGrid = inverseGrid(grid);
      winner = checkWinner(inversedGrid);
      expect(winner).toBe("");
    });
  });

  describe("When there's no winner 2", () => {
    it("should return empty string", () => {
      let board: string = `
      xox
      oox
      xxo
      `
      const grid = buildGrid(board);
      let winner = checkWinner(grid);
      expect(winner).toBe("");
      
      const inversedGrid = inverseGrid(grid);
      winner = checkWinner(inversedGrid);
      expect(winner).toBe("");
    });
  });

  describe("When there's no winner 3", () => {
    it("should return empty string", () => {
      let board: string = `
      oxx
      xoo
      oxx
      `
      const grid = buildGrid(board);
      let winner = checkWinner(grid);
      expect(winner).toBe("");
      
      const inversedGrid = inverseGrid(grid);
      winner = checkWinner(inversedGrid);
      expect(winner).toBe("");
    });
  });

  describe("When there's no winner 4", () => {
    it("should return empty string", () => {
      let board: string = `
      o-x
      --o
      -x-
      `
      const grid = buildGrid(board);
      let winner = checkWinner(grid);
      expect(winner).toBe("");
      
      const inversedGrid = inverseGrid(grid);
      winner = checkWinner(inversedGrid);
      expect(winner).toBe("");
    });
  });



});