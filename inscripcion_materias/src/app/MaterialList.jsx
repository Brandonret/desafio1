"use client";
import React from 'react';
import { materias } from './data';

const MaterialList = ({ inscribirMateria }) => {
    return (
        <div>
            <h2>Materias Disponibles</h2>
            <ul>
                {materias.map(materia => (
                    <li key={materia.id}>
                        <h3>{materia.nombre}</h3>
                        <p>{materia.descripcion} - {materia.horario} - {materia.profesor} - {materia.unidades} unidades</p>
                        <button onClick={() => inscribirMateria(materia)}>Inscribir</button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default MaterialList;