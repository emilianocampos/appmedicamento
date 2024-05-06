import React from "react";
import '../Form.css'
const Form = ({ handleChange, añadirTarea, tarea }) => {
    return (
        <div>
            <form onSubmit={añadirTarea}>

                <input type="text" value={tarea} onChange={handleChange} />
                <button type="submit" className="btnad">Añadir medicamento</button>
            </form>
        </div>
    );
};

export { Form };
