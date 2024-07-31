
import { useState } from 'react';
import './App.css'
import darkmode from './assets/dark-mode-icon.svg';
import Navbar from './components/Navbar/Navbar';
import { Outlet } from 'react-router-dom';


function App() {
const[isDataloaded,setDataLoaded] = useState(false);

  return (
    <>
      <div>
      <Navbar src={darkmode}  loading={setDataLoaded}/>
        <Outlet/>
       
      </div>
    </>
  )
}

export default App
