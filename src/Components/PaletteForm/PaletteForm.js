import React, { useState, useEffect } from 'react';
import './PaletteForm.scss';
import { apiRequest } from '../../utils/api';
import { addPalette } from '../../actions/index';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';

function PaletteForm({ currentPalette }) {

  const [paletteName, setPaletteName] = useState('');
  const [selectedProject, setSelectedProject] = useState('1');
  const dispatch = useDispatch();

  const savePalette = async event => {
    let palette =  {
      project_id: selectedProject,
      color1: currentPalette.color1.color,
      color2: currentPalette.color2.color,
      color3: currentPalette.color3.color,
      color4: currentPalette.color4.color,
      color5: currentPalette.color5.color,
      name: paletteName
    };

    dispatch(addPalette(palette));

    try {
      const response = await apiRequest('palettes', 'POST', palette);
    } catch (error) {
      console.log(error);
    };
  };

  const changeSelection = event => {
    let option = event.target.value;
    setSelectedProject(option);
  };

  const projectsToDisplay = useSelector(state => state.projects);

  return (
    <form className='palette-form'>
      <select value={selectedProject} onChange={changeSelection}>
        {projectsToDisplay.map(project => {
          return (
            <option id={project.id} value={project.id} key={project.id}>{project.name}</option>
          )
        })}
      </select>
      <input
        type='text'
        onChange={(e) => setPaletteName(e.target.value)}/>
      <button
        type='button'
        className='submit-palette-button'
        onClick={savePalette}
      >Save Palette
      </button>
    </form>
  );
};

PaletteForm.propTypes = {
  currentPalette: PropTypes.object
};

export default PaletteForm;
