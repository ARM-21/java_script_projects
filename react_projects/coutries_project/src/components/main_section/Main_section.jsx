import React, { useContext } from 'react' 
import { useState } from 'react';
import SearchBy from './../Search-section/SearchBy'
import searchImg from "./../../assets/search-icon.svg"
import Countries from '../main-country_section/Countries';
import { useOutletContext } from 'react-router-dom';
import CountryContext from '../../Contexts/CountryContext';



export default function Main_section() {
    const [input, setInputCountry] = useState('');
    const [region,setRegion]=useState('');
    const [dataLoaded,setDataLoader] = useState(false);
    let [darkMode,setDarkMode] = useContext(CountryContext)
    function changeHandler(value){
      setRegion(value)
    }
    function inputHandler(value) {
      setInputCountry(value)
    }
    function dataLoader(){
      setDataLoader(true);
    }
  return (
    <main className={`${darkMode?'dark_mode':""}`}>
        <SearchBy src={searchImg}  oninput = {inputHandler} onchange={changeHandler}/>
      
  <Countries  targetCountry ={input} targetRegion = {region} dataLoad={dataLoader} dataLoaded={dataLoaded}/> 
        </main>
  )
}
