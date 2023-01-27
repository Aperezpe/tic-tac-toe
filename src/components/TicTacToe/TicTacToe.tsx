import React, { useState } from 'react';
import Symbol from '../Symbol/Symbol';
import './TicTacToe.scss';

export const PLAYER_1_SYMBOL = "x";
export const PLAYER_2_SYMBOL = "o";

const isGameOver = (winner: string) => winner ? true : false;

const isTie = (grid: string[]) => {
   for (let cell of grid) {
      if (cell === '') return false; 
   }

   return true;
}

const checkWinner = (grid: string[]) => {
   let winner: string = "";
   
   for (let i = 0; i < grid.length; i++) {
      let ix3 = i*3;
      if (grid[ix3] && grid[ix3] === grid[ix3+1] && grid[ix3+1] === grid[ix3+2]) {
         return grid[ix3];
      }
      if (grid[i] && grid[i] === grid[i+3] && grid[i+3] === grid[i+6]) {
         return grid[i];
      }
      
      let ix2 = i*2;
      if (grid[ix2] && i < 2 && grid[ix2] === grid[4] && grid[4] === grid[-(ix2) + 8]) {
         return grid[ix2];
      }
   }

   return isTie(grid) ? "tie" : winner;
}

const TicTacToe = () => {

   const [ playerTurn, setPlayerTurn ] = useState<string>(PLAYER_1_SYMBOL);
   const [ grid, setGrid ] = useState<(string)[]>(["","","", "","", "", "","",""]);

   const handleClick = (e: any) => {
      let winner = checkWinner(grid);
      if (isGameOver(winner)) return;
      
      const clickedIndex: number = parseInt(e.target.id);
      
      const newGrid = grid.map((value, i) => {
         if (value) return value;
         else if (clickedIndex === i) {
            setPlayerTurn(playerTurn === PLAYER_1_SYMBOL ? PLAYER_2_SYMBOL : PLAYER_1_SYMBOL)
            return playerTurn; 
         }
         else return value
      });
      
      setGrid(newGrid);

      winner = checkWinner(newGrid);
      if (isGameOver(winner)) {
         setPlayerTurn(winner);
      } 
   }

   const restartGame = () => {
      setPlayerTurn(PLAYER_1_SYMBOL);
      setGrid(["","","", "","", "", "","",""]);
   }

   const showSymbol = (value: string) => {
      if (value === PLAYER_1_SYMBOL) return <Symbol player={value}></Symbol>
      else if (value === PLAYER_2_SYMBOL) return <Symbol player={value}></Symbol>
      else return
   }


   let status: string = "";
   let winner = checkWinner(grid);
   if (winner) {
      if (winner === 'x' || winner === 'o') status = `WINNER: ${winner.toLocaleUpperCase()}!`
      else if (winner === 'tie') status = "Its a TIE!"
   } else {
      if (playerTurn === 'x') status =  `Player ${PLAYER_1_SYMBOL.toUpperCase()} Go!`
      else status =  `Player ${PLAYER_2_SYMBOL.toUpperCase()} Go!`
   }

   

   return (
      <div className='tic-tac-toe'>
         <h1 className='tic-tac-toe__title'>Tic Tac Toe</h1>

         <div className='grid'>
            {grid.map((value, i) => (
               <div key={i} className='grid__item' id={`${i}`} onClick={handleClick}>{showSymbol(value)}</div>
            ))}
         </div>

         <h2 className='tic-tac-toe__player'>{status}</h2>
         <button className='tic-tac-toe__reset' onClick={restartGame}>RESET</button>
      </div>
   );
};

export { isGameOver, checkWinner, isTie }
export default TicTacToe;
