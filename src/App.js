import React, { useState, useEffect } from 'react';
import { Tarea } from './componentes/Tarea';
import { Form } from './componentes/Form';
import { FechaInput } from './componentes/Fecha';
import './App.css';

function App() {
  const [tarea, setTarea] = useState('');
  const [fecha, setFecha] = useState('');
  const [tareas, setTareas] = useState(() => {
    const storedTareas = localStorage.getItem('tareas');
    return storedTareas ? JSON.parse(storedTareas) : [];
  });

  useEffect(() => {
    // Guardar tareas en el almacenamiento local cada vez que cambien
    localStorage.setItem('tareas', JSON.stringify(tareas));
  }, [tareas]);

  const handleChange = e => {
    setTarea(e.target.value);
  }

  const handleFechaSeleccionada = selectedDate => {
    setFecha(selectedDate);
  };

  const añadirTarea = e => {
    e.preventDefault();

    if (tarea.trim() === '') {
      alert('Por favor ingresa una tarea');
      return;
    }

    if (fecha.trim() === '') {
      alert('Por favor selecciona una fecha');
      return;
    }

    const nuevaTarea = {
      id: Date.now(),
      tarea,
      fecha, // Incluye la fecha en la nueva tarea
      completada: false
    };

    const totalTareas = [nuevaTarea, ...tareas];
    setTareas(totalTareas);
    setTarea('');
    setFecha('');
  }

  const borrarTarea = id => {
    const tareaActualizada = tareas.filter(t => t.id !== id);
    setTareas(tareaActualizada);
  }

  return (
    <div className="App">
      <h1>Lista de medicamentos</h1>

      <FechaInput onFechaSeleccionada={handleFechaSeleccionada} />

      <Form
        handleChange={handleChange}
        tarea={tarea}
        añadirTarea={añadirTarea}
      />

      {tareas.map(tarea => (
        <Tarea
          key={tarea.id}
          tarea={tarea}
          borrarTarea={borrarTarea}
        />
      ))}

    </div>
  );
}

export default App;