import React from "react"
import gatito from '../imagenes/Gatito.jpg'
import './../css/Publicaciones.css'

const Publicacion=({gusta, setGusta}) => {
    return (
        <>
        <div className="publicacion">
            <img className="publicacionFoto" src={gatito} alt="Gatito" />
           
      

      <div className="card">
        <button onClick={() => setGusta(gusta + 1)}>Me gusta {gusta}</button>
 
      </div>
        </div>
        </>
    )
}
export default Publicacion