import { useState, useEffect } from 'react'
import "../Venta/Venta.css"
import { Router, Routes, Route } from "react-router-dom"
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap/dist/js/bootstrap.min.js"

function Venta() {
     const [numero, setm] = useState([])
  useEffect(() => {

    const fetchEventoData = async () => {
      try {
        const response = await fetch("http://localhost:5211/api/Articulos/1", {
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

  }, [])


  useEffect(() => {

    console.log("Aqui esta mi dato ")
    console.log(numero)
  }, [numero])


  return (
    <div className='cuerpo-card'>
      
        <div key={numero.idArticulos} className="card">
          
          <img src={numero.imagen} className="Imagens" alt="..." />
          <div className='datos-card'>

            <h5 className="card-title">{numero.nombre}</h5>
            <h6 className="card-title">Pantalla: {numero.pantalla}</h6>
            <h6 className="card-title">Ram: {numero.ram}</h6>
            <h6 className="card-title">Almacenamiento: {numero.almacenamiento}</h6>
            <h6 className="card-title">Cantidad: {numero.cantidad}</h6>
            <h6 className="card-title"><i className="bi bi-tags"/>Precios: {numero.precios}</h6>

          </div>
        </div>

        <div className='cuerpo_Pago' >

        </div>
      
    </div>
  ) 
}

export default Venta
