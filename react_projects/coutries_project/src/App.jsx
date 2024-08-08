import { useState } from 'react';
import './App.css'
import Navbar from './components/Navbar/Navbar';
import { Outlet } from 'react-router-dom';
import CountryContext from './Contexts/CountryContext';

function App() {
  const darkMode= useState(JSON.parse(localStorage.getItem('dark')));
  return (
    <>
      <CountryContext.Provider value={darkMode}>
      <Navbar />
        <Outlet context={darkMode}/>
       
      </CountryContext.Provider>
    </>
  )
}

export default App
