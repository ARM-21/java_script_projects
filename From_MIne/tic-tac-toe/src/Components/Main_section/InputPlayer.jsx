import React, { useEffect, useState } from 'react';
import { PlayerContext } from '../../App';
import { useContext } from 'react';
let count = 0;
export default function InputPlayer({ name, playerSymbol ,editHolder}) {
    const [editable, setEditable] = useState(false);
    const [playerName, setPlayerName] = useState(name);
    let [player,setPlayer] = useContext(PlayerContext);
   
    return (
        <>
        <div className={`player `} id={playerSymbol}>
        {playerSymbol == "O" &&<> 
        <span>{playerSymbol}</span>
        </>}
            <div className={`player_group ${playerSymbol == "X" && 'reverse_row } ' } ${player==playerSymbol?"active_Player":""} `}>
                {editable ? <input type="text" placeholder='Enter name' maxLength='9' onChange={(e) => {
                    setPlayerName(e.target.value)
                }} /> : playerName}
               
            <button onClick={() => {
                setEditable(prev => !prev)
                editHolder(!editable)
            }
            }>{editable ? 'Save' : 'Edit'}</button>
             </div>
             
             {playerSymbol == "X" &&<><span>{playerSymbol}</span>
             </>}
             </div>
        </>



    )
}
