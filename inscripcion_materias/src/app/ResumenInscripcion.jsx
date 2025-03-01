"use client";
import React from 'react';

const ResumenInscripcion = ({ materiasInscritas, eliminarInscripcion, limpiarInscripcion }) => {
    const totalUnidades = materiasInscritas.reduce((total, materia) => total + materia.unidades, 0);
    const totalMaterias = materiasInscritas.length;

    return (
        <div style={{ textAlign: 'center' }}>
            <h2>Materias Inscritas</h2>
            <ul style={{ listStyle: 'none', padding: 0 }}>
                {materiasInscritas.map(materia => (
                    <li key={materia.id} style={{ margin: '10px 0', padding: '15px', background: 'var(--list-item-background)', borderRadius: 'var(--border-radius)', width: '80%', marginLeft: 'auto', marginRight: 'auto' }}>
                        {materia.nombre} - {materia.unidades} unidades
                        <button onClick={() => eliminarInscripcion(materia.id)} style={{ marginLeft: '10px' }}>Eliminar</button>
                    </li>
                ))}
            </ul>
            <p>Total de unidades: {totalUnidades}</p>
            <p>Total de materias inscritas: {totalMaterias}</p>
            <button onClick={limpiarInscripcion} style={{ marginTop: '10px' }}>Limpiar Inscripción</button>
        </div>
    );
};

export default ResumenInscripcion;