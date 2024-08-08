import { useContext, useEffect, useState } from 'react';
import './navbar.css';
import light from './../../assets/light.svg';
import darkmode from './../../assets/dark-mode-icon.svg';
import CountryContext from '../../Contexts/CountryContext';

// let darkModeTracer = ;
export default function Navbar() {
    const [darkMode,setDarkMode] = useContext(CountryContext);
    // useEffect(()=>{
    //     // darkModeTracer=='true'&& document.body.classList.add('dark_mode');
    //     // setDarkMode(darkModeTracer=='true'?true:false)
    // },[])
    // let outletProp = useOutletContext()
    // console.log(outletProp)
return (
    <header className={`${darkMode?'dark_mode':''}`}>
        <nav>
            <h2><a href='#'>Where in the world</a></h2>
            <span className='dark_mode_enabler' onClick={()=>{
                // document.body.classList.toggle('dark_mode');
                // setDarkMode(prev=>!prev)
                setDarkMode(prev=>!prev)  
                localStorage.setItem('dark',!darkMode)           
  
                   
            }
            }>
                <img src={darkMode?light:darkmode} alt="dark-mode-img"   />
                <p>Dark mode</p>
            </span>
        </nav>
        
    </header>
)
}