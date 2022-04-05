import React from "react";

const Select = (props) => {
  return (
    <div className = "select" onClick = {props.elegir}>
      {props.valor.eleccion}
    </div>
  );
};

export default Select;