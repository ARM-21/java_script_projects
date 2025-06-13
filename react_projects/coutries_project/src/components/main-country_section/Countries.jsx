import React, { useEffect, useState } from 'react';
import Country from './Country.jsx'
import Skeleton from '../skeleton/Skeleton.jsx';
// import {countryData} from './../../data.js'

export default function Countries({ targetCountry, targetRegion,dataLoad,dataLoaded }) {
  const [country, setCountryData] = useState([]);
console.log(targetCountry,targetRegion)
  useEffect(() => {
    fetch('https://restcountries.com/v3.1/all?fields=name,flags,population,region,capital')
      .then((res) => {
        
        return res.json()
      })
      .then((data) => {
        console.log(data)
        setCountryData(data)
        dataLoad(true);
       
      })
      // console.log(country)
  },[])
if(!dataLoaded){
return <Skeleton/>
}
 
  return (
    
    <div className='countries_container'> 
      {
        (((targetCountry.length > 0 && targetRegion.length > 0) || (targetCountry.length > 0) || (targetRegion.length > 0))) ?
          country.filter((country) => {
            console.log(country)
            return (country.name.common.toLowerCase().includes(targetCountry.toLowerCase()) && country.region.toLowerCase().includes(targetRegion.toLowerCase()))
          })
            .map((country) => {
              return <Country key={country.name.common} countryDetails={{ ...country }} />
            })

          : country.map((country) => {
            return <Country key={country.name.common} countryDetails={{ ...country }} />
          })
      }
    </div>
  )
}
