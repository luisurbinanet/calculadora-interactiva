import React from "react";
import '../css/Logo.css';

function Logo (props) {
  return (
    <div className='freecodecamp-logo-container'>
        <img
          src={props.img}
          className='freecodecamp-logo'
          alt='Logo de freeCodeCamp' />
      </div>
  );
};

export default Logo;