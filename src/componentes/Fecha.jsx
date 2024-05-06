import React, { useState } from 'react';

function FechaInput({ onFechaSeleccionada }) {
  const [fecha, setFecha] = useState('');

  const handleFechaChange = event => {
    setFecha(event.target.value);
  };

  const handleSubmit = event => {
    event.preventDefault();
    // Aquí podrías realizar cualquier validación adicional sobre la fecha antes de enviarla
    if (fecha.trim() === '') {
      alert('Por favor ingresa una fecha');
      return;
    }
    onFechaSeleccionada(fecha);
    setFecha('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Fecha:
        <input type="date" value={fecha} onChange={handleFechaChange} />
      </label>
      <button type="submit">Seleccionar</button>
    </form>
  );
}

export  {FechaInput};