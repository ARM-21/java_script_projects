import React from 'react'
import tic_img from '../../assets/game-logo.png'
import "./header.css"
export default function Header() {
  return (
    <header >
      <img src={tic_img}/>
      <h2>Tic-Tac-Toe</h2>
    </header>
  )
}
