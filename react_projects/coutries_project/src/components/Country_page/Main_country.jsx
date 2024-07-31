import React, { useEffect, useState } from 'react'
import CoutryPage from './CoutryPage';
import { useParams } from 'react-router-dom';

export default function Main_country() {
    const [countryData,setCountryData] = useState('');
    const [dataLoaded,setDataLoaded] = useState(false);
    const [countryNotFound,setCountryNotFound]=useState(false);
    // const userInputCountry = new URLSearchParams(location.search).get('name');
    const params = useParams();
    const userInputCountry = params.country;
    useEffect(()=>{
       fetch(`https://restcountries.com/v3.1/name/${userInputCountry}`)
       .then(res => {
        if (!res.ok) {
            throw new Error('Network response was not ok');
        }
        return res.json();
    })
       .then((data)=>{
        setDataLoaded(true)
        setCountryData(data[0]);
       })
       .catch((err)=>{
        setDataLoaded(true)
        setCountryNotFound(true)
        })
     
    },[userInputCountry])
    if(countryNotFound){
        return <span className=''>COuntry not found</span>
    }
    
  return (
   <>
   {dataLoaded?
    <CoutryPage countryData={{...countryData}} />:<span className='loader'></span>
   }
   </>
  )
}
