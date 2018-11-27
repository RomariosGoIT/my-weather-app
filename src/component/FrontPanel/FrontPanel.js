import React from 'react';
import './FrontPanel.css';
import optionImage from './options.svg';
import WeatherIcons from '../WeatherIcons/WeatherIcon';

const frontPanel = props => (
  <div className={`card is-${props.icon}`}>
    <div className="card-row">
      <div className="card-day"> {props.date.format('dddd')} </div>
      <div className="card-day"> {props.date.format('MMM Do')} </div>
    </div>
    <WeatherIcons icons={props.icon} />
    <div className="card-row">
      <div className="card-temperature">
        <div>
          {`${parseInt(props.temperature, 10)}°C `}
          <span className="small">
            / {` ${parseInt(props.apparentTemperature, 10)}°C`}
          </span>
        </div>
      </div>
      <div className="card-weather"> {props.summary} </div>
    </div>
    <div className="card-line" />
    <div className="card-row">
      <div className="card-city"> {props.currentCityName.title} </div>
      <button className="card-options" onClick={props.clicked}>
        <img src={optionImage} width={32} alt="options" />
      </button>
    </div>
  </div>
);

export default frontPanel;
