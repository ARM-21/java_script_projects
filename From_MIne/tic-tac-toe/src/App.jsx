import React, { createContext, useContext, useState } from 'react'
import Header from "./Components/Header_comp/Header"
import "./app.css"
import MainSection from './Components/Main_section/MainSection'
import GameBoard from './Components/GameBoard/GameBoard.jsx'

let firstStage = [
  [null, null, null],
  [null, null, null],
  [null, null, null]

]
const PlayerContext = createContext(null)

export default function App() {
  
  const gameBoardState= useState([...firstStage]);
  const playerSymbol= useState("X");

  
  return (
    <>
    <section className='header_section'>
      <Header />
    </section>
    <section className='hero_section'>
    <PlayerContext.Provider value={playerSymbol}>
    <MainSection playerSymbolHolder={playerSymbol}/>
    </PlayerContext.Provider>
    <GameBoard playerSymbolHolder = {playerSymbol} gameBoardHolder={gameBoardState}/>
    </section>
    
    </>
  )
}
export {PlayerContext}