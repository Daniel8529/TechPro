import { useState } from 'react'
import { Router, Routes, Route } from "react-router-dom"
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap/dist/js/bootstrap.min.js"
import "../Menu_opciones/Menu_opciones.css"


function Menu_opciones() {
    return (
        <div className='contenedor-principal'>
            
            <h4 className='nombre'>FILTRAR LOS RESULTADO</h4>
            <select class="form-select form-select-lg mb-3" aria-label="Large select example">
                <option selected>Open this select menu</option>
                <option value="1">One</option>
                <option value="2">Two</option>
                <option value="3">Three</option>
            </select>
            

        </div>
    )

}

export default Menu_opciones