import React from 'react';
import './Button.css';

function Button({ caption, secondary, ...props }) {
  const secondaryClass = secondary && ' secondaryClass';
  return (
    <>
      <button className={'hablaConNolyBtn ' + props.className + secondaryClass}>
        {caption}
      </button>
    </>
  );
}

export default Button;
