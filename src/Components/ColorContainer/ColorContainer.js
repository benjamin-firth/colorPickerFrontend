import React, { useState, useEffect } from 'react';
import PaletteForm from '../PaletteForm/PaletteForm';
import './ColorContainer.scss';
import ColorCard from '../ColorCard/ColorCard';

export const ColorContainer = () => {

  const [currentPalette, setCurrentPalette] = useState({
    color1: {id: 1, color: '', locked: false},
    color2: {id: 2, color: '', locked: false},
    color3: {id: 3, color: '', locked: false},
    color4: {id: 4, color: '', locked: false},
    color5: {id: 5, color: '', locked: false}
  });

  const regeneratePalette = () => {
    let ids = [1, 2, 3, 4, 5];
    let newColors = {};

    ids.forEach(id => {
      if (!currentPalette[`color${id}`].locked) {
        newColors[`color${id}`] = { id: id, color: Math.floor(Math.random()*16777215).toString(16), locked: false }
      };
    });

    setCurrentPalette({
      ...currentPalette, ...newColors
    });
  };

  const generatePalette = () => {
    setCurrentPalette({
        color1: {id: 1, color: Math.floor(Math.random()*16777215).toString(16), locked: false},
        color2: {id: 2, color: Math.floor(Math.random()*16777215).toString(16), locked: false},
        color3: {id: 3, color: Math.floor(Math.random()*16777215).toString(16), locked: false},
        color4: {id: 4, color: Math.floor(Math.random()*16777215).toString(16), locked: false},
        color5: {id: 5, color: Math.floor(Math.random()*16777215).toString(16), locked: false}
      });
  };

  const lockColor = (event, id) => {
    event.preventDefault();
    setCurrentPalette({
      ...currentPalette, [`color${id}`]: {
        id: id, color: currentPalette[`color${id}`]['color'], locked: !currentPalette[`color${id}`]['locked']
      }
    });
  };

  useEffect(() => {
    generatePalette();
  }, []);

  return (
    <section className='color-container'>
      <div className='color-card-container'>
        <ColorCard cardColor={currentPalette.color1} lockColor={lockColor}/>
        <ColorCard cardColor={currentPalette.color2} lockColor={lockColor}/>
        <ColorCard cardColor={currentPalette.color3} lockColor={lockColor}/>
        <ColorCard cardColor={currentPalette.color4} lockColor={lockColor}/>
        <ColorCard cardColor={currentPalette.color5} lockColor={lockColor}/>
      </div>
      <button
        type='button'
        className='generate-palette-button'
        onClick={regeneratePalette}>Generate New Palette
      </button>
      <PaletteForm currentPalette={currentPalette} />
    </section>
  );
};

export default ColorContainer;
