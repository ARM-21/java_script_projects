import React, { useState } from 'react'

export default function App() {
    const [query,setQuery] = useState('');
       const arr = [1,2,3,4,5,6,7,8,9,10]
  return (
    <div style={{display:'flex',flexDirection:"column", justifyContent:"center",alignItems:"center"}}>
    <input type="number" onChange={(e)=>{
        setQuery(e.target.value)}}/>
    <div style={{display:'flex',flexDirection:"colun", justifyContent:"center"}}>
      {
        arr.filter((val)=>{
            return val.toString().includes(query);
        })
        .map((val)=>{
            return <span>{val}</span>
        })
      }
    </div>
    </div>
  )
}
