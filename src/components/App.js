import React, { useState } from "react";
import Opcion from "./Select";
import Resultado from "./Game/Game";
import "./App.css";

function App() {
  const [eleccionJugador, setEleccionJugador] = useState({});
  const [eleccionCPU, setEleccionCPU] = useState({});

  const select = [
    {
      eleccion: "Piedra",
      derrota: "Tijera",
    },
    {
      eleccion: "Papel",
      derrota: "Piedra",
    },
    {
      eleccion: "Tijera",
      derrota: "Papel",
    },
  ];

  const elegirOpcion = (event) => {
    const jugador = select.find(
      (e) => e.eleccion === event.target.textContent
    );
    setEleccionJugador(jugador);
    eleccionRival();
  };

  const eleccionRival = () => {
    const eleccion = select[Math.floor(Math.random() * select.length)];

    setEleccionCPU(eleccion);
  };

  return (
    <div className="App">
      <Resultado jugador={eleccionJugador} maquina={eleccionCPU} />
      <main>
        <section>
          <div className="jugador">Jugador</div>
          <div className="eleccion">{eleccionJugador.eleccion}</div>
        </section>
        <section>
          <div className="CPU">CPU</div>
          <div className="eleccion">{eleccionCPU.eleccion}</div>
        </section>
      </main>
      <div className="opciones">
        {select.map((e) => (
          <Opcion elegir={elegirOpcion} valor={e} />
        ))}
      </div>
    </div>
  );
}

export default App;