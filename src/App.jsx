import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Router, Routes, Route ,redirect } from "react-router-dom"
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap/dist/js/bootstrap.min.js"
import Nav from './Component/Nav/Nav'
import Carrusel from './Component/Carrusel/Carrusel'
import Card from './Component/Card/Card'
import Menu_opciones from './Component/Menu_opciones/Menu_opciones'
import Venta from './Component/Venta/Venta'
import {Provider} from 'react-redux'
import Todo from './Component/Todo/Todo'
import { useState, useEffect } from 'react'
import { Outlet, Link, NavLink } from "react-router-dom"

function App() {
     const [listacarristo, setlistacarristo] = useState([])
     const [listArticulo, setlistArticulo] = useState([])
     const [estadoUsurio,setestadoUsurio]=useState(false)
     console.log("Pedro",listacarristo)
     console.log("Esto son los datos buscado", listArticulo,)
     
     return (

          <div className='Pagina_Inicio'>
               

               <header>
                    <Nav datos={listacarristo} datos2={setlistArticulo} setestadoUsurio={setestadoUsurio}></Nav>
               </header>

             
               <Routes> 
                      <Route> 
                  
                 <Route path="/Venta/:id" element={<Venta/> } component={<Venta/>} />
                 <Route path="/Todo" element={<Todo datos={setlistacarristo} datos2={listArticulo} estadoUsurio={estadoUsurio}/>} />
                 
                  
               </Route>
            </Routes>
          <Outlet/>
          </div>
          
     )
}

export default App
