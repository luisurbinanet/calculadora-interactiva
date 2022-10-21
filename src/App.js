import './App.css';
import freeCodeCampLogo from './images/fcc_primary_large.png';
import Boton from './components/Boton';
import BotonClear from './components/BotonClear';
import Logo from './components/Logo';
import Pantalla from './components/Pantalla';
import { useState } from 'react';
import { evaluate } from 'mathjs';

function App() {

  const [ input, setInput ] = useState('');

  const [ twoOperators, setTwoOperators ] = useState(false);

  const addInput = value => {
    if (isNaN(value) && ( (input.length === 0) || (twoOperators))) {
      alert('Introduzca un valor');
    } else {
      setInput(input + value);
      setTwoOperators( ( isNaN(value) ) ? true : false );
    }
  };

  const calcResult = () => {
    if (input) {
      setInput( evaluate(input) );
    }
  };

  return (
    <div className='App'>
      <Logo img={freeCodeCampLogo} />
      <div className='calculator-container'>
        <Pantalla input={input} />
        <div className='fila'>
          <Boton handleClic={addInput}>1</Boton> 
          <Boton handleClic={addInput}>2</Boton>
          <Boton handleClic={addInput}>3</Boton>
          <Boton handleClic={addInput}>+</Boton>
        </div>
        <div className='fila'>
          <Boton handleClic={addInput}>4</Boton>
          <Boton handleClic={addInput}>5</Boton>
          <Boton handleClic={addInput}>6</Boton>
          <Boton handleClic={addInput}>-</Boton>
        </div>
        <div className='fila'>
          <Boton handleClic={addInput}>7</Boton>
          <Boton handleClic={addInput}>8</Boton>
          <Boton handleClic={addInput}>9</Boton>
          <Boton handleClic={addInput}>*</Boton>
        </div>
        <div className='fila'>
          <Boton handleClic={calcResult}>=</Boton>
          <Boton handleClic={addInput}>0</Boton>
          <Boton handleClic={addInput}>.</Boton>
          <Boton handleClic={addInput}>/</Boton>
        </div>
        <div className='fila'>
          <BotonClear handleClear={ () => setInput('')}>
            Clear
          </BotonClear>
        </div>
      </div>
    </div>
  );
}

export default App;