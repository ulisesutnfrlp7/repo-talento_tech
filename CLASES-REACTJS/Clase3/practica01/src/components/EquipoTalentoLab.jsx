import React from "react";

const EquipoTalentoLab = ({ equipo }) => {
  return (
    <div>
      {equipo.map((persona, index) => (
        <div key={index} style={{ marginBottom: "1rem" }}>
          <img src={persona.imagen} alt={persona.nombre} width={100} />
          <p><strong>{persona.nombre}</strong></p>
          <p>{persona.rol}</p>
        </div>
      ))}
    </div>
  );
};

export default EquipoTalentoLab;