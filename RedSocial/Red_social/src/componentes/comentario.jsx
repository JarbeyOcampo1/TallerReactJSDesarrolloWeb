import React, { useState } from 'react';

const Comentarios = ({ comentarios, agregarComentario }) => {
  const [nuevoComentario, setNuevoComentario] = useState('');

  const manejarAgregarComentario = () => {
    if (nuevoComentario.trim()) {
      agregarComentario(nuevoComentario);
      setNuevoComentario('');
    }
  };

  return (
    <div className="comentarios">
      <h3>Comentarioss</h3>
      <div className="comentario-input">
        <input type="text" placeholder="Escribe un comentario" value={nuevoComentario} onChange={(e) => setNuevoComentario(e.target.value)}/>
        <button onClick={manejarAgregarComentario}>Comentar</button>
      </div>
      <ul className="comentario-lista">
        {comentarios.map((comentario, index) => (
          <li key={index}>{comentario}</li>
        ))}
      </ul>
    </div>
  );
};

export default Comentarios
