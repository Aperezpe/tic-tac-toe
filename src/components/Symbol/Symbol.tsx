import './Symbol.scss';

import React from 'react'
import { PLAYER_1_SYMBOL, PLAYER_2_SYMBOL } from '../TicTacToe/TicTacToe';

interface SymbolProps {
  player: string
}

const Symbol = (props: SymbolProps) => {

  const { player } = props;


  return (
    <div className="symbol">
      {player === PLAYER_1_SYMBOL && 
        <div className="symbol__x">
          <div className="symbol__x__line1"></div>
          <div className="symbol__x__line2"></div>
        </div>}
      {player === PLAYER_2_SYMBOL && <div className="symbol__o"></div>}
    </div>
  )
}

export default Symbol