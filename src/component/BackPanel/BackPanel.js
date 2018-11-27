import React from 'react';
import CitiesList from '../CitiesList/CitiesList';
import './BackPanel.css';

const backPanel = props => (
  <div className="card-back">
    <CitiesList currentCity={props.currentCity} onSelect={props.onSelect} />
    <button className="button" onClick={props.clicked}>
      Flip
    </button>
  </div>
);

export default backPanel;
