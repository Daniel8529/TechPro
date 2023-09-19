import { useState, useEffect } from 'react'
import ReactDOM from 'react-dom';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import "../Card/Card.css";
import Nav from '../Nav/Nav';
import { GetArticulo } from '../../Redux/Articulos/ArticulosFuncion';
import { useDispatch,useSelector } from 'react-redux';

function Card() {
  const dispatch = useDispatch()
  const Articuloslist = useSelector(state => state.Articulos.listArticulo)
  const [m, setm] = useState([])
  
  useEffect(() => {
    
    const fetchEventoData = async () => {
      try {
        const response = await fetch("http://localhost:5211/api/Articulos/", {
          method: "GET",
          headers: {
            'Content-Type': 'application/json',
          },
  
  
        })
  
        const data = await response.json()
        console.log("Aqui fetch buscar ")
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
    console.log(m)
  }, [m])
 
  
  const agregar=(Id,imagen,nombre,almacenamiento,precioss)=>{
   
    fetch("http://localhost:5211/api/Carritos", {
        method: "POST",
        headers: {
          'Content-Type': 'application/json',
        },body: JSON.stringify({ 
          "idArticuloss":Id,
          "imagen":imagen,
          "nombre": nombre,
          "almacenamiento":almacenamiento,
          "precios":precioss,
          "disponible": true
        })
     
        
        

      })
      console.log("se ejecuto")



      

      const fetchEventoData = async () => {
        try {
          const response = await fetch("http://localhost:5211/api/Carritos", {
            method: "GET",
            headers: {
              'Content-Type': 'application/json',
            },
    
    
          })
    
          const data = await response.json()
          
          dispatch(GetArticulo(data))
        } catch (error) {
          console.log(error)
        }
      }
      fetchEventoData()
    
  } 

  return (
    <div className='cuerpo-card'>
      {m.map((numero) => (
        <div key={numero.idArticulos} className="card">
          
          <img src={numero.imagen} className="Imagens" alt="..." />
          <button className='boton-agregar ' onClick={() => agregar(numero.idArticulos,numero.imagen,
            numero.nombre,numero.almacenamiento,numero.precios)} ><i className="bi bi-cart-plus-fill"></i></button>
          <div className='datos-card'>

            <h5 className="card-title">{numero.nombre}</h5>
            <h6 className="card-title">Pantalla: {numero.pantalla}</h6>
            <h6 className="card-title">Ram: {numero.ram}</h6>
            <h6 className="card-title">Almacenamiento: {numero.almacenamiento}</h6>
            <h6 className="card-title">Cantidad: {numero.cantidad}</h6>
            <h6 className="card-title"><i className="bi bi-tags"/>Precios: {numero.precios}</h6>

          </div>
        </div>
      ))}
    </div>
  )
}



export default Card
// const fetchEventoData = async () => {
  //   try {
  //     const response = await fetch("http://localhost:5211/api/Articulos", {
  //       method: "GET",
  //       headers: {
  //         'Content-Type': 'application/json',
  //       },
        

  //     })

  //     const data = await response.json()
  //     console.log("Aqui fetch ")
  //     console.log(data)
  //     setm(data)

  //   } catch (error) {
  //     console.log(error)
  //   }
  // }

  // fetchEventoData()