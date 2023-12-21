import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import 'bootstrap-icons/font/bootstrap-icons.css'
import { BrowserRouter } from "react-router-dom"


import { Provider } from 'react-redux'
ReactDOM.createRoot(document.getElementById('root')).render(

    <BrowserRouter>
        <App />
    </BrowserRouter>

)
