import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Router, Routes, Route } from "react-router-dom"
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap/dist/js/bootstrap.min.js"
import Nav from './Component/Nav/Nav'
import Carrusel from './Component/Carrusel/Carrusel'
import Card from './Component/Card/Card'
import Menu_opciones from './Component/Menu_opciones/Menu_opciones'
import Venta from './Component/Venta/Venta'
import {Provider} from 'react-redux'




function App() {
     const [count, setCount] = useState(0)

     return (

          <div className='Pagina_Inicio'>
               

               <header>
                    <Nav></Nav>
               </header>

               <div className='carrusel'>
                    <Carrusel></Carrusel>
               </div>
               {/* <div className='cuerpo-venta'>
                 <Venta></Venta>
                
               </div> */}


               <div className='cuerpo'>
                    <Card></Card>
                    {/* <div className='menu'>
                     
                   </div> */}
                    
               </div> 
               {/* <Routes> 
                      <Route> 
                
               <Route path="/Venta" element={<Venta/> }/>
             
                  
               </Route>
            </Routes> */}

          </div>
     )
}

export default App
