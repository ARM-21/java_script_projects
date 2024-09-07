import React from 'react'
import "./gameboard.css"

export default function GameBoard({playerSymbolHolder,gameBoardHolder}) {
  
    const [gameBoardState,setGameBoardState] = gameBoardHolder;
    const [playerSymbol,setPlayerSymbol] = playerSymbolHolder;
    let firstStage = [...gameBoardState];

    return (
        <div className='GameBoard'>
            {
                gameBoardState.map((row, rowIndex) => {

                    return row.map((col, colIndex) => {
                            console.log(col==null)
                        return <span di style={playerSymbol=="O"?{}:{color:"Green"}} onClick={
                            () => {
                                firstStage[rowIndex][colIndex] = playerSymbol;
                                setGameBoardState(firstStage)
                                setPlayerSymbol(playerSymbol=="X"?"O":"X")
                            }
                        } key={colIndex}>{col}</span>
                    })


                })
            }
        </div>
    )
}
