import React, { useState, useEffect } from 'react';
import Symbol from '../Symbol/Symbol';
import './TicTacToe.scss';

const TicTacToe = () => {

   const [ playerTurn, setPlayerTurn ] = useState<boolean | null>(true);
   const [ grid, setGrid ] = useState<(boolean | null)[]>([null,null,null, null,null, null, null,null,null])

   const isGameOver = (winner: boolean | null) => winner === true || winner === false;

   const handleClick = (e: any) => {
      let winner = checkWinner();
      if (isGameOver(winner)) return;
      
      const clickedIndex: number = parseInt(e.target.id);
      
      const newGrid = grid.map((value, i) => {
         if (value !== null) return value;
         else if (clickedIndex === i) {
            setPlayerTurn(!playerTurn)
         
            return playerTurn; 
         }
         else return value
      });
      
      setGrid(newGrid);

      winner = checkWinner();
      if (isGameOver(winner)) {
         setPlayerTurn(winner);
      } 
      
   }


   const checkWinner = () => {
      let winner: boolean | null = null;
      if (grid[0] && grid[1] && grid[2]) {winner = true};

      return winner;
   }

   const showSymbol = (value: boolean | null) => {
      if (value === true) return <Symbol player={value}></Symbol>
      else if (value === false) return <Symbol player={value}></Symbol>
      else return
   }


   let status: string;
   let winner = checkWinner();
   if (winner) {
      status = `WINNER: ${winner ? 'X' : 'O'}!`
   } else {
      status =  `Player ${playerTurn ? 1 : 2} Go!`
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
      </div>
   );
};

export default TicTacToe;
