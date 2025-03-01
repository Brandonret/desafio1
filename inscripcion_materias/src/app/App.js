"use client";
import React, { useState } from 'react';
import Header from './Header';
import MaterialList from './MaterialList';
import ResumenInscripcion from './ResumenInscripcion';

const App = () => {
    const [materiasInscritas, setMateriasInscritas] = useState([]);

    const inscribirMateria = (materia) => {
        if (!materiasInscritas.some(m => m.id === materia.id)) {
            setMateriasInscritas([...materiasInscritas, materia]);
        }
    };

    const eliminarInscripcion = (id) => {
        setMateriasInscritas(materiasInscritas.filter(m => m.id !== id));
    };

    const limpiarInscripcion = () => {
        setMateriasInscritas([]);
    };

    return (
        <div>
            <Header count={materiasInscritas.length} />
            <MaterialList inscribirMateria={inscribirMateria} />
            <ResumenInscripcion 
                materiasInscritas={materiasInscritas} 
                eliminarInscripcion={eliminarInscripcion} 
                limpiarInscripcion={limpiarInscripcion} 
            />
        </div>
    );
};

export default App;
