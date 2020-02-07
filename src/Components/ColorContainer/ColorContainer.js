import React from 'react';
import './ColorContainer.scss';
import ColorCard from '../ColorCard/ColorCard';
import PropTypes from 'prop-types';

function ColorContainer() {
  return (
    <section className='color-container'>
      <div className='color-card-container'>
        <ColorCard id={1}/>
        <ColorCard id={2}/>
        <ColorCard id={3}/>
        <ColorCard id={4}/>
        <ColorCard id={5}/>
      </div>
      <button className='generate-palette-button'>Generate New Palette</button>
    </section>
  );
}

export default ColorContainer;
