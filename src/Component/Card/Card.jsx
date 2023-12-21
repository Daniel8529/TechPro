import { useState, useEffect } from 'react'
import ReactDOM from 'react-dom';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import "../Card/Card.css";
import Nav from '../Nav/Nav';
import {Outlet, Link,NavLink} from "react-router-dom"

function Card({lista,lista2,estadoUsurio}) {
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
        console.log("Este es el errro",error)
      }
    }
     
     fetchEventoData()

  }, [])


  useEffect(() => {

    console.log("Aqui esta mi dato ")
    console.log(m)
  }, [m])

  useEffect(() => {
    
    setm(lista2)
  }, [lista2])
 
  
  const agregar=(Id,imagen,nombre,almacenamiento,precioss)=>{
    if(estadoUsurio)
   
    fetch("http://localhost:5211/api/Carritos", {
      method: "POST",
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        "idArticuloss": Id,
        "correo": estadoUsurio,
        "imagen": imagen,
        "nombre": nombre,
        "almacenamiento": almacenamiento,
        "precios": precioss,
        "disponible": true
      })
    })
    .then(response => response.json())
    .then(data => {
      console.log("Esto es del data",data);
      fetchEventoData();
    })
    .catch(error => {
      console.log(error);
    });
  
    console.log("se ejecuto");
  
  };
  
  const fetchEventoData = async () => {
    try {
      const response = await fetch("http://localhost:5211/api/Carritos", {
        method: "GET",
        headers: {
          'Content-Type': 'application/json',
        },
      });
  
      const data = await response.json();
      lista(data);
    } catch (error) {
      console.log(error);
    }
    
    
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
          <Link  to={"/Venta/"+numero.idArticulos}  className="btn btn-primary">Comprar </Link>
        </div>
       
                   
                   
                    
    
      ))}
          <Outlet/>
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