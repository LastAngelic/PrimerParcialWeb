import React from "react";

const Game = (props) => {
  let rFinal;

  if (
    props.jugador.derrota === props.maquina.eleccion &&
    props.jugador.eleccion
  ) {
    rFinal = <h1>Player wins</h1>;
  } else if (
    props.maquina.derrota === props.jugador.eleccion &&
    props.jugador.eleccion
  ) {
    rFinal = <h1>IA wins</h1>;
  } else if (
    props.jugador.eleccion === props.maquina.eleccion &&
    props.jugador.eleccion
  ) {
    rFinal = <h1>Empate</h1>;
  }

  return <h1>{rFinal}</h1>;
};

export default Game;