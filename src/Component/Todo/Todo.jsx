import { useEffect, useState } from 'react'
import { Router, Routes, Route } from "react-router-dom"
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap/dist/js/bootstrap.min.js"
import Carrusel from '../Carrusel/Carrusel'
import Card from '../Card/Card'





function Todo({datos,datos2,estadoUsurio}) {
     
 
     return (

          <div className='Pagina_Inicio'>
               

               <div className='carrusel'>
                    <Carrusel></Carrusel>
               </div>
               {/* <div className='cuerpo-venta'>
                 <Venta></Venta>
                
               </div> */}


               <div className='cuerpo'>
                    <Card lista={datos} lista2={datos2} estadoUsurio={estadoUsurio}></Card>
                    {/* <div className='menu'>
                     
                   </div> */}
                    
               </div> 
               

          </div>
     )
}

export default Todo
