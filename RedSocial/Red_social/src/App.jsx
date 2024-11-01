import { useState } from 'react';
import Publicacion from './componentes/publicacion'
import Comentarios from './componentes/comentario'
import './App.css';

function App() {
  const [gusta, setGusta] = useState(0);
  const [comentarios, setComentarios] = useState([]); 

  const agregarComentario = (comentario) => {
    setComentarios(comentarios.concat(comentario));
  };

  return (
    <>
      <h1>RedFriends</h1>
      <Publicacion gusta={gusta} setGusta={setGusta} />
      <Comentarios comentarios={comentarios} agregarComentario={agregarComentario} />
      <div className="contenedor">
        <p>
          Derechos de autor reservados 
        </p>
      </div>
    </>
  );
}

export default App;
