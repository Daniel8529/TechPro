import { useState, useEffect } from 'react'
import { Router, Routes, Route } from "react-router-dom"
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap/dist/js/bootstrap.min.js"
import "../Nav/Nav.css"
import { gapi } from 'gapi-script'
import { Outlet, Link, NavLink } from "react-router-dom"
import GoogleLogin from 'react-google-login';
import { Provider } from 'react-redux'
import { useSelector } from 'react-redux';

// const m = [{
//   image: "https://www.altonivel.com.mx/wp-content/uploads/2018/06/Huawei-P20-Pro.jpg",
//   Nombre: "Huawei", Pantalla: "FH", Ram: "4ram", Almacenamiento: "120GB", Cantidad: 20, Precio: 16000, Disponible: true,
// }, {
//   image: "https://tigocolombia.vteximg.com.br/arquivos/ids/155801-1200-1200/Iphone-frontal.png?v=636610430723600000",
//   Nombre: "Iphone", Pantalla: "FULLHD", Ram: "6ram", Almacenamiento: "512GB", Cantidad: 5, Precio: 45000, Disponible: true,
// }, {
//   image: "https://static.nb.com.ar/i/nb_SAMSUNG-TELEFONO-CELULAR-S10-BLUE-128GB_ver_70852cd40e60e262a62ec9a63fdd440d.jpeg",
//   Nombre: "samsung galixi 23s", Pantalla: "FULLHD", Ram: "8ram", Almacenamiento: "240GB", Cantidad: 15, Precio: 30000, Disponible: true,
// }, {
//   image: "https://i0.wp.com/isamarcial.com.mx/wp-content/uploads/2021/04/m2-1.jpg?w=1366&ssl=1",
//   Nombre: "Iphone", Pantalla: "FULLHD", Ram: "6ram", Almacenamiento: "512GB", Cantidad: 5, Precio: 45000, Disponible: true,
// }, {
//   image: "https://th.bing.com/th/id/OIP.1XIIaBGHep-7VuqVfVMeVQHaHa?pid=ImgDet&rs=1",
//   Nombre: "samsung galixi 23s", Pantalla: "FULLHD", Ram: "8ram", Almacenamiento: "240GB", Cantidad: 15, Precio: 30000, Disponible: true,
// }, {
//   image: "https://tigocolombia.vteximg.com.br/arquivos/ids/155801-1200-1200/Iphone-frontal.png?v=636610430723600000",
//   Nombre: "Iphone", Pantalla: "FULLHD", Ram: "6ram", Almacenamiento: "512GB", Cantidad: 5, Precio: 45000, Disponible: true,
// }, {
//   image: "https://static.nb.com.ar/i/nb_SAMSUNG-TELEFONO-CELULAR-S10-BLUE-128GB_ver_70852cd40e60e262a62ec9a63fdd440d.jpeg",
//   Nombre: "samsung galixi 23s", Pantalla: "FULLHD", Ram: "8ram", Almacenamiento: "240GB", Cantidad: 15, Precio: 30000, Disponible: true,
// }]

function Nav() {

  const [m, setm] = useState([])
  const [searchValue, setSearchValue] = useState("");
  const [user, setUser] = useState({})
  const clientID = "69152384335-uo8a54kf1sm9nkpmf26b34d7j8lbs95p.apps.googleusercontent.com"
  const [userInfo, setUserInfo] = useState(null);
  const Articuloslist = useSelector(state => state.Articulos.listArticulo)

  const handleSearchChange = (e) => {
    setSearchValue(e.target.value);

  };

  const handleSearch = (e) => {
    e.preventDefault()
    fetchEventoData()
  };



  const fetchEventoData = async () => {
    try {
      const response = await fetch("http://localhost:5211/api/Articulos/Buscar/" + searchValue + "/", {
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

  const respuestaGoogle = (respuesta) => {
    // Aquí puedes acceder a la respuesta con la información del usuario autenticado
    console.log(respuesta);
    const { profileObj } = respuesta;
    setUserInfo(profileObj)
  };

  const respuestaError = (error) => {
    if (error.error === "popup_closed_by_user") {
      // La ventana de autenticación fue cerrada por el usuario
      console.log("Autenticación cancelada");
    } else {
      // Manejar otros errores de autenticación
      console.error(error);
    }
  };
  const Close=()=>{
    setUserInfo(null)
  }

   

  const [carrito, setcarrito] = useState([])
  useEffect(() => {
    
      const fetchEventoDataCarritos = async () => {
        try {
          const response = await fetch("http://localhost:5211/api/Carritos", {
            method: "GET",
            headers: {
              'Content-Type': 'application/json',
            },
            
  
          })
  
          const data = await response.json()
          console.log("Aqui fetch ")
          console.log(data)
          setcarrito(data)
  
        } catch (error) {
          console.log(error)
        }
      }
  
      fetchEventoDataCarritos()

    
  
    
  }, [Articuloslist])


  useEffect(() => {

    console.log("Aqui esta mi dato ")
    console.log(carrito)
  }, [carrito])
 




  return (
    <div className='navv'>

      <div className="pp">
        <img src="https://th.bing.com/th/id/OIP.llwDwEEyoebFungZ_F3RFAHaHa?pid=ImgDet&rs=1" className="d-block w-100" alt="..." />
      </div>
      <div className='Texto'>
        <Link className="nav-link" ><h1 className="nav-link ">Home</h1></Link>

      </div>


      <div className="btn-group">

      </div>


      <nav className="navbar bg-body-tertiary">
        <div className="container-fluid">
          <form className="d-flex" role="search">
            <select defaultValue="Todo" className="btn btn-secondary btn-sm dropdown-toggle" aria-label="Large select example">
              <option value="Todo" >Todo</option>
              <option value="Telefono">Telefono</option>
              <option value="Cargador">Cargador</option>
              <option value="PC">Pc</option>
            </select>
            <ul className="dropdown-menu">
            </ul>
            <input value={searchValue}
              onChange={handleSearchChange} className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
            <button onClick={handleSearch} className="btn btn-outline-success" type="submit">Search</button>
          </form>
        </div>
      </nav>

      <div className="dropdown">
        <button  className="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
          <i className="bi bi-cart-plus-fill" /> {carrito.length}
        </button>
        <ul className="dropdown-menu scrollable-menu" >
          <button className="handleSerachnver">Ver Todo</button>
          {carrito.map((numero) => (
            <li key={numero.idCarritos}>
              <button className="dropdown-item" type="button">
                <img src={numero.imagen} className="Img" alt="..." />
                <h5 className="card-title">{numero.nombre}</h5>
                <h6 className="card-title">Almacenamiento: {numero.almacenamiento}</h6>
                <h6 className="card-title"><i className="bi bi-tags" />Precios: {numero.precios}</h6>
              </button>
            </li>
          ))}
        </ul>


      </div>
      <div className='contenedor-google-login'>
        {!userInfo ? (

          <GoogleLogin
            buttonText='log in'
            className="google-login"
            clientId="69152384335-uo8a54kf1sm9nkpmf26b34d7j8lbs95p.apps.googleusercontent.com"
            onSuccess={respuestaGoogle}
            onFailure={respuestaError}
            cookiePolicy={'single_host_origin'}

          />


        ) : (
          <>
          <img className="googleimagen" src={userInfo.imageUrl} alt="..." />
          <button className='button-close' onClick={Close}>close</button>
          
          </>

        )}
      </div>
      <Outlet />
    </div>

  )
}

export default Nav