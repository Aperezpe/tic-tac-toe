import './Symbol.scss';

import React from 'react'

interface SymbolProps {
  player: boolean | null
}

const Symbol = (props: SymbolProps) => {

  const { player } = props;


  return (
    <div className="symbol">
      {player === true && 
        <div className="symbol__x">
          <div className="symbol__x__line1"></div>
          <div className="symbol__x__line2"></div>
        </div>}
      {player === false && <div className="symbol__o"></div>}
    </div>
  )
}

export default Symbol