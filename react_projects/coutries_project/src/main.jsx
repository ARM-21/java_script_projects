import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import { createBrowserRouter } from "react-router-dom";
import Main_section from './components/main_section/Main_section.jsx'
import Main_country from './components/Country_page/Main_country.jsx'
const router = createBrowserRouter([
  {
    path: "/",
    element:<App/>,
    children:[
      {
        path:"/",
        element:<Main_section/>,
      },
      {
        path:"/:country",
        element:<Main_country/>,  
      }
    ]
  }
  
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  // <React.StrictMode>
    <RouterProvider  router={router}/>
  // </React.StrictMode>,
)
