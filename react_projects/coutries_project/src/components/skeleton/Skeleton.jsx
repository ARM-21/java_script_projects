import React from 'react'
import styles from './skeleton.module.css'
export default function Skeleton() {
  const arr =[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20];
  return (
    <div className="countries_container">
    
    {
      arr.map((data)=>{
        return <div className={`country ${styles.skeleton_color}`} key={data}>
        </div>
      })
    }
    </div>
  )
}
