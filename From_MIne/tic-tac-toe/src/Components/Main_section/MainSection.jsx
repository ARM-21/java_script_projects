import React, { useState } from 'react'
import InputPlayer from './InputPlayer'
import './MainSection.css'

export default function MainSection({playerSymbolHolder}) {
    let [isEdit,setEdit] = useState(false);
    const [playerSymbol] = playerSymbolHolder;
    

    return (
        <>
            <section className='main_input_section'>
                
               <InputPlayer name='Shyam' playerSymbol='X' editHolder={setEdit} />
               <h2 style={{color:"#17d35f",position:"absolute"}} className={isEdit?'display_none':''} >vs</h2>
               <InputPlayer name='Ram' playerSymbol='O' editHolder={setEdit} />
               
            </section>
        </>
    )
}
