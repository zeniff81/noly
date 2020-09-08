import React, { useState } from 'react';
import './css/ItemCardEdit.css';
import Button from '../common/Button';
import SizeSelector from './SizeSelector';

function ItemCardEdit() {
  const [state, setState] = useState({
    title: 'newtitle',
    description: 'newDesc',
    price: 'newPrice',
    size: 'newSize',
  });

  const setSize = (newSize) => {
    setState({ ...state, size: newSize });
  };

  const onCancelClick = () => {
    //onCancelClick
  };

  const onOkClick = () => {
    //onOkClick
  };

  return (
    <div className='itemCardEdit'>
      <div className='itemCardEdit__row'>
        <img
          src={require('../../resources/campo.png')}
          alt=''
          className='itemCardEdit__image'
        />
      </div>
      <div className='itemCardEdit__row' value={state.title}>
        <div>Título</div>
        <input type='text' />
      </div>
      <div className='itemCardEdit__row' value={state.description}>
        <div>Descripción</div>
        <input type='text' />
      </div>
      <div className='itemCardEdit__row' value={state.price}>
        <div>Precio</div>
        <input type='text' />
      </div>

      <div className='itemCardEdit__row'>
        <SizeSelector setSize={setSize} />
      </div>

      <div className='itemCardEdit__row itemCardEdit__actions'>
        <Button onClick={onCancelClick} caption='Cancelar' />
        <Button onClick={onOkClick} caption='Aceptar' />
      </div>
    </div>
  );
}

export default ItemCardEdit;
