import React from "react";
import '../css/Boton.css';

function Boton (props) {

  const isOperator = value => {
    return isNaN(value) && (value !== '.') && (value !=='=' );
  };

  return (
    <div 
      className={`boton-container ${isOperator(props.children) ? 'operator' : ''}`.trim()} 
      onClick={() => props.handleClic(props.children)}>
      {props.children}
    </div>
  )
}

export default Boton