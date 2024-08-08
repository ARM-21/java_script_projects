import React, { useContext, useEffect, useState } from 'react';
import styles from './countrypage.module.css'
import { Link, useLocation } from 'react-router-dom';
import CountryContext from '../../Contexts/CountryContext';

export default function CoutryPage({ countryData }) {

    let [darkMode,setDarkMode] = useContext(CountryContext)
    let { flags, name, population, region, capital, subregion, languages, currencies, tld, borders } = { ...countryData }
    let currName;
    let languagesOfCountry;
    let currKey;
    let nativeName;
    const [bordersOfCountry, setBorder] = useState([]);
 let borderOfCountry=[];
 useEffect(()=>{


 borders && Promise.all(
     borders.map((border) => {
       return fetch(`https://restcountries.com/v3.1/alpha/${border}`)
            .then((res) => {
                return res.json()
            })
            .then(([data]) => {
             return data.name.common;
            //  /in this code the data is fetched each time the borderOfCountry gets changed
            
               
            })
    })
).then((data)=>{
    setBorder(data)
})
    // useEffect(() => {
    //     borders && borders.map((border) => {
    //         fetch(`https://restcountries.com/v3.1/alpha/${border}`)
    //             .then((res) => {
    //                 return res.json()
    //             })
    //             .then(([data]) => {
    //               if(!borderOfCountry.includes(data.name.common)){
    //                borderOfCountry.push(data.name.common)
    //               }
    //               setBorder(borderOfCountry);//in this code the data is fetched each time the borderOfCountry gets changed
                
                   
    //             })
    //     })
    // }, [borders])
},[borders])

    
    // 


    if (name.nativeName) {
        const key = Object.keys(name.nativeName)[0];
        nativeName = name.nativeName[key].common
    }
    if (currencies) {
        let currKeies = Object.keys(currencies)[0];
        currName = currencies[currKeies].name;
    }
    else {
        currName = 'not available'
    }
    if (!subregion) {
        subregion = 'no subregion available';
    }
    if (!borders) {
        borders = []
    }
    if (!capital) {
        capital = 'no capital available in data'
    }
    if (!currencies) {
        currencies = 'no currencies availbale';
    }
    if (!name.nativeName) {
        nativeName = 'not available'
    }
    if (languages) {
        let languagesOfCountries = Object.values(languages)
        languagesOfCountry = languagesOfCountries.map((val) => { return <span key={val}>{val}&nbsp;,</span> })
    }
    else {
        languagesOfCountry = 'data not available'
    }



    return (
        <main style={{height:"100vh"}} className={`${darkMode?'dark_mode':""}`}>
        <div className={`${darkMode?'dark_mode':""}`} style={{height:"70vh",display:"grid",placeItems:"center"}} >
            <div className={styles.wrapper}>
                <div className={styles.button_container}>
                    <Link to={'/'}> <button className={styles.back_button} onClick={() => {
                        history.back()
                    }}><span><img src='./back-arrow.svg' alt="back-arrow-img" /></span>Back</button>
                    </Link>
                </div>
            </div>
            <div className={styles.country_info_container}>
                <span>
                    <img src={flags.svg} alt="" />
                </span>
                <div className={styles.align_self_mistake}>
                    <div className={styles.country_info}>
                        <span className={styles.first_column}>
                            <div >
                                <h2>{name.common}</h2>

                                <p><b>Native Name:</b> {nativeName}</p>
                                <p><b>Population:</b> {population.toLocaleString('en-np')}</p>
                                <p><b>Region:</b> {region}</p>
                                <p><b>Sub Region:</b> {subregion}</p>
                                <p><b>Capital:</b> {capital.map((data) => <span key={data}>{data}&nbsp;,</span>)}</p>
                            </div>

                        </span>
                        <span className={styles.second_column}>
                            <p><b>Top level Domain:</b>{Object.values(tld).map((val) => {
                                return <span key={val}>{val}</span>
                            })}</p>
                            <p><b>Currency:</b>{currName}</p>
                            <p><b>Languages:</b>{languagesOfCountry}</p>

                        </span>



                    </div>
                    <div className={styles.border_country}>
                        {borders && <b>Border Countries:</b>}
                        {
                            bordersOfCountry ? bordersOfCountry.map((border, i) => {
                                return <Link to={`/${border}`} className='anchor_decoration' key={i}><p>{border}</p></Link>
                            }) : ''
                        }
                    </div>
                </div>
            </div>
            </div>
        </main>
    )
}
