import React, { StrictMode } from "react";
import ReactDOM from 'react-dom/client'
import App from './App'

const targetElement = ReactDOM.createRoot(document.getElementById('root'));

targetElement.render(
    <StrictMode>
        <App />
    </StrictMode>
)



