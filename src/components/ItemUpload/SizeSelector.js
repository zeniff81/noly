import './css/SizeSelector.css';
import React from 'react';
import Button from '../common/Button';
import { useState } from 'react';

function SizeSelector({ setSize }) {
  const [highlighted, setHighlighted] = useState(0);
  const [selected, setSelected] = useState('S');
  const buttonClick = (e) => {
    setSize(e.target.innerText);
    setSelected(e.target.innerText);
  };

  const getSelected = (innerText) => {
    return innerText === selected && 'sizeSelector__selected';
  };

  return (
    <div className='sizeSelector'>
      <div className='sizeSelector__title'>Elija el tamaño</div>{' '}
      <div className='sizeSelector__sizes'>
        <button
          className={`sizeSelector__btn ${getSelected('S')}`}
          onClick={buttonClick}
        >
          S
        </button>
        <button
          className={`sizeSelector__btn ${getSelected('M')}`}
          onClick={buttonClick}
        >
          M
        </button>
        <button
          className={`sizeSelector__btn ${getSelected('L')}`}
          onClick={buttonClick}
        >
          L
        </button>
        <button
          className={`sizeSelector__btn ${getSelected('XL')}`}
          onClick={buttonClick}
        >
          XL
        </button>
      </div>
      <div className='sizeSelector__display'>{selected}</div>
    </div>
  );
}

const ButtonWithHighlight = ({ button: NewButton, isHightlighted }) => {
  const [highlighted, setHighlighted] = useState(false);
  const toggleHighlight = () => {
    setHighlighted(!highlighted);
  };

  return (
    <div
      className='buttonWithHighlight'
      style={{
        border: 'solid 1px',
        borderColor: highlighted ? 'blue' : 'white',
        padding: 'none',
      }}
      onClick={toggleHighlight}
    >
      {NewButton}
    </div>
  );
};

export default SizeSelector;
