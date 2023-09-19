import { useState } from 'react'
import { Router, Routes, Route } from "react-router-dom"
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap/dist/js/bootstrap.min.js"
import "../Carrusel/Carrusel.css"

function Carrusel() {
    return (
        <div className='contenedor'>
            <div className="Carrusel-img" id="carouselExampleSlidesOnly" data-bs-ride="carousel">

                <div className="carousel-item active">

                    <img src="https://th.bing.com/th/id/OIP.2cVv81s4zLug1W8xOe0HGwHaHa?pid=ImgDet&rs=1"
                        className="d-block w-100" alt="..." />
                </div>

                <div className="carousel-item">
                    <img src="https://www.altonivel.com.mx/wp-content/uploads/2018/06/Huawei-P20-Pro.jpg" className="d-block w-100" alt="..." />
                </div>

                <div className="carousel-item">

                    <img src="https://tigocolombia.vteximg.com.br/arquivos/ids/155801-1200-1200/Iphone-frontal.png?v=636610430723600000"
                        className="d-block w-100" alt="..." />

                </div>



            </div>
        </div>

    )
}

export default Carrusel