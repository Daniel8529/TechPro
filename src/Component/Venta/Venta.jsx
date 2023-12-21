import { useState, useEffect } from 'react'
import "../Venta/Venta.css"
import { Router, Routes, Route } from "react-router-dom"
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap/dist/js/bootstrap.min.js"
import {useParams} from "react-router-dom"
function Venta() {
  const  datos  = useParams();
     const [numero, setm] = useState([])
  useEffect(() => {

    const fetchEventoData = async () => {
      try {
        const response = await fetch("http://localhost:5211/api/Articulos/"+datos.id, {
          method: "GET",
          headers: {
            'Content-Type': 'application/json',
          },
          

        })

        const data = await response.json()
        console.log("Aqui fetch ")
        console.log(data)
        setm(data)

      } catch (error) {
        console.log(error)
      }
    }

    fetchEventoData()

  }, [datos])


  useEffect(() => {

    console.log("Aqui esta mi dato ")
    console.log(numero)
  }, [numero])


  return (
    <div className='cuerpo-cards'>
      
        <div key={numero.idArticulos} className="cards">
          
          <img src={numero.imagen} className="Imagenss" alt="..." />
          <div className='datos-cards'>

            <h5 className="card-title">{numero.nombre}</h5>
            <h6 className="card-title">Pantalla: {numero.pantalla}</h6>
            <h6 className="card-title">Ram: {numero.ram}</h6>
            <h6 className="card-title">Almacenamiento: {numero.almacenamiento}</h6>
            <h6 className="card-title">Cantidad: {numero.cantidad}</h6>
            <h6 className="card-title"><i className="bi bi-tags"/>Precios: {numero.precios}</h6>

          </div>
        </div>

        <div className='cuerpo_Pagos' >

        </div>
      
    </div>
  ) 
}

export default Venta
